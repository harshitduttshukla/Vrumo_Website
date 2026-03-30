const BASE_URL = 'http://127.0.0.1:8000';

export const fetchServices = async () => {
    const response = await fetch(`${BASE_URL}/api/services/`);
    if (!response.ok) throw new Error('Failed to fetch services');
    return await response.json();
};

export const createBooking = async (bookingData) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/api/bookings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(bookingData),
    });
    
    if (response.status === 401) {
        throw new Error('Please login to continue booking');
    }

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || errorData.detail || 'Booking failed. Please try again.');
    }
    return await response.json();
};

export const fetchCurrentUser = async () => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const response = await fetch(`${BASE_URL}/auth/me`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        localStorage.removeItem('token');
        return null;
    }
    return await response.json();
};


export const sendOTP = async (phoneNumber) => {
    const response = await fetch(`${BASE_URL}/auth/send-otp`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone_number: phoneNumber }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to send OTP');
    }
    return await response.json();
};

export const verifyOTP = async (phoneNumber, otpCode) => {
    const response = await fetch(`${BASE_URL}/auth/verify-otp`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone_number: phoneNumber, otp_code: otpCode }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Invalid OTP');
    }
    return await response.json();
};
