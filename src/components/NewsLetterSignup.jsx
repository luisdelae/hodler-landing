import { useState } from "react";

function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted', email);
        setSubmitted(true);
    };

    if (submitted) {
        return <p>Thanks for signing up! We'll notify you when Hodler launches.</p>
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
            />
            <button type="submit">Notify Me at Launch</button>
        </form>
    );
}

export default NewsletterSignup;
