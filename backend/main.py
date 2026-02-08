from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="OmniSync API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "OmniSync backend live"}

@app.get("/fridge")
def fridge():
    return {
        "eat_first": ["Milk (2 days)", "Tomatoes (1 day)"],
        "items": [ "Tomatoes", "Milk" , "Cheese", "Eggs", "Butter"]
    }

@app.get("/energy")
def energy():
    return {
        "vampire_devices": ["TV Standby", "Phone Charger"],
        "monthly_savings": "₹1,200",
        "energy_reduction": "50%"
    }

@app.get("/commute")
def commute():
    return {
        "leave_time": "8:20 AM",
        "alert": "Charge vehicle tonight",
        "best_route": "Low traffic detected"
    }

