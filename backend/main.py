from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Session, select
import os
from dotenv import load_dotenv
from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware
from limiter import limiter

load_dotenv()

from database import create_db_and_tables, get_session, engine
from models.admin import AdminUser
from auth.utils import hash_password
from auth.router import router as auth_router
from routers.doctors import router as doctors_router
from routers.treatments import router as treatments_router
from routers.gallery import router as gallery_router
from routers.appointments import router as appointments_router
from routers.messages import router as messages_router
from routers.settings import router as settings_router

from fastapi.staticfiles import StaticFiles
from routers.upload import router as upload_router

app = FastAPI(title="Madhav Pediatric Dental Care API", version="1.0.0")

# Rate Limiting
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)
app.add_middleware(SlowAPIMiddleware)

# Mount public directory for uploads
upload_dir = os.getenv("UPLOAD_DIR", "public/uploads")
os.makedirs(upload_dir, exist_ok=True)
app.mount("/uploads", StaticFiles(directory=upload_dir), name="uploads")

# CORS: allow Next.js frontend
allowed_origins_str = os.getenv("ALLOWED_ORIGINS", "http://localhost:3000,http://127.0.0.1:3000")
allowed_origins = [origin.strip() for origin in allowed_origins_str.split(",") if origin.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include all routers
app.include_router(auth_router)
app.include_router(doctors_router)
app.include_router(treatments_router)
app.include_router(gallery_router)
app.include_router(appointments_router)
app.include_router(messages_router)
app.include_router(settings_router)
app.include_router(upload_router)


@app.on_event("startup")
def on_startup():
    create_db_and_tables()
    
    # Secure Default Credentials Logic
    env = os.getenv("ENVIRONMENT", "development").lower()
    admin_email = os.getenv("ADMIN_EMAIL", "admin@madhavdental.com")
    admin_password = os.getenv("ADMIN_PASSWORD", "admin123")
    
    with Session(engine) as session:
        existing = session.exec(select(AdminUser).where(AdminUser.email == admin_email)).first()
        if not existing:
            if env == "production" and admin_password == "admin123":
                print(f"⚠️ [WARNING] Production environment detected with default password. Skipping creation of default admin account for {admin_email}. Please set a secure ADMIN_PASSWORD in .env.")
            else:
                admin = AdminUser(email=admin_email, hashed_password=hash_password(admin_password))
                session.add(admin)
                session.commit()
                print(f"✅ Admin created: {admin_email}")


@app.get("/")
def root():
    return {"message": "Madhav Pediatric Dental Care API is running."}
