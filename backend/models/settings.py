from sqlmodel import SQLModel, Field
from typing import Optional


class WebsiteSettings(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    phone: Optional[str] = "+91 88723 00851"
    whatsapp: Optional[str] = "918872300851"
    address: Optional[str] = "T-11, 3rd Floor, Raspan Arcade, Nikol, Ahmedabad, Gujarat"
    clinic_hours: Optional[str] = "Monday to Saturday: 9:30 AM - 1:00 PM & 5:30 PM - 9:00 PM"
    email: Optional[str] = None
    facebook_url: Optional[str] = None
    instagram_url: Optional[str] = None


class WebsiteSettingsUpdate(SQLModel):
    phone: Optional[str] = None
    whatsapp: Optional[str] = None
    address: Optional[str] = None
    clinic_hours: Optional[str] = None
    email: Optional[str] = None
    facebook_url: Optional[str] = None
    instagram_url: Optional[str] = None
