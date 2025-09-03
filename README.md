# Nuts & Bolts AI Challenge - Campaign Creation App

A modern, responsive Next.js application for creating and managing influencer marketing campaigns. Built with React 19, Next.js 15, and Tailwind CSS v4.

![Campaign Creation Flow](https://img.shields.io/badge/Next.js-15.5.2-black) ![React](https://img.shields.io/badge/React-19.1.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-teal)

## 🚀 Quick Start

```bash
# Clone the repository
git clone git@github.com:CodeGeek04/nutsandbolts-ai-challenge.git
cd nutsandbolts-ai-challenge

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 (or 3001 if 3000 is in use)
```

## 📋 Table of Contents

- [Features](#-features)
- [Project Structure](#-project-structure)
- [Architecture](#-architecture)
- [Components Guide](#-components-guide)
- [Styling System](#-styling-system)
- [Development](#-development)
- [Customization Guide](#-customization-guide)
- [API Integration](#-api-integration)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [TODO](#-todo)

## ✨ Features

### Current Implementation
- **Multi-step Campaign Creation**: 4-step wizard for campaign setup
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive UI Components**: Custom cards, buttons, progress indicators
- **File Upload Simulation**: Drag & drop interface with progress tracking
- **Dynamic Form Handling**: State management across multiple steps
- **Integration Management**: Toggle-based integration system
- **Loading States**: Custom loading screens with animations
- **Consistent Navigation**: Fixed header/footer layout with persistent navigation
- **Step Progress Tracking**: Visual progress indicator with step completion

### Campaign Creation Flow
1. **Campaign Type Selection**: Choose campaign type and objectives
2. **Information Gathering**: Upload files or select existing products
3. **Integration Setup**: Configure Google Sheets and tracking rules
4. **Email Draft**: Review and customize generated email templates

## 📁 Project Structure

```
src/
├── app/                           # Next.js App Router
│   ├── globals.css               # Global styles and Tailwind imports
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Landing page component
├── components/
│   ├── CampaignCreation/         # Campaign flow components
│   │   ├── campaignCreation.tsx  # Main orchestrator component
│   │   ├── campaignTypeStep.tsx  # Step 1: Campaign type selection
│   │   ├── campaignInformationStep.tsx # Step 2: File upload/product selection
│   │   ├── campaignReviewStep.tsx # Step 3: Review campaign details
│   │   ├── integrationsStep.tsx  # Step 4: Integration configuration
│   │   ├── emailDraftStep.tsx    # Step 5: Email template review
│   │   ├── emailSetupStep.tsx    # Email configuration (unused)
│   │   └── campaignSuccessScreen.tsx # Success confirmation
│   ├── ui/                       # Reusable UI components
│   │   ├── button.tsx           # Custom button component
│   │   ├── card.tsx             # Card container component
│   │   ├── loadingScreen.tsx    # Loading animation component
│   │   ├── stepContainer.tsx    # Layout wrapper for steps
│   │   └── campaignStepCard.tsx # Individual step card
│   ├── campaignHeader.tsx        # Campaign page header
│   ├── campaignSidebar.tsx       # Campaign navigation sidebar
│   ├── header.tsx               # Global application header
│   ├── layout.tsx               # Main application layout
│   ├── sidebar.tsx              # Global sidebar navigation
│   └── stepProgress.tsx         # Step progress indicator
```

## 🏗️ Architecture

### Component Architecture
- **Container Components**: Manage state and data flow (`campaignCreation.tsx`)
- **Presentation Components**: Handle UI rendering (`stepContainer.tsx`, UI components)
- **Layout Components**: Provide consistent structure (`layout.tsx`, `stepContainer.tsx`)

### State Management
- **React useState**: Local component state for form data
- **Prop Drilling**: State passed through component hierarchy
- **Event Callbacks**: Parent-child communication via callback props

### Styling Architecture
- **Tailwind CSS v4**: Utility-first CSS framework
- **CSS Custom Properties**: Theme variables in `globals.css`
- **Component Variants**: Consistent styling patterns
- **Responsive Design**: Mobile-first breakpoints

## 📦 Components Guide

### Core Components

#### `CampaignCreation` (`src/components/CampaignCreation/campaignCreation.tsx`)
Main orchestrator component that manages the entire campaign creation flow.

**Props**: None (root component)
**State**:
- `currentStep`: Current active step (1-5)
- `isLoading`: Loading state for transitions
- `loadingTitle`: Dynamic loading message
- `showSuccess`: Success screen visibility

**Key Methods**:
- `handleNext()`: Progress to next step with loading
- `handleBack()`: Return to previous step
- `handleLaunch()`: Launch campaign and show success

#### `StepContainer` (`src/components/ui/stepContainer.tsx`)
Provides consistent layout and sizing for all campaign steps.

**Props**: 
- `children`: React.ReactNode - Step content

**Features**:
- Fixed 450px height container
- Consistent padding and spacing
- Scroll handling for overflow content
- Fixed footer for navigation buttons

#### Individual Step Components

Each step component follows the same pattern:

**Props**:
- `onNext: () => void` - Callback to proceed
- `onBack: () => void` - Callback to go back

**Layout Structure**:
```tsx
<StepContainer>
  <div className="flex flex-col min-h-0">
    {/* Header - Fixed */}
    <div className="flex-shrink-0 mb-8">
      {/* Step title and description */}
    </div>
    
    {/* Scrollable Content */}
    <div className="flex-1 overflow-y-auto min-h-0">
      {/* Main step content */}
    </div>
  </div>
  
  {/* Navigation Footer - Fixed */}
  <div className="flex-shrink-0 flex justify-between py-2 border-t border-gray-100">
    {/* Back and Next buttons */}
  </div>
</StepContainer>
```

### UI Components

#### `Button` (`src/components/ui/button.tsx`)
Reusable button component with variants.

**Props**:
- `variant`: "default" | "outline" | "ghost"
- `size`: "sm" | "default" | "lg"
- `className`: Additional CSS classes
- Standard button HTML attributes

#### `Card` (`src/components/ui/card.tsx`)
Container component for grouped content.

**Usage**:
```tsx
<Card className="p-6">
  <CardContent />
</Card>
```

#### `LoadingScreen` (`src/components/ui/loadingScreen.tsx`)
Animated loading screen with progress indicators.

**Props**:
- `title`: string - Loading message
- `subtitle?`: string - Optional subtitle
- `duration?`: number - Loading duration (default: 3000ms)
- `onComplete?`: () => void - Completion callback

## 🎨 Styling System

### Tailwind CSS Configuration
- **Version**: Tailwind CSS v4 with PostCSS
- **Custom Properties**: CSS variables for theming
- **Animation**: `tw-animate-css` for enhanced animations

### Color Scheme
```css
/* Primary Colors */
--color-primary: Purple/Black gradient theme
--color-secondary: Orange accents
--color-background: White/Light gray
--color-foreground: Dark gray/Black text

/* UI Colors */
--color-border: Light gray borders
--color-muted: Subtle background colors
```

### Component Styling Patterns

#### Consistent Spacing
```tsx
// Headers
className="mb-8" // Header bottom margin
className="mb-4" // Title bottom margin

// Content sections
className="space-y-6" // Vertical spacing between sections
className="gap-4" // Grid/flex gaps

// Navigation
className="px-8 py-3" // Button padding
```

#### Layout Patterns
```tsx
// Flex containers
className="flex flex-col min-h-0" // Main container
className="flex-shrink-0" // Fixed sections
className="flex-1 overflow-y-auto min-h-0" // Scrollable content

// Card styling
className="p-6 border border-gray-200 rounded-lg" // Standard card
className="bg-white shadow-lg rounded-2xl" // Container card
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Development Workflow

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

### Environment Setup
Create `.env.local` for environment variables:
```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

### Development Server
- **Hot Reload**: Automatic refresh on file changes
- **Fast Refresh**: Preserves component state during updates
- **Port Configuration**: Defaults to 3000, auto-increments if busy

## 🔧 Customization Guide

### Adding New Steps

1. **Create Step Component**:
```tsx
// src/components/CampaignCreation/myNewStep.tsx
interface MyNewStepProps {
  onNext: () => void
  onBack: () => void
}

export function MyNewStep({ onNext, onBack }: MyNewStepProps) {
  return (
    <StepContainer>
      {/* Follow the standard layout pattern */}
    </StepContainer>
  )
}
```

2. **Update Main Campaign Component**:
```tsx
// In campaignCreation.tsx
import { MyNewStep } from "./myNewStep"

// Update totalSteps
const totalSteps = 5 // Increment

// Add to renderStep switch statement
case 5:
  return <MyNewStep onNext={handleNext} onBack={handleBack} />
```

### Modifying Styles

#### Global Styles
Edit `src/app/globals.css`:
```css
@import "tailwindcss";

/* Add custom CSS variables */
:root {
  --custom-color: #your-color;
}

/* Add custom classes */
.my-custom-class {
  /* Custom styles */
}
```

#### Component Styles
Use Tailwind utilities or add custom classes:
```tsx
// Tailwind utilities (preferred)
<div className="bg-blue-500 text-white p-4 rounded-lg">

// Custom classes
<div className="my-custom-class">
```

### State Management Customization

#### Adding New State
```tsx
// In campaignCreation.tsx
const [myNewState, setMyNewState] = useState(initialValue)

// Pass to child components
<MyStep myNewState={myNewState} onUpdate={setMyNewState} />
```

#### Form Data Handling
```tsx
// Create form data interfaces
interface CampaignData {
  type: string
  details: string
  // Add more fields
}

// Use in component state
const [campaignData, setCampaignData] = useState<CampaignData>({
  type: '',
  details: ''
})
```

### UI Component Customization

#### Button Variants
Modify `src/components/ui/button.tsx`:
```tsx
const buttonVariants = cva(
  "base-styles",
  {
    variants: {
      variant: {
        default: "default-styles",
        outline: "outline-styles",
        myCustom: "my-custom-styles" // Add new variant
      }
    }
  }
)
```

#### Card Modifications
Extend the Card component:
```tsx
// Add new props
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "bordered"
}

// Add variant styling
const cardVariants = {
  default: "standard-card-styles",
  elevated: "elevated-card-styles",
  bordered: "bordered-card-styles"
}
```

## 🔌 API Integration

### Current State
The application currently uses **mock data** and **simulated API calls**. All integrations are prepared for real API connections.

### Adding Real API Integration

#### 1. Create API Utilities
```tsx
// src/utils/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

export async function createCampaign(campaignData: CampaignData) {
  const response = await fetch(`${API_BASE_URL}/campaigns`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAuthToken()}`
    },
    body: JSON.stringify(campaignData)
  })
  
  if (!response.ok) {
    throw new Error('Failed to create campaign')
  }
  
  return response.json()
}
```

#### 2. Replace Mock Functions
```tsx
// In components, replace simulated calls
const handleLaunch = async () => {
  setIsLoading(true)
  try {
    await createCampaign(campaignData) // Real API call
    setShowSuccess(true)
  } catch (error) {
    // Handle error
  } finally {
    setIsLoading(false)
  }
}
```

#### 3. File Upload Integration
```tsx
// File upload with real endpoint
const uploadFile = async (file: File) => {
  const formData = new FormData()
  formData.append('file', file)
  
  const response = await fetch(`${API_BASE_URL}/upload`, {
    method: 'POST',
    body: formData
  })
  
  return response.json()
}
```

### Error Handling
```tsx
// Add error boundaries and states
const [error, setError] = useState<string | null>(null)

// In API calls
.catch((error) => {
  setError(error.message)
  setIsLoading(false)
})
```

## 🧪 Testing

### Testing Setup (To Be Implemented)
```bash
# Install testing dependencies
npm install -D @testing-library/react @testing-library/jest-dom jest

# Add test scripts to package.json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch"
}
```

### Component Testing Example
```tsx
// __tests__/Button.test.tsx
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

test('renders button with text', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByText('Click me')).toBeInTheDocument()
})
```

## 🚀 Deployment

### Build Process
```bash
# Create production build
npm run build

# Test production build locally
npm run start
```

### Deployment Options

#### Vercel (Recommended for Next.js)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

#### Environment Variables
Set production environment variables:
- `NEXT_PUBLIC_API_URL`: API endpoint
- `DATABASE_URL`: Database connection
- `AUTH_SECRET`: Authentication secret

## 🤝 Contributing

### Development Guidelines
1. Follow the established component patterns
2. Use TypeScript for type safety
3. Maintain consistent styling with Tailwind
4. Add proper error handling
5. Update documentation for new features

### Code Style
- **Components**: PascalCase (e.g., `MyComponent`)
- **Files**: camelCase (e.g., `myComponent.tsx`)
- **Props**: camelCase with descriptive names
- **CSS Classes**: Follow Tailwind conventions

### Pull Request Process
1. Create feature branch from `main`
2. Implement changes following patterns
3. Test functionality thoroughly
4. Update documentation if needed
5. Submit PR with clear description

## 📝 TODO

### 🔥 High Priority

#### 1. **Fix Loading Screen to Match Figma Design** `ui-improvement`
- **Location**: `src/components/ui/loadingScreen.tsx`
- **Description**: Update loading screen animation and styling to match exact Figma specifications
- **Requirements**:
  - Adjust logo size and positioning
  - Update gradient colors and animation timing
  - Ensure proper spacing and typography
  - Implement correct bouncing dot animation
- **Files to modify**: `loadingScreen.tsx`
- **Estimated effort**: 2-3 hours

#### 2. **Setup Database Integration** `backend`
- **Description**: Implement database layer for campaign and user data persistence
- **Requirements**:
  - Choose database (PostgreSQL recommended)
  - Set up Prisma ORM or similar
  - Create database schemas for campaigns, users, integrations
  - Add database migrations
  - Implement CRUD operations
- **Files to create**: 
  - `prisma/schema.prisma`
  - `src/lib/db.ts`
  - `src/types/database.ts`
- **Environment variables**: `DATABASE_URL`, `DATABASE_DIRECT_URL`
- **Estimated effort**: 1-2 days

#### 3. **Implement Authentication System** `security`
- **Description**: Add user authentication with SSO and basic auth options
- **Requirements**:
  - Implement NextAuth.js or similar
  - Add Google/GitHub SSO providers
  - Create basic email/password auth
  - Add protected routes middleware
  - User session management
- **Files to create**:
  - `src/app/api/auth/[...nextauth]/route.ts`
  - `src/lib/auth.ts`
  - `src/middleware.ts`
  - `src/components/auth/`
- **Environment variables**: `NEXTAUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GITHUB_CLIENT_ID`
- **Estimated effort**: 2-3 days

#### 4. **Setup Email Processing Pipeline** `integration`
- **Description**: Implement email template processing and sending functionality
- **Requirements**:
  - Integrate email service (SendGrid, AWS SES, or Resend)
  - Template processing engine
  - Queue system for bulk emails
  - Email tracking and analytics
  - Personalization variables handling
- **Files to create**:
  - `src/lib/email.ts`
  - `src/templates/`
  - `src/app/api/email/route.ts`
  - `src/components/email/`
- **Dependencies**: Email service SDK, queue system (Bull/BullMQ)
- **Estimated effort**: 3-4 days

#### 5. **Add Function Calls for Workflow Execution** `workflow`
- **Description**: Implement backend API endpoints for campaign workflow execution
- **Requirements**:
  - Create REST API endpoints for each campaign step
  - Add workflow state management
  - Implement step validation
  - Add progress tracking
  - Error handling and rollback capabilities
- **Files to create**:
  - `src/app/api/campaigns/route.ts`
  - `src/app/api/campaigns/[id]/route.ts`
  - `src/app/api/workflows/route.ts`
  - `src/lib/workflow.ts`
- **API Endpoints**:
  - `POST /api/campaigns` - Create campaign
  - `PUT /api/campaigns/[id]` - Update campaign
  - `POST /api/workflows/execute` - Execute workflow
- **Estimated effort**: 2-3 days

### 🚀 Medium Priority

#### 6. **Implement Real-time Google Sheets Integration** `integration`
- **Description**: Connect to Google Sheets API for live data synchronization
- **Requirements**:
  - Google Sheets API integration
  - OAuth2 authentication for Google
  - Real-time data sync
  - Column mapping interface
  - Error handling for API limits
- **Files to modify/create**:
  - `src/lib/integrations/googleSheets.ts`
  - `src/components/CampaignCreation/integrationsStep.tsx`
- **Dependencies**: `googleapis` package
- **Environment variables**: `GOOGLE_SHEETS_API_KEY`, `GOOGLE_CLIENT_SECRET`
- **Estimated effort**: 3-4 days

#### 7. **Add Advanced File Processing** `feature`
- **Description**: Implement file parsing and data extraction capabilities
- **Requirements**:
  - PDF text extraction
  - CSV/Excel parsing
  - Image analysis (OCR)
  - File validation and security scanning
  - Progress tracking for large files
- **Files to create**:
  - `src/lib/fileProcessing.ts`
  - `src/app/api/upload/route.ts`
  - `src/components/FileUpload/`
- **Dependencies**: `pdf-parse`, `xlsx`, `tesseract.js`
- **Estimated effort**: 2-3 days

### 🔧 Technical Improvements

#### 8. **Add Comprehensive Testing Suite** `testing`
- **Description**: Implement unit, integration, and E2E testing
- **Requirements**:
  - Jest + React Testing Library setup
  - Component unit tests
  - API route integration tests
  - Playwright E2E tests
  - Test coverage reporting
- **Files to create**:
  - `__tests__/` directory structure
  - `jest.config.js`
  - `playwright.config.ts`
- **Coverage target**: 80%+ code coverage
- **Estimated effort**: 1-2 weeks

#### 9. **Performance Optimization** `performance`
- **Description**: Optimize application performance and loading times
- **Requirements**:
  - Image optimization and lazy loading
  - Code splitting and dynamic imports
  - Bundle size optimization
  - Caching strategies
  - Performance monitoring
- **Files to modify**:
  - `next.config.ts` - Add performance configs
  - Component files - Add React.lazy()
  - `src/lib/analytics.ts` - Performance tracking
- **Tools**: Next.js Image, React.lazy, Webpack Bundle Analyzer
- **Estimated effort**: 1 week

### 📊 Analytics & Monitoring

#### 10. **Add Analytics and Monitoring** `analytics`
- **Description**: Implement user analytics and application monitoring
- **Requirements**:
  - User behavior tracking
  - Campaign performance metrics
  - Error monitoring and alerting
  - Performance metrics dashboard
- **Services**: Google Analytics, Sentry, Vercel Analytics
- **Files to create**:
  - `src/lib/analytics.ts`
  - `src/lib/monitoring.ts`
- **Estimated effort**: 1-2 days

---

## 🔄 Development Priorities

### Phase 1 (Core Infrastructure)
1. Database setup
2. Authentication system
3. Basic API endpoints

### Phase 2 (Core Features)
1. Email processing pipeline
2. Workflow execution
3. Loading screen fixes

### Phase 3 (Integrations)
1. Google Sheets integration
2. File processing
3. Advanced features

### Phase 4 (Polish)
1. Testing suite
2. Performance optimization
3. Analytics and monitoring

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📄 License

This project is part of the Nuts & Bolts AI Challenge.

---

**Last Updated**: January 2025
**Contributors**: Claude Code Assistant
**Repository**: [CodeGeek04/nutsandbolts-ai-challenge](https://github.com/CodeGeek04/nutsandbolts-ai-challenge)
