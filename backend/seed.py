"""
Seed script — run from backend/ directory:
  python seed.py

Creates:
  - 1 admin user
  - 1 regular user
  - 5 destinations
  - 10 hotels (2 per destination)
"""

import sys
import os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from database import SessionLocal, Base, engine
from models import User, Place, Hotel, UserRole
from core.security import hash_password

Base.metadata.create_all(bind=engine)

ADMIN_EMAIL    = "admin@voyager.com"
ADMIN_PASSWORD = "Admin@1234"
USER_EMAIL     = "user@voyager.com"
USER_PASSWORD  = "User@1234"

PLACES = [
    {
        "name": "Santorini",
        "description": "A stunning volcanic island in Greece with iconic white-washed architecture, dramatic caldera views, and spectacular sunsets over the Aegean Sea.",
        "location": "Aegean Sea",
        "country": "Greece",
        "image_url": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
        "rating": 4.9,
    },
    {
        "name": "Bali",
        "description": "Indonesia's Island of the Gods — lush terraced rice fields, ancient Hindu temples, world-class surf breaks, and a deeply spiritual culture.",
        "location": "East Java",
        "country": "Indonesia",
        "image_url": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
        "rating": 4.8,
    },
    {
        "name": "Kyoto",
        "description": "Japan's ancient imperial capital, home to thousands of classical Buddhist temples, Shinto shrines, exquisite zen gardens, and geisha districts.",
        "location": "Kansai Region",
        "country": "Japan",
        "image_url": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
        "rating": 4.7,
    },
    {
        "name": "Machu Picchu",
        "description": "The legendary Incan citadel set high in the Andes Mountains above the Sacred Valley, shrouded in mist and mystery.",
        "location": "Cusco Region",
        "country": "Peru",
        "image_url": "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80",
        "rating": 4.9,
    },
    {
        "name": "Maldives",
        "description": "A tropical paradise of 1,200 coral islands with crystal-clear turquoise lagoons, pristine white-sand beaches, and vibrant marine ecosystems.",
        "location": "Indian Ocean",
        "country": "Maldives",
        "image_url": "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
        "rating": 4.8,
    },
]

HOTELS_TEMPLATE = [
    # Santorini
    {
        "name": "Caldera Luxury Suites",
        "description": "Perched on the cliff edge with breathtaking caldera views, private plunge pools, and butler service.",
        "address": "Oia Cliff, Santorini, Greece",
        "image_url": "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&q=80",
        "price_per_night": 42000,
        "rating": 4.9,
        "total_rooms": 12,
        "amenities": '["Pool", "Spa", "Restaurant", "WiFi", "Room Service", "Concierge"]',
        "place_idx": 0,
    },
    {
        "name": "Aegean Breeze Hotel",
        "description": "Charming boutique hotel in Fira with panoramic sea views and rooftop jacuzzi.",
        "address": "Fira Town Center, Santorini, Greece",
        "image_url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
        "price_per_night": 18000,
        "rating": 4.5,
        "total_rooms": 24,
        "amenities": '["WiFi", "Restaurant", "Bar", "Air Conditioning"]',
        "place_idx": 0,
    },
    # Bali
    {
        "name": "Ubud Jungle Resort",
        "description": "Nestled in the heart of Ubud's jungle with infinity pool overlooking rice terraces and daily yoga.",
        "address": "Jl. Raya Ubud, Bali, Indonesia",
        "image_url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
        "price_per_night": 22000,
        "rating": 4.8,
        "total_rooms": 18,
        "amenities": '["Pool", "Spa", "Yoga", "Restaurant", "WiFi"]',
        "place_idx": 1,
    },
    {
        "name": "Seminyak Beach Villa",
        "description": "Modern beachfront villas with direct beach access, private pools, and in-villa dining.",
        "address": "Jl. Seminyak, Bali, Indonesia",
        "image_url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
        "price_per_night": 15000,
        "rating": 4.6,
        "total_rooms": 30,
        "amenities": '["Pool", "WiFi", "Restaurant", "Bar", "Parking"]',
        "place_idx": 1,
    },
    # Kyoto
    {
        "name": "Kyoto Machiya Ryokan",
        "description": "Traditional machiya townhouse turned luxury ryokan with tatami rooms, kaiseki dining and onsen bath.",
        "address": "Higashiyama District, Kyoto, Japan",
        "image_url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
        "price_per_night": 35000,
        "rating": 4.9,
        "total_rooms": 8,
        "amenities": '["Onsen", "Restaurant", "WiFi", "Concierge", "Room Service"]',
        "place_idx": 2,
    },
    {
        "name": "Garden Palace Kyoto",
        "description": "Contemporary hotel surrounded by a private zen garden, minutes from Nishiki Market.",
        "address": "Kawaramachi, Gion, Kyoto, Japan",
        "image_url": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
        "price_per_night": 12000,
        "rating": 4.4,
        "total_rooms": 45,
        "amenities": '["WiFi", "Restaurant", "Gym", "Laundry", "Air Conditioning"]',
        "place_idx": 2,
    },
    # Machu Picchu
    {
        "name": "Sanctuary Lodge Machu Picchu",
        "description": "The only hotel at the entrance to Machu Picchu Citadel — unrivalled access and mountain views.",
        "address": "Aguas Calientes, Cusco, Peru",
        "image_url": "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800&q=80",
        "price_per_night": 55000,
        "rating": 4.9,
        "total_rooms": 31,
        "amenities": '["Restaurant", "Spa", "WiFi", "Concierge", "Room Service", "Bar"]',
        "place_idx": 3,
    },
    {
        "name": "Inkaterra Machu Picchu",
        "description": "Eco-luxury bungalows surrounded by cloud forest, with guided nature walks and orchid gardens.",
        "address": "Pueblo Hotel, Aguas Calientes, Peru",
        "image_url": "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
        "price_per_night": 28000,
        "rating": 4.7,
        "total_rooms": 20,
        "amenities": '["Restaurant", "Spa", "WiFi", "Pool", "Bar"]',
        "place_idx": 3,
    },
    # Maldives
    {
        "name": "Sun Siyam Iru Fushi",
        "description": "Ultra-luxury overwater bungalows in the North Maldives atoll with crystal lagoon and dolphin reef.",
        "address": "Noonu Atoll, North Maldives",
        "image_url": "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80",
        "price_per_night": 95000,
        "rating": 5.0,
        "total_rooms": 10,
        "amenities": '["Pool", "Spa", "Restaurant", "WiFi", "Diving", "Concierge", "Room Service"]',
        "place_idx": 4,
    },
    {
        "name": "Velassaru Maldives",
        "description": "Award-winning island resort with pristine beaches, water sports centre and sunset bar.",
        "address": "South Male Atoll, Maldives",
        "image_url": "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80",
        "price_per_night": 48000,
        "rating": 4.8,
        "total_rooms": 22,
        "amenities": '["Pool", "Spa", "Restaurant", "Bar", "WiFi", "Gym"]',
        "place_idx": 4,
    },
]


