import axios from 'axios';

const API_REVIEWS_URL = 'http://localhost:5000/api/reviews';

export const getAllReviews = async (token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    return await axios.get(API_REVIEWS_URL, config);
};

export const addReview = async (reviewData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data', // Set Content-Type for file uploads
        },
    };
    return await axios.post(API_REVIEWS_URL, reviewData, config);
};

export const updateReview = async (reviewId, reviewData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data', // Set Content-Type for file uploads
        },
    };
    return await axios.put(`${API_REVIEWS_URL}/${reviewId}`, reviewData, config);
};

export const deleteReview = async (reviewId, token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    return await axios.delete(`${API_REVIEWS_URL}/${reviewId}`, config);
};

export default {
    getAllReviews,
    addReview,
    updateReview,
    deleteReview,
};
