from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from database import get_session
from models.treatment import Treatment, TreatmentCreate, TreatmentUpdate
from auth.utils import verify_token
from typing import List

router = APIRouter(prefix="/api/treatments", tags=["treatments"])


@router.get("", response_model=List[Treatment])
def get_treatments(session: Session = Depends(get_session)):
    return session.exec(select(Treatment)).all()


@router.post("", response_model=Treatment)
def create_treatment(treatment: TreatmentCreate, session: Session = Depends(get_session), _: str = Depends(verify_token)):
    db_treatment = Treatment.model_validate(treatment)
    session.add(db_treatment)
    session.commit()
    session.refresh(db_treatment)
    return db_treatment


@router.put("/{treatment_id}", response_model=Treatment)
def update_treatment(treatment_id: int, treatment: TreatmentUpdate, session: Session = Depends(get_session), _: str = Depends(verify_token)):
    db = session.get(Treatment, treatment_id)
    if not db:
        raise HTTPException(status_code=404, detail="Treatment not found")
    data = treatment.model_dump(exclude_unset=True)
    for key, value in data.items():
        setattr(db, key, value)
    session.add(db)
    session.commit()
    session.refresh(db)
    return db


@router.delete("/{treatment_id}")
def delete_treatment(treatment_id: int, session: Session = Depends(get_session), _: str = Depends(verify_token)):
    db = session.get(Treatment, treatment_id)
    if not db:
        raise HTTPException(status_code=404, detail="Treatment not found")
    session.delete(db)
    session.commit()
    return {"ok": True}
