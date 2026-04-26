// -----------------------------------------------------------------------
// Auth & User
// -----------------------------------------------------------------------

export type UserRole = 'admin' | 'user';

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface User {
  id: number;
  full_name: string;
  email: string;
  role: UserRole;
  is_active: boolean;
  created_at: string;
}

export interface TokenResponse {
  access_token: string;
  token_type: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  full_name: string;
  email: string;
  password: string;
}

// -----------------------------------------------------------------------
// Place (Destination)
// -----------------------------------------------------------------------

export interface Place {
  id: number;
  name: string;
  description: string | null;
  location: string;
  country: string;
  image_url: string | null;
  rating: number;
  is_active: boolean;
  created_at: string;
}

export interface PlaceCreateRequest {
  name: string;
  description?: string;
  location: string;
  country: string;
  image_url?: string;
  rating?: number;
}

// -----------------------------------------------------------------------
// Hotel
// -----------------------------------------------------------------------

export interface Hotel {
  id: number;
  name: string;
  description: string | null;
  place_id: number;
  address: string;
  image_url: string | null;
  price_per_night: number;
  rating: number;
  total_rooms: number;
  amenities: string | null;
  is_active: boolean;
  created_at: string;
}

export interface HotelCreateRequest {
  name: string;
  description?: string;
  place_id: number;
  address: string;
  image_url?: string;
  price_per_night: number;
  rating?: number;
  total_rooms?: number;
  amenities?: string[];
}

// -----------------------------------------------------------------------
// Booking
// -----------------------------------------------------------------------

export interface Booking {
  id: number;
  user_id: number;
  hotel_id: number;
  check_in: string;
  check_out: string;
  guests: number;
  total_price: number;
  status: BookingStatus;
  special_requests: string | null;
  created_at: string;
  hotel?: Hotel;
  user?: User;
}

export interface BookingCreateRequest {
  hotel_id: number;
  check_in: string;
  check_out: string;
  guests: number;
  special_requests?: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  created_at: string;
}

// -----------------------------------------------------------------------
// Pagination
// -----------------------------------------------------------------------

export interface PaginatedResponse<T> {
  total: number;
  page: number;
  size: number;
  pages: number;
  items: T[];
}

// -----------------------------------------------------------------------
// Admin
// -----------------------------------------------------------------------

export interface AdminDashboardStats {
  total_users: number;
  total_places: number;
  total_hotels: number;
  total_bookings: number;
  total_revenue: number;
  pending_bookings: number;
  confirmed_bookings: number;
  cancelled_bookings: number;
}

// -----------------------------------------------------------------------
// Query Params
// -----------------------------------------------------------------------

export interface PlaceQueryParams {
  page?: number;
  size?: number;
  search?: string;
  country?: string;
  min_rating?: number;
}

export interface HotelQueryParams {
  page?: number;
  size?: number;
  place_id?: number;
  min_price?: number;
  max_price?: number;
  min_rating?: number;
  search?: string;
}

export interface BookingQueryParams {
  page?: number;
  size?: number;
  booking_status?: BookingStatus;
}
