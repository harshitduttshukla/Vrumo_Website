const BASE_URL = 'http://127.0.0.1:8000';

export const fetchServices = async () => {
    const response = await fetch(`${BASE_URL}/services/`);
    if (!response.ok) throw new Error('Failed to fetch services');
    return await response.json();
};

export const createBooking = async (bookingData) => {
    const response = await fetch(`${BASE_URL}/bookings/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
    });
    
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Booking failed');
    }
    return await response.json();
};

export const createUser = async (userData) => {
    // Generate a secure dummy password for guest users
    const payload = {
        ...userData,
        password: Math.random().toString(36).slice(-10), // dummy string for now
        role: 'customer'
    };

    const response = await fetch(`${BASE_URL}/users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorData = await response.json();
        // If user already exists (e.g. phone already registered), we should probably fetch them or just proceed.
        // For simplicity, we just throw or return existing logic if backend supports it.
        throw new Error(errorData.detail || 'User registration failed');
    }
    return await response.json();
};
