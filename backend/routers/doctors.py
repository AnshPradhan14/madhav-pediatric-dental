from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from database import get_session
from models.doctor import Doctor, DoctorCreate, DoctorUpdate
from auth.utils import verify_token
from typing import List

router = APIRouter(prefix="/api/doctors", tags=["doctors"])


@router.get("", response_model=List[Doctor])
def get_doctors(session: Session = Depends(get_session)):
    return session.exec(select(Doctor)).all()


@router.post("", response_model=Doctor)
def create_doctor(doctor: DoctorCreate, session: Session = Depends(get_session), _: str = Depends(verify_token)):
    db_doctor = Doctor.model_validate(doctor)
    session.add(db_doctor)
    session.commit()
    session.refresh(db_doctor)
    return db_doctor


@router.put("/{doctor_id}", response_model=Doctor)
def update_doctor(doctor_id: int, doctor: DoctorUpdate, session: Session = Depends(get_session), _: str = Depends(verify_token)):
    db_doctor = session.get(Doctor, doctor_id)
    if not db_doctor:
        raise HTTPException(status_code=404, detail="Doctor not found")
    doctor_data = doctor.model_dump(exclude_unset=True)
    for key, value in doctor_data.items():
        setattr(db_doctor, key, value)
    session.add(db_doctor)
    session.commit()
    session.refresh(db_doctor)
    return db_doctor


@router.delete("/{doctor_id}")
def delete_doctor(doctor_id: int, session: Session = Depends(get_session), _: str = Depends(verify_token)):
    db_doctor = session.get(Doctor, doctor_id)
    if not db_doctor:
        raise HTTPException(status_code=404, detail="Doctor not found")
    session.delete(db_doctor)
    session.commit()
    return {"ok": True}
