from sqlmodel import SQLModel, Field
from typing import Optional


class Treatment(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    description: str
    icon: Optional[str] = "dentistry"


class TreatmentCreate(SQLModel):
    title: str
    description: str
    icon: Optional[str] = "dentistry"


class TreatmentUpdate(SQLModel):
    title: Optional[str] = None
    description: Optional[str] = None
    icon: Optional[str] = None
