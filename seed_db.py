import os
import sys

# Add backend directory to sys.path for imports
sys.path.append(os.path.abspath("backend"))

from sqlmodel import Session, create_engine, select, SQLModel, delete
import os

# Correct path to the database
DB_PATH = os.path.join("backend", "clinic.db")
engine = create_engine(f"sqlite:///{DB_PATH}")

from models.doctor import Doctor
from models.treatment import Treatment
from models.gallery import GalleryImage
from models.settings import WebsiteSettings

def seed_data():
    # Ensure tables exist
    SQLModel.metadata.create_all(engine)
    
    with Session(engine) as session:
        # Clear existing data so our images apply
        session.exec(delete(Doctor))
        session.exec(delete(Treatment))
        session.exec(delete(GalleryImage))
        
        # 1. Doctors
        doctors = [
            Doctor(
                name="Dr. Jatin S. Patel",
                specialization="Maxillofacial Surgeon",
                qualification="MDS – KGMU Lucknow",
                description="Expert in dental implants, jaw reconstruction, and oral oncology with over a decade of clinical experience.",
                photo_url="/images/doctors/dr_jatin.png"
            ),
            Doctor(
                name="Dr. Poonam J. Patel",
                specialization="Pediatric Dentist",
                qualification="MDS – Pediatric Dentistry",
                description="Specialist in gentle dental care for children, focusing on preventative health and positive dental experiences.",
                photo_url="/images/doctors/dr_poonam.png"
            )
        ]
        session.add_all(doctors)

        # 2. Treatments
        treatments = [
            Treatment(title="Dental Implants", description="Restore your smile with permanent, natural-looking tooth replacements.", icon="dentistry"),
            Treatment(title="Pediatric Dentistry", description="Specialized care for infants, children, and adolescents in a fun environment.", icon="child_care"),
            Treatment(title="RCT (Root Canal)", description="Painless root canal treatments to save your natural teeth with modern technology.", icon="vibration"),
            Treatment(title="Wisdom Tooth Surgery", description="Expert surgical extraction of impacted wisdom teeth with minimal discomfort.", icon="masks"),
            Treatment(title="Orthodontics", description="Braces and clear aligners to perfect your smile alignment and oral function.", icon="align_horizontal_center"),
            Treatment(title="Jaw Surgery", description="Correction of skeletal issues and jaw injuries by experienced MDS surgeons.", icon="face"),
        ]
        session.add_all(treatments)

        # 3. Gallery
        gallery = [
            GalleryImage(image_url="/images/gallery/reception.png", caption="Modern Reception Area"),
            GalleryImage(image_url="/images/gallery/pediatric.png", caption="Kid-Friendly Operatory"),
            GalleryImage(image_url="/images/gallery/surgery.png", caption="Advanced Surgical Suite"),
        ]
        session.add_all(gallery)

        # Always check/add settings if not present
        if not session.exec(select(WebsiteSettings)).first():
            settings = WebsiteSettings(
                phone="+91 88723 00851",
                whatsapp="918872300851",
                address="T-11, 3rd Floor, Raspan Arcade, Nikol, Ahmedabad, Gujarat",
                clinic_hours="Monday to Saturday: 9:30 AM - 1:00 PM & 5:30 PM - 9:00 PM",
                email="contact@madhavdental.com"
            )
            session.add(settings)

        session.commit()
        print("✅ Database seeding/update completed!")

if __name__ == "__main__":
    seed_data()
