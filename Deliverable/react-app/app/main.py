from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy import text
from database import get_db
import crud, models, schemas

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def greet():
    return {"message": "This is connected to FastAPI!"}

@app.post("/create", response_model=schemas.SpectatorSource)
def create_source(source: schemas.SpectatorSourceCreate, db: Session = Depends(get_db)):
   db_source = crud.create_source(db, source)
   return db_source

@app.delete("/delete/{source_id}")
def delete_source(source_id: int, db: Session = Depends(get_db)):
   db_source = crud.delete_source(db, source_id)
   return db_source

@app.get("/getAll")
def get_all_sources(db: Session = Depends(get_db)):
   return crud.get_all_sources(db)

@app.get("/health/db/users")
def health_db_users(db: Session = Depends(get_db)):
    # Standard synchronous handler works perfectly with pymysql
    count = db.execute(text("SELECT COUNT(*) FROM specsources")).scalar_one()
    return {"count": count}
