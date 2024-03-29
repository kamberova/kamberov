import * as request from './requester';

const baseUrl = 'https://kambera-685c9.firebaseapp.com';

export const getAll = () => request.get(`${baseUrl}/book-a-session`);

export const getMyBooking = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);

    return request.get(`${baseUrl}/book-a-session?where=${query}`);
};

export const create = async (bookData, token) => {
    let response = await fetch(`${baseUrl}/book-a-session`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({ ...bookData, likes: [] })
    });

    console.log(response);

    let result = await response.json();

    return result;
};
// export const accessControl = request.use((req, res) => {
//     res.set({ "Access-Control-Allow-Origin": "*" });
// });

export const update = (bookingId, bookData) => request.put(`${baseUrl}/book-a-session/${bookingId}`, bookData);

export const getOne = (bookingId, signal) => {
    return fetch(`${baseUrl}/book-a-session/${bookingId}`, { signal })
        .then(res => res.json())
};

export const destroy = (bookingId, token) => {
    return fetch(`${baseUrl}/book-a-session/${bookingId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
};

export const like = (bookingId, booking, token) => {
    return fetch(`${baseUrl}/book-a-session/${bookingId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(booking)
    }).then(res => res.json());
};