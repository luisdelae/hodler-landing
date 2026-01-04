import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeAuth, restoreUser } from '../store/slices/authSlice';

function AppContent() {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const userId = localStorage.getItem('userId');
        const username = localStorage.getItem('username');

        if (token && token !== 'undefined' && userId && username) {
            dispatch(restoreUser({ token, userId, username }));
        } else {
            dispatch(initializeAuth());
        }
    }, [dispatch]);

    return null;
}

export default AppContent;
