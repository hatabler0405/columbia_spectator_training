from sqlalchemy.orm import Session
import models, schemas;

def get_all_sources(db: Session):
   return db.query(models.SpectatorSource).all()

def create_source(db: Session, source: schemas.SpectatorSourceCreate):
   db_source = models.SpectatorSource(name=source.name, email=source.email)
   db.add(db_source)
   db.commit()
   db.refresh(db_source)
   return db_source

def delete_source(db: Session, source_id: int):
   db_source = db.query(models.SpectatorSource).filter(models.SpectatorSource.id == source_id).first()
   if db_source is None:
       return {"message": "Source not found"}
   db.delete(db_source)
   db.commit()
   return {"message": "Source deleted successfully"}



