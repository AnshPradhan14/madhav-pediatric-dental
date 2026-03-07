from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from database import get_session
from models.message import ContactMessage, ContactMessageCreate
from auth.utils import verify_token
from typing import List

router = APIRouter(tags=["messages"])


@router.post("/api/contact", response_model=ContactMessage)
def submit_contact(message: ContactMessageCreate, session: Session = Depends(get_session)):
    db = ContactMessage.model_validate(message)
    session.add(db)
    session.commit()
    session.refresh(db)
    return db


@router.get("/api/messages", response_model=List[ContactMessage])
def get_messages(session: Session = Depends(get_session), _: str = Depends(verify_token)):
    return session.exec(select(ContactMessage).order_by(ContactMessage.created_at.desc())).all()


@router.delete("/api/messages/{message_id}")
def delete_message(message_id: int, session: Session = Depends(get_session), _: str = Depends(verify_token)):
    db = session.get(ContactMessage, message_id)
    if not db:
        raise HTTPException(status_code=404, detail="Message not found")
    session.delete(db)
    session.commit()
    return {"ok": True}
