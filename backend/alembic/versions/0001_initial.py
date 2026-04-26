"""Initial schema

Revision ID: 0001_initial
Revises:
Create Date: 2024-01-01 00:00:00.000000
"""
from alembic import op
import sqlalchemy as sa

revision = '0001_initial'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ── users ──────────────────────────────────────────────────
    op.create_table(
        'users',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('full_name', sa.String(120), nullable=False),
        sa.Column('email', sa.String(255), nullable=False),
        sa.Column('hashed_password', sa.String(255), nullable=False),
        sa.Column('role', sa.Enum('admin', 'user', name='userrole'), nullable=False, server_default='user'),
        sa.Column('is_active', sa.Boolean(), nullable=False, server_default='true'),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.func.now()),
        sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.func.now()),
        sa.PrimaryKeyConstraint('id'),
        sa.UniqueConstraint('email'),
    )
    op.create_index('ix_users_id', 'users', ['id'])
    op.create_index('ix_users_email', 'users', ['email'], unique=True)

    # ── places ─────────────────────────────────────────────────
    op.create_table(
        'places',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name', sa.String(200), nullable=False),
        sa.Column('description', sa.Text(), nullable=True),
        sa.Column('location', sa.String(200), nullable=False),
        sa.Column('country', sa.String(100), nullable=False),
        sa.Column('image_url', sa.String(500), nullable=True),
        sa.Column('rating', sa.Float(), nullable=False, server_default='0.0'),
        sa.Column('is_active', sa.Boolean(), nullable=False, server_default='true'),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.func.now()),
        sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.func.now()),
        sa.PrimaryKeyConstraint('id'),
        sa.CheckConstraint('rating >= 0 AND rating <= 5', name='ck_place_rating_range'),
    )
    op.create_index('ix_places_id', 'places', ['id'])
    op.create_index('ix_places_country', 'places', ['country'])
    op.create_index('ix_places_location', 'places', ['location'])

    # ── hotels ─────────────────────────────────────────────────
    op.create_table(
        'hotels',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name', sa.String(200), nullable=False),
        sa.Column('description', sa.Text(), nullable=True),
        sa.Column('place_id', sa.Integer(), nullable=False),
        sa.Column('address', sa.String(300), nullable=False),
        sa.Column('image_url', sa.String(500), nullable=True),
        sa.Column('price_per_night', sa.Float(), nullable=False),
        sa.Column('rating', sa.Float(), nullable=False, server_default='0.0'),
        sa.Column('total_rooms', sa.Integer(), nullable=False, server_default='10'),
        sa.Column('amenities', sa.Text(), nullable=True),
        sa.Column('is_active', sa.Boolean(), nullable=False, server_default='true'),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.func.now()),
        sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.func.now()),
        sa.ForeignKeyConstraint(['place_id'], ['places.id'], ondelete='CASCADE'),
        sa.PrimaryKeyConstraint('id'),
        sa.CheckConstraint('price_per_night > 0', name='ck_hotel_price_positive'),
        sa.CheckConstraint('rating >= 0 AND rating <= 5', name='ck_hotel_rating_range'),
        sa.CheckConstraint('total_rooms > 0', name='ck_hotel_rooms_positive'),
    )
    op.create_index('ix_hotels_id', 'hotels', ['id'])
    op.create_index('ix_hotels_place_id', 'hotels', ['place_id'])

    # ── bookings ───────────────────────────────────────────────
    op.create_table(
        'bookings',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('user_id', sa.Integer(), nullable=False),
        sa.Column('hotel_id', sa.Integer(), nullable=False),
        sa.Column('check_in', sa.Date(), nullable=False),
        sa.Column('check_out', sa.Date(), nullable=False),
        sa.Column('guests', sa.Integer(), nullable=False, server_default='1'),
        sa.Column('total_price', sa.Float(), nullable=False),
        sa.Column('status', sa.Enum('pending', 'confirmed', 'cancelled', 'completed',
                                     name='bookingstatus'), nullable=False, server_default='pending'),
        sa.Column('special_requests', sa.Text(), nullable=True),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.func.now()),
        sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.func.now()),
        sa.ForeignKeyConstraint(['hotel_id'], ['hotels.id'], ondelete='CASCADE'),
        sa.ForeignKeyConstraint(['user_id'], ['users.id'], ondelete='CASCADE'),
        sa.PrimaryKeyConstraint('id'),
        sa.CheckConstraint('check_out > check_in', name='ck_booking_dates_order'),
        sa.CheckConstraint('guests >= 1', name='ck_booking_guests_positive'),
        sa.CheckConstraint('total_price > 0', name='ck_booking_price_positive'),
    )
    op.create_index('ix_bookings_id', 'bookings', ['id'])
    op.create_index('ix_bookings_user_id', 'bookings', ['user_id'])
    op.create_index('ix_bookings_hotel_id', 'bookings', ['hotel_id'])
    op.create_index('ix_bookings_status', 'bookings', ['status'])
    op.create_index('ix_bookings_hotel_dates', 'bookings', ['hotel_id', 'check_in', 'check_out'])


def downgrade() -> None:
    op.drop_table('bookings')
    op.drop_table('hotels')
    op.drop_table('places')
    op.drop_table('users')
    op.execute("DROP TYPE IF EXISTS userrole")
    op.execute("DROP TYPE IF EXISTS bookingstatus")
