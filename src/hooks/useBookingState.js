import { useState, useEffect, useMemo } from 'react';

import * as bookService from '../services/bookService';

const useBookState = (bookingId) => {
    const [booking, setBooking] = useState({});

    const controller = useMemo(() => {
        const controller = new AbortController();

        return controller;
    }, [])

    useEffect(() => {
        bookService.getOne(bookingId, controller.signal)
            .then(bookingResult => {
                setBooking(bookingResult);
            })

        return () => {
            controller.abort();
        }
    }, [bookingId, controller]);

    return [
        booking,
        setBooking
    ]
};

export default useBookState;