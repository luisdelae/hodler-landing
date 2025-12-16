# Hodler Landing Page

Marketing site for Hodler - a cryptocurrency trading simulator Android app.

## Live Site

https://hodler-landing.vercel.app/

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
- **Deployment**: Vercel
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

### Week 1 (Nov 3-9, 2025) ✅ Complete

- [x] Project setup with Create React App
- [x] Basic component structure (Hero, FeatureCard, etc.)
- [x] Live price ticker with CoinGecko API
- [x] Material UI integration
- [x] Complete all landing page sections
- [x] Dark mode toggle
- [x] Deploy to Vercel with auto-deployment

### Week 2 (Nov 10-16, 2025) - Complete ✅

- [x] AWS fundamentals + security setup
- [x] DynamoDB Users table + getUserProfile Lambda
- [x] User registration Lambda + API endpoint
- [x] RegisterForm component
- [x] User login Lambda + JWT tokens
- [x] LoginForm component
- [x] Auth state management with Context
- [x] Update profile Lambda + endpoint
- [x] ProfileEditor component

### Week 3 (Nov 17-23, 2025) - Complete ✅

- [x] Install Redux Toolkit
- [x] Migrate auth state from Context to Redux
- [x] Refactor components to use Redux
- [x] Add loading/error states globally
- [x] React Router setup
- [x] Split into pages
- [x] Protected routes

### Week 4 (Dec 16-22, 2025) - In Progress

- [ ] SNS email notifications (welcome emails + verification flow)
- [ ] Leaderboard backend (DynamoDB, submitScore, getLeaderboard Lambdas)
- [ ] SQS async score processing queue
- [ ] EventBridge scheduled rankings calculation
- [ ] S3 profile picture uploads with pre-signed URLs
- [ ] Leaderboard frontend (top 10 display, user rank)
- [ ] DynamoDB GSI for email lookups (refactor getUserProfile)

### Week 5 (Dec 23-29, 2025)

- [ ] Terraform infrastructure as code (all AWS resources)
- [ ] GitHub Actions CI/CD pipeline
- [ ] Dev/prod environment separation
- [ ] Final production deployment
- [ ] Documentation polish

### Target Completion: End of December 2025

## Related Projects

- **Hodler Android App** (v1): Cryptocurrency portfolio tracker with Clean Architecture [Complete](https://github.com/luisdelae/hodler-android)
- **Hodler Android App** (v2): Adding trading simulator features (coming soon)
- **Hodler Backend**: AWS Lambda APIs for leaderboards and authentication [WIP](https://github.com/luisdelae/hodler-backend)

## Author

**Luis De La Espriella**

[GitHub](https://github.com/luisdelae) • [LinkedIn](https://linkedin.com/in/luisdelaespriella)

## License

This project is a portfolio demonstration and learning exercise. Not licensed for commercial use.

---

**Status**: 🚧 In Active Development 🚧