def seed():
    db = SessionLocal()
    try:
        # ---------------------------------------------------------------
        # Users
        # ---------------------------------------------------------------
        if not db.query(User).filter(User.email == ADMIN_EMAIL).first():
            db.add(User(
                full_name="Platform Admin",
                email=ADMIN_EMAIL,
                hashed_password=hash_password(ADMIN_PASSWORD),
                role=UserRole.ADMIN.value,
                is_active=True,
            ))
            print(f"  ✓ Admin user created: {ADMIN_EMAIL} / {ADMIN_PASSWORD}")

        if not db.query(User).filter(User.email == USER_EMAIL).first():
            db.add(User(
                full_name="Demo Traveler",
                email=USER_EMAIL,
                hashed_password=hash_password(USER_PASSWORD),
                role=UserRole.USER.value,
                is_active=True,
            ))
            print(f"  ✓ Demo user created: {USER_EMAIL} / {USER_PASSWORD}")

        db.commit()

        # ---------------------------------------------------------------
        # Places
        # ---------------------------------------------------------------
        place_ids: list[int] = []
        for p_data in PLACES:
            existing = db.query(Place).filter(Place.name == p_data["name"]).first()
            if existing:
                place_ids.append(existing.id)
            else:
                place = Place(**p_data)
                db.add(place)
                db.commit()
                db.refresh(place)
                place_ids.append(place.id)
                print(f"  ✓ Place created: {place.name}")

        # ---------------------------------------------------------------
        # Hotels
        # ---------------------------------------------------------------
        for h_data in HOTELS_TEMPLATE:
            idx = h_data.pop("place_idx")
            h_data["place_id"] = place_ids[idx]
            existing = db.query(Hotel).filter(Hotel.name == h_data["name"]).first()
            if not existing:
                db.add(Hotel(**h_data))
                print(f"  ✓ Hotel created: {h_data['name']}")
            h_data["place_idx"] = idx  # restore for rerun safety

        db.commit()
        print("\n✅ Seed complete!")

    except Exception as exc:
        db.rollback()
        print(f"❌ Seed failed: {exc}")
        raise
    finally:
        db.close()


if __name__ == "__main__":
    print("\n🌱 Seeding database...\n")
    seed()
