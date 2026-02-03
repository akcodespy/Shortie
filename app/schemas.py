from pydantic import BaseModel

class urlshortner(BaseModel):
    id : int
    original_url : str
    short_code : str
    class Config:
        from_attributes = True
class URLRequest(BaseModel):
    url: str