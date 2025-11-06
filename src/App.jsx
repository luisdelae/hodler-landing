import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import NewsletterSignup from './components/NewsLetterSignup';
import PriceTicker from './components/PriceTicker';

function App() {
  const features = [
    {
      title: "Virtual Trading",
      description: "Start with $10,000 virtual money",
      icon: "💰"
    },
    {
      title: "Real Prices",
      description: "Trade with live crypto prices",
      icon: "📈"
    },
    {
      title: "Leaderboards",
      description: "Compete with traders worldwide",
      icon: "🏆"
    },
    {
      title: "Challenge Mode",
      description: "Start with $1,000 and trade for 30 days",
      icon: "💱"
    }
  ]

  const coins = ["bitcoin", "ethereum", "algorand"]

  return (
    <div>
      <Hero />
      <div>
        {features.map((feature, index) => (
          <FeatureCard
            key = {index}
            title = {feature.title}
            description = {feature.description}
            icon ={feature.icon}
          />
        ))}

        <NewsletterSignup></NewsletterSignup>

        <div>
          {coins.map((coin, index) => 
            <PriceTicker
              key = {index}
              coinName={coin}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default App;
