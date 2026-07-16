from sqlmodel import SQLModel, Field
from pydantic import EmailStr
from typing import Optional
from datetime import datetime


class ContactMessage(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    email: Optional[EmailStr] = None
    phone: str
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)


class ContactMessageCreate(SQLModel):
    name: str
    email: Optional[EmailStr] = None
    phone: str
    message: str
