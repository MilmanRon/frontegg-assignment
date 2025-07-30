# Frontegg Technical Assignment

Angular application demonstrating Frontegg authentication integration for Tier-1 Technical Support Engineer role.

## Project Structure
- `/src` - Angular application with Frontegg integration
- `/docs` - Assignment documentation
  - `Items for Improvement.pdf` - 3 improvement recommendations
  - `Common Questions Answers.pdf` - Common support questions and answers

## Features Implemented
- ✅ Hosted login authentication
- ✅ User profile display (name and picture)
- ✅ Admin portal integration via Settings button
- ✅ Proper logout functionality
- ✅ Tenant Switching

## Setup

### Prerequisites
- Node.js (v18+)
- Angular CLI

### Installation
```bash
git clone [repository-url]
cd frontegg-assignment
npm install
```

### Development Server
```bash
ng serve
```
Navigate to `http://localhost:4200/`. The app will reload automatically when you modify source files.

### Configuration
The app is configured with Frontegg credentials:
- Base URL: `https://app-tkyztdfvr4u7.frontegg.com`
- Client ID: `064e6075-72a4-4430-bc70-7fc5e9ab31fd`

## Usage
1. Click "Login" to authenticate via Frontegg's hosted login
2. View your profile information on the homepage
3. Use "Settings" button to access the admin portal

## Technical Details
- Angular 20.0.3 with standalone components
- Frontegg Angular SDK integration
- Hosted authentication flow
- CORS configuration for localhost development

## Assignment Deliverables
- **Working Angular application** with full Frontegg integration
- **Improvement suggestions** based on hands-on experience
- **Support Q&A document** covering common user issues
