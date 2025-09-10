# Qliper.tv

## Overview

Qliper.tv is a decentralized social media campaign platform that rewards users with SOL cryptocurrency for authentic engagement across major social media platforms including TikTok, X (Twitter), YouTube, and Instagram.

## Features

- **Multi-Platform Integration**: Connect and engage across TikTok, X, YouTube, and Instagram
- **SOL Rewards**: Earn Solana cryptocurrency for real engagement and participation
- **Campaign Management**: Join and participate in various social media campaigns
- **Hashtag Campaigns**: Post content with campaign-specific hashtags to earn rewards
- **Real Engagement Tracking**: Advanced algorithms ensure authentic engagement is rewarded
- **OAuth Authentication**: Secure login with Google and Apple Sign-In

## How It Works

1. **Join Campaigns**: Browse and join active social media campaigns
2. **Create Content**: Post engaging content on supported platforms with campaign hashtags
3. **Get Verified**: Our system verifies authentic engagement and interactions
4. **Earn SOL**: Receive SOL rewards directly to your wallet for successful participation

## Tech Stack

- **Backend**: Node.js with Fastify
- **Database**: Prisma ORM with PostgreSQL
- **Authentication**: Google OAuth, Apple Sign-In
- **Language**: TypeScript
- **API Documentation**: Swagger/OpenAPI
- **Social Media APIs**: Platform integrations for TikTok, X, YouTube, Instagram

## Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Google OAuth credentials
- Apple Developer account (for Apple Sign-In)
- Social media platform API credentials

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/qliper-tv.git

# Navigate to project directory
cd qliper-tv

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Set up database
npx prisma generate
npx prisma db push
npx prisma db seed

# Start development server
npm run dev
```

### Environment Variables

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/qliper_db"

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Apple Sign-In
APPLE_CLIENT_ID=your_apple_client_id
APPLE_TEAM_ID=your_apple_team_id
APPLE_KEY_ID=your_apple_key_id
APPLE_PRIVATE_KEY=your_apple_private_key

# Social Media APIs
TWITTER_API_KEY=your_twitter_api_key
TWITTER_API_SECRET=your_twitter_api_secret
YOUTUBE_API_KEY=your_youtube_api_key
TIKTOK_API_KEY=your_tiktok_api_key
INSTAGRAM_API_KEY=your_instagram_api_key

# App Configuration
JWT_SECRET=your_jwt_secret
ENCRYPTION_KEY=your_encryption_key
API_PORT=3000
NODE_ENV=development
```

## Usage

### For Content Creators

1. Sign in with Google or Apple ID
2. Link your social media accounts
3. Browse available campaigns
4. Create and post content with campaign hashtags
5. Track your earnings and engagement metrics

### For Brands/Campaign Creators

1. Create an account using Google or Apple Sign-In
2. Set up new campaigns with specific requirements
3. Define reward structures and budgets
4. Monitor campaign performance and ROI
5. Manage payouts to participants

## Project Structure

```
qliper-tv/
├── app/
│   ├── configs/           # Application and Swagger configuration
│   │   ├── app_config.ts
│   │   └── swagger_config.ts
│   ├── exceptions/        # Custom exceptions and error codes
│   │   ├── app_exception.ts
│   │   └── error_codes.ts
│   ├── libs/
│   │   ├── services/      # External service integrations
│   │   │   └── auth/      # Authentication services
│   │   │       ├── apple/
│   │   │       └── google/
│   │   └── utils/         # Utility functions
│   │       └── encryption_util.ts
│   ├── modules/           # Feature modules
│   │   ├── auth/          # Authentication module
│   │   │   ├── auth_controller.ts
│   │   │   ├── auth_route.ts
│   │   │   ├── auth_schema.ts
│   │   │   └── auth_service.ts
│   │   ├── main_controller.ts
│   │   ├── main_route.ts
│   │   └── main_schema.ts
│   └── routes/            # API route definitions
│       ├── index.ts
│       └── v1.ts
├── prisma/
│   ├── schemas/           # Prisma database schemas
│   │   ├── schema.prisma
│   │   └── user.prisma
│   └── seeders/           # Database seeding scripts
│       └── index.ts
├── types/                 # TypeScript type definitions
│   └── fastify.d.ts
└── index.ts              # Application entry point
```

## Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting pull requests.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and commit: `git commit -m 'Add amazing feature'`
4. Push to your branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## API Documentation

### Authentication Endpoints

```http
POST /api/v1/auth/google
POST /api/v1/auth/apple
POST /api/v1/auth/refresh
DELETE /api/v1/auth/logout
```

### Campaign Endpoints

```http
GET /api/v1/campaigns
POST /api/v1/campaigns
GET /api/v1/campaigns/:id
PUT /api/v1/campaigns/:id
DELETE /api/v1/campaigns/:id
```

### User Endpoints

```http
GET /api/v1/users/profile
PUT /api/v1/users/profile
GET /api/v1/users/earnings
POST /api/v1/users/connect-social
```

### Engagement Endpoints

```http
POST /api/v1/engagement/verify
GET /api/v1/engagement/stats
POST /api/v1/engagement/claim-rewards
```

## Database Schema

The application uses Prisma ORM with PostgreSQL. Key models include:

- **User**: User profiles and authentication data
- **Campaign**: Social media campaigns with requirements and rewards
- **Engagement**: User interactions and campaign participation
- **SocialAccount**: Linked social media accounts

Run `npx prisma studio` to explore the database schema visually.

## Security

- OAuth 2.0 authentication with Google and Apple
- JWT tokens for secure API access
- Data encryption for sensitive information using encryption utilities
- Input validation and sanitization using schema validation
- Rate limiting and request throttling
- Secure database connections with Prisma

## Supported Platforms

- **TikTok**: Video content campaigns
- **X (Twitter)**: Tweet and thread campaigns
- **YouTube**: Video and shorts campaigns
- **Instagram**: Post and story campaigns

## Roadmap

- [ ] Mobile app development (iOS/Android)
- [ ] Additional social platform integrations
- [ ] Advanced analytics dashboard
- [ ] NFT integration for top performers
- [ ] Cross-chain support (Ethereum, Polygon)
- [ ] AI-powered content optimization tools

## Tokenomics

- **Reward Pool**: Funded by campaign creators and platform fees
- **Platform Fee**: 5% of campaign budgets
- **Staking Rewards**: Additional SOL rewards for platform token holders
- **Governance**: Community voting on platform improvements

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Solana Foundation for blockchain infrastructure
- Social media platforms for API access
- Open source community for various tools and libraries
- Beta testers and early adopters
