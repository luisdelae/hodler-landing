function Hero() {
    function handleClick() {
        alert('Clicked');
    }

    return (
        <div>
            <h1>Hodler - Crypto Trading Simulator</h1>
            <p>Practice trading without risking real money</p>
            <button onClick={handleClick}>Download Now</button>
        </div>
    );
}

export default Hero;