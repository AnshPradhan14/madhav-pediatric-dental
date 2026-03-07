from sqlmodel import SQLModel, Field
from typing import Optional
from datetime import datetime


class Appointment(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    phone: str
    email: Optional[str] = None
    treatment: str
    preferred_date: str
    message: Optional[str] = None
    status: str = Field(default="Pending")
    created_at: datetime = Field(default_factory=datetime.utcnow)


class AppointmentCreate(SQLModel):
    name: str
    phone: str
    email: Optional[str] = None
    treatment: str
    preferred_date: str
    message: Optional[str] = None


class AppointmentStatusUpdate(SQLModel):
    status: str
