import { useState, useEffect } from "react";

function PriceTicker({coinName}) {
    const [coinPrice, setCoinPrice] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinName}&vs_currencies=usd`)
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch');
                return res.json();
            })
            .then(data => {
                setCoinPrice(data[coinName].usd);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch price: ', err);
                setError(err.message);
                setLoading(false);
            });
    }, [coinName]);

    if (loading) return <p>Loading {coinName} price...</p>;
    if (error) return <p>Failed to load price: {error}</p>

    return (
        <div>
            <p>{coinName}: ${coinPrice?.toLocaleString()}</p>
            <small>Live price from CoinGecko</small>
        </div>
    );
}

export default PriceTicker;
