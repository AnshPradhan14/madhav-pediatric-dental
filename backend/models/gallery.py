from sqlmodel import SQLModel, Field
from typing import Optional


class GalleryImage(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    image_url: str
    caption: Optional[str] = None


class GalleryImageCreate(SQLModel):
    image_url: str
    caption: Optional[str] = None
