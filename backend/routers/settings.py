from fastapi import APIRouter, Depends
from sqlmodel import Session, select
from database import get_session
from models.settings import WebsiteSettings, WebsiteSettingsUpdate
from auth.utils import verify_token

router = APIRouter(prefix="/api/settings", tags=["settings"])


def get_or_create_settings(session: Session) -> WebsiteSettings:
    settings = session.exec(select(WebsiteSettings)).first()
    if not settings:
        settings = WebsiteSettings()
        session.add(settings)
        session.commit()
        session.refresh(settings)
    return settings


@router.get("", response_model=WebsiteSettings)
def get_settings(session: Session = Depends(get_session)):
    return get_or_create_settings(session)


@router.put("", response_model=WebsiteSettings)
def update_settings(update: WebsiteSettingsUpdate, session: Session = Depends(get_session), _: str = Depends(verify_token)):
    settings = get_or_create_settings(session)
    data = update.model_dump(exclude_unset=True)
    for key, value in data.items():
        setattr(settings, key, value)
    session.add(settings)
    session.commit()
    session.refresh(settings)
    return settings
