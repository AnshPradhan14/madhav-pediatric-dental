from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from database import get_session
from models.gallery import GalleryImage, GalleryImageCreate
from auth.utils import verify_token
from typing import List

router = APIRouter(prefix="/api/gallery", tags=["gallery"])


@router.get("", response_model=List[GalleryImage])
def get_gallery(session: Session = Depends(get_session)):
    return session.exec(select(GalleryImage)).all()


@router.post("", response_model=GalleryImage)
def add_image(image: GalleryImageCreate, session: Session = Depends(get_session), _: str = Depends(verify_token)):
    db_image = GalleryImage.model_validate(image)
    session.add(db_image)
    session.commit()
    session.refresh(db_image)
    return db_image


@router.delete("/{image_id}")
def delete_image(image_id: int, session: Session = Depends(get_session), _: str = Depends(verify_token)):
    db = session.get(GalleryImage, image_id)
    if not db:
        raise HTTPException(status_code=404, detail="Image not found")
    session.delete(db)
    session.commit()
    return {"ok": True}
