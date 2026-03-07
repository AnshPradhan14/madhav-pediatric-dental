from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from database import get_session
from models.appointment import Appointment, AppointmentCreate, AppointmentStatusUpdate
from auth.utils import verify_token
from typing import List

router = APIRouter(prefix="/api/appointments", tags=["appointments"])


@router.post("", response_model=Appointment)
def create_appointment(appointment: AppointmentCreate, session: Session = Depends(get_session)):
    db = Appointment.model_validate(appointment)
    session.add(db)
    session.commit()
    session.refresh(db)
    return db


@router.get("", response_model=List[Appointment])
def get_appointments(session: Session = Depends(get_session), _: str = Depends(verify_token)):
    return session.exec(select(Appointment).order_by(Appointment.created_at.desc())).all()


@router.put("/{appointment_id}", response_model=Appointment)
def update_appointment_status(appointment_id: int, update: AppointmentStatusUpdate, session: Session = Depends(get_session), _: str = Depends(verify_token)):
    db = session.get(Appointment, appointment_id)
    if not db:
        raise HTTPException(status_code=404, detail="Appointment not found")
    db.status = update.status
    session.add(db)
    session.commit()
    session.refresh(db)
    return db


@router.delete("/{appointment_id}")
def delete_appointment(appointment_id: int, session: Session = Depends(get_session), _: str = Depends(verify_token)):
    db = session.get(Appointment, appointment_id)
    if not db:
        raise HTTPException(status_code=404, detail="Appointment not found")
    session.delete(db)
    session.commit()
    return {"ok": True}
