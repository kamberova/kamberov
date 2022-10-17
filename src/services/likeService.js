import * as request from './requester';

const baseUrl = 'https://kambera-28897-default-rtdb.firebaseio.com/';

export const like = (userId, bookingId) => request.post(`${baseUrl}/likes`, {userId, bookingId});
export const getBookingLikes = (bookingId) => {
    const query = encodeURIComponent(`bookingId="${bookingId}"`);

    return request.get(`${baseUrl}/likes?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId));
};