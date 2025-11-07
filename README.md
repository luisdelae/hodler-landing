# Hodler Landing Page

Marketing site for Hodler - a cryptocurrency trading simulator Android app.

## Live Site
Coming soon - Deploying to Vercel by end of Week 1

## About Hodler
Hodler is an Android app that lets users practice crypto trading with $10,000 virtual money. This landing page serves as the marketing site to explain features and drive app downloads.

**Key Features:**
- Real-time cryptocurrency prices via CoinGecko API
- Virtual portfolio tracking with $10,000 starting balance
- Global leaderboards and competitive gameplay
- Risk-free learning environment for beginners

## Tech Stack
- **Frontend**: React 19
- **UI Library**: Material UI 5
- **Deployment**: Vercel (planned)
- **Version Control**: Git/GitHub

## Local Development

### Prerequisites
- Node.js v20+ (managed via NVM)
- npm

### Installation
```bash
# Clone repository
git clone https://github.com/luisdelae/hodler-landing.git
cd hodler-landing

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

### Available Scripts
- `npm start` - Run development server
- `npm run build` - Create production build
- `npm test` - Run tests

## Learning Context
This landing page is part of a larger learning initiative to build full-stack web development skills, specifically:
- React fundamentals and hooks (useState, useEffect)
- Material UI component library
- Responsive web design
- AWS backend integration (coming in Weeks 3-8)

Coming from Android development (Jetpack Compose, MVVM, Clean Architecture), this project helps translate mobile development patterns to modern web development.

## Development Timeline

### Week 1 (Nov 3-9, 2025) - In Progress
- [x] Project setup with Create React App
- [x] Basic component structure (Hero, FeatureCard)
- [x] Live price ticker with CoinGecko API
- [x] Material UI integration (Day 3)
- [ ] Complete all landing page sections (Day 4)
- [ ] Deploy to Vercel with auto-deployment (Day 5)

### Week 2 (Nov 10-16, 2025)
AWS fundamentals + Lambda setup (separate backend repo - no changes to this project)

### Week 3 (Nov 17-23, 2025)
- [ ] Install Redux for state management
- [ ] Add login/register forms
- [ ] Connect to Lambda authentication APIs
- [ ] Store JWT tokens in localStorage

### Weeks 4-5 (Nov 24 - Dec 7, 2025)
- [ ] Add user dashboard page
- [ ] Display global leaderboard component
- [ ] Show user rank and stats
- [ ] Integrate with leaderboard APIs

### Weeks 6-7 (Dec 8-21, 2025)
- [ ] Environment variables for API endpoints
- [ ] Production build optimization

### Target Completion: End of December 2025

## Related Projects
- **Hodler Android App** (v1): Cryptocurrency portfolio tracker with Clean Architecture [Complete](https://github.com/luisdelae/hodler-android)
- **Hodler Android App** (v2): Adding trading simulator features (coming soon)
- **Hodler Backend**: AWS Lambda APIs for leaderboards and authentication (coming soon)

## Author
**Luis De La Espriella**  

[GitHub](https://github.com/luisdelae) • [LinkedIn](https://linkedin.com/in/luisdelaespriella)

## License
This project is a portfolio demonstration and learning exercise. Not licensed for commercial use.

---

**Status**: 🚧 In Active Development 🚧
