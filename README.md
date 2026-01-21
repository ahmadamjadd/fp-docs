# CarbonTeq Functional Programming Library Documentation

> Official documentation platform for CarbonTeq's internal Functional Programming library, built to improve developer onboarding and provide comprehensive learning resources.

## 📋 Overview

This project is a modern, interactive documentation platform designed to help developers learn and understand CarbonTeq's Functional Programming library. The platform features live code testing, interactive tutorials, and comprehensive API references, making complex functional programming concepts accessible to developers of all skill levels.

## ✨ Features

### 🎯 Interactive Learning Experience
- **Live Code Testing**: Integrated Sandpack for real-time code execution and testing directly in the browser
- **Scrollycoding**: Interactive code walkthroughs that sync explanations with code examples as you scroll
- **Code Highlighting**: Syntax highlighting with support for light and dark themes

### 📚 Comprehensive Documentation
- **Introduction Guide**: Learn the fundamentals of functional programming and why it matters
- **Building Blocks**: Deep dive into core concepts like `Option`, `Result`, and pattern matching
- **API Reference**: Complete documentation of all library functions with examples

### 🎨 Modern UI/UX
- Responsive design that works on all devices
- Dark mode support
- Smooth animations and transitions
- Accessible components built with Radix UI

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with React 19
- **Language**: TypeScript
- **Documentation**: [Fumadocs](https://fumadocs.dev/) - Modern documentation framework
- **Code Execution**: [Sandpack](https://sandpack.codesandbox.io/) - Live code editing and execution
- **Interactive Code**: [Codehike](https://codehike.org/) - Advanced code walkthroughs
- **UI Components**: 
  - Radix UI primitives
  - Tailwind CSS for styling
  - Lucide React for icons
- **Content**: MDX for rich documentation content

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Vercel
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── content/
│   └── docs/              # Documentation content (MDX files)
│       ├── Introduction/  # Getting started guides
│       ├── BuildingBlocks/# Core concepts (Option, Result, etc.)
│       └── APIReference/  # Complete API documentation
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── (home)/      # Landing page
│   │   ├── docs/        # Documentation pages
│   │   └── api/         # API routes (search, etc.)
│   ├── components/      # React components
│   │   ├── SandPack/    # Live code editor integration
│   │   ├── scrollycoding.tsx  # Interactive code walkthroughs
│   │   ├── annotations/ # Code annotation handlers
│   │   └── ui/          # Reusable UI components
│   ├── lib/             # Utility functions
│   └── themes/          # Theme configurations
└── public/              # Static assets
```

## 🎓 Key Components

### Scrollycoding
Interactive code walkthroughs that synchronize explanations with code examples. As users scroll through explanations, the corresponding code is highlighted and displayed.

### Sandpack Integration
Live code editor that allows developers to test CarbonTeq FP library functions directly in the browser without leaving the documentation.

### Documentation Sections

1. **Introduction**: 
   - Why Functional Programming?
   - Error handling in FP vs traditional approaches
   - Getting started with the library

2. **Building Blocks**:
   - `Option` type: Handling nullable values
   - `Result` type: Error handling
   - Pattern matching with `MatchRes`

3. **API Reference**:
   - All library functions
   - Map operations (map, flatMap, mapBoth, etc.)
   - Unwrapping functions (unwrap, safeUnwrap, etc.)
   - Pipeline operations (synchronous and asynchronous)
   - Validation and utility functions

## 🧩 Development

### Adding New Documentation

1. Create MDX files in the appropriate directory under `content/docs/`
2. Update the `meta.json` file in the parent directory to include the new page
3. The documentation will automatically appear in the navigation

### Custom Components

The project uses custom MDX components for enhanced documentation:
- `<Scrollycoding>`: For interactive code walkthroughs
- `<Sandpack>`: For live code examples
- Custom annotations for code highlighting and transitions

## 📝 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run postinstall` - Process MDX files (runs automatically after install)

## 🎯 Project Goals

This documentation platform was built to:
- **Improve Developer Onboarding**: Make it easier for new developers to learn the CarbonTeq FP library
- **Simplify Complex Concepts**: Translate complex functional programming patterns into digestible guides
- **Enable Interactive Learning**: Allow developers to experiment with code while learning
- **Provide Complete Reference**: Serve as the single source of truth for the library's API

## 🤝 Contributing

This is an internal project for CarbonTeq. For contributions, please follow the team's guidelines and submit pull requests for review.

## 📄 License

Internal project - All rights reserved by CarbonTeq.

## 👨‍💻 Author

**Muhammad Ahmad**  
Software Engineering Intern at CarbonTeq Lahore  
June 2025 – August 2025

---

Built with ❤️ for CarbonTeq developers
