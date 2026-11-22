from pydantic import BaseModel, ConfigDict
model_config = ConfigDict(from_attributes=True)

class SpectatorSourceBase(BaseModel):
   name: str
   email: str
class SpectatorSource(SpectatorSourceBase):   
    id: int
    class Config:
        orm_mode = True

class SpectatorSourceCreate(SpectatorSourceBase):   
    pass
