from fastapi import APIRouter, UploadFile, File, Depends, HTTPException
from auth.utils import verify_token
import os
import shutil
import uuid

router = APIRouter(prefix="/api/upload", tags=["upload"])

UPLOAD_DIR = "public/uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("")
def upload_image(file: UploadFile = File(...), _: str = Depends(verify_token)):
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File must be an image")

    # Generate unique filename
    ext = os.path.splitext(file.filename)[1]
    filename = f"{uuid.uuid4()}{ext}"
    file_path = os.path.join(UPLOAD_DIR, filename)

    # Save file
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Return the URL path
    return {"url": f"/uploads/{filename}"}
