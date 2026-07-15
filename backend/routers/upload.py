from fastapi import APIRouter, UploadFile, File, Depends, HTTPException
from auth.utils import verify_token
import os
import uuid
import io
from PIL import Image, UnidentifiedImageError

router = APIRouter(prefix="/api/upload", tags=["upload"])

UPLOAD_DIR = "public/uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("")
async def upload_image(file: UploadFile = File(...), _: str = Depends(verify_token)):
    # Read file content into memory for verification
    content = await file.read()
    
    try:
        # Use Pillow to strictly verify the file is a valid image (checks magic bytes, not just extension)
        img = Image.open(io.BytesIO(content))
        img.verify() # Verify it's not corrupt
        
        # Determine the true format from Pillow, ignore user's extension entirely
        format_map = {
            "JPEG": ".jpg",
            "PNG": ".png",
            "WEBP": ".webp",
            "GIF": ".gif"
        }
        
        img_format = img.format
        if not img_format or img_format not in format_map:
            raise HTTPException(status_code=400, detail=f"Unsupported image format: {img_format}")
            
        ext = format_map[img_format]
        
    except UnidentifiedImageError:
        raise HTTPException(status_code=400, detail="Invalid image file")
    except Exception as e:
        raise HTTPException(status_code=400, detail="Error processing image")

    # Generate a completely new UUID filename with the verified extension
    filename = f"{uuid.uuid4()}{ext}"
    file_path = os.path.join(UPLOAD_DIR, filename)

    # Save the original binary content (or we could resave via Pillow if we wanted to strip EXIF, but this is fine for now)
    with open(file_path, "wb") as buffer:
        buffer.write(content)

    # Return the URL path
    return {"url": f"/uploads/{filename}"}
