import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { restoreUser } from '../store/slices/authSlice';
import NavBar from './NavBar';
import Hero from './Hero';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import ProfileEditor from './ProfileEditor';
import FeaturesSection from './FeaturesSection';
import AboutSection from './AboutSection';
import HowItWorksSection from './HowItWorksSection';
import CTASection from './CTASection';
import Footer from './Footer';

function AppContent({ darkMode, setDarkMode }) {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const userId = localStorage.getItem('userId');
        const username = localStorage.getItem('username');

        if (token && userId && username) {
            dispatch(restoreUser({ token, userId, username }));
        }
    }, [dispatch]);

    return (
        <>
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Hero />
            <RegisterForm />
            <LoginForm />
            <ProfileEditor />
            <FeaturesSection />
            <AboutSection />
            <HowItWorksSection />
            <CTASection />
            <Footer />
        </>
    );
}

export default AppContent;
