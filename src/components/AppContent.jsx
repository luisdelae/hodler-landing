import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { restoreUser } from '../store/slices/authSlice';

function AppContent() {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const userId = localStorage.getItem('userId');
        const username = localStorage.getItem('username');

        if (token && userId && username) {
            dispatch(restoreUser({ token, userId, username }));
        }
    }, [dispatch]);

    return null;
}

export default AppContent;
