from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Session, select
import os
from dotenv import load_dotenv

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

# Mount public directory for uploads
os.makedirs("public/uploads", exist_ok=True)
app.mount("/uploads", StaticFiles(directory="public/uploads"), name="uploads")

# CORS: allow Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
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
    admin_email = os.getenv("ADMIN_EMAIL", "admin@madhavdental.com")
    admin_password = os.getenv("ADMIN_PASSWORD", "admin123")
    with Session(engine) as session:
        existing = session.exec(select(AdminUser).where(AdminUser.email == admin_email)).first()
        if not existing:
            admin = AdminUser(email=admin_email, hashed_password=hash_password(admin_password))
            session.add(admin)
            session.commit()
            print(f"✅ Default admin created: {admin_email}")


@app.get("/")
def root():
    return {"message": "Madhav Pediatric Dental Care API is running."}
