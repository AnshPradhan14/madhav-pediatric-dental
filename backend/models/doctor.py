from sqlmodel import SQLModel, Field
from typing import Optional


class Doctor(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    specialization: str
    qualification: str
    description: str
    photo_url: Optional[str] = None


class DoctorCreate(SQLModel):
    name: str
    specialization: str
    qualification: str
    description: str
    photo_url: Optional[str] = None


class DoctorUpdate(SQLModel):
    name: Optional[str] = None
    specialization: Optional[str] = None
    qualification: Optional[str] = None
    description: Optional[str] = None
    photo_url: Optional[str] = None
