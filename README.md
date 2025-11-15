# Kaoutar Amazzar - Portfolio

A modern, minimalist portfolio showcasing my work as a Full-Stack Software Engineer with 6+ years of experience. Built with a premium black & white monospaced design system featuring elegant animations and multilingual support.

![Portfolio Preview](https://img.shields.io/badge/Live-Portfolio-black?style=for-the-badge)

## ✨ Features

- 🎨 **Premium Design System** - Clean black & white monospaced aesthetic with hard shadows
- 🌍 **Multilingual Support** - Available in English, French, and German
- ✨ **Rich Animations** - Smooth entrance animations, hover effects, and floating geometric shapes
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **High Performance** - Built with Vite for lightning-fast load times
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML
- 🌙 **Theme Toggle** - Light/Dark mode support
- 📄 **Multi-language CV** - Downloadable CVs in English, French, and German

## 🚀 Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with custom design tokens
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Icons:** Lucide React
- **Fonts:** JetBrains Mono (monospaced)
- **State Management:** React Context API
- **Form Handling:** React Hook Form with Zod validation

## 📂 Project Structure

```
portfolio-architects/
├── public/
│   ├── cv-en.pdf           # English CV
│   ├── cv-fr.pdf           # French CV
│   ├── cv-de.pdf           # German CV
│   ├── favicon.ico         # Site favicon
│   └── robots.txt          # SEO robots file
├── src/
│   ├── assets/             # Images and static files
│   ├── components/
│   │   ├── sections/       # Page sections (Hero, About, Skills, etc.)
│   │   └── ui/             # Reusable UI components
│   ├── contexts/           # React contexts (Language, Theme)
│   ├── data/               # Content and translations
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── pages/              # Page components
└── index.html              # Entry HTML file
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm (recommended: [install with nvm](https://github.com/nvm-sh/nvm))

### Installation

```bash
# Clone the repository
git clone https://github.com/AmazzarK/portfolio-architects.git

# Navigate to project directory
cd portfolio-architects

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🎨 Customization

### Updating Content

Edit the content in `src/data/content.ts` to customize:
- Personal information
- Work experience
- Projects
- Skills
- Education

### Changing Colors

The color system is defined in `src/index.css` using CSS custom properties. Modify the `:root` and `.dark` selectors to adjust the color palette.

### Adding/Removing Languages

Update the `LanguageContext.tsx` and add translations in `src/data/content.ts`.

## 📝 Portfolio Sections

- **Hero** - Introduction with profile image and CTAs
- **About** - Personal background and statistics
- **Skills** - Technical skills organized by category
- **Experience** - Professional work history with timeline
- **Education** - Academic background
- **Projects** - Portfolio of key projects
- **Contact** - Contact information and language proficiencies

## 🎭 Animation Features

- Fade-in animations on scroll
- Staggered entrance effects
- Floating geometric background shapes
- Smooth hover transitions
- 3D transform effects
- Bounce and zoom animations

## 🌐 Deployment

This project can be deployed to any static hosting service:

- **Vercel** - `npm run build` then deploy `dist` folder
- **Netlify** - Connect GitHub repo for automatic deployments
- **GitHub Pages** - Use GitHub Actions for deployment

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Kaoutar Amazzar**
- GitHub: [@AmazzarK](https://github.com/AmazzarK)
- LinkedIn: [amazzarkaoutar](https://linkedin.com/in/amazzarkaoutar)
- Email: amazzar.consult@gmail.com

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide](https://lucide.dev/) for the icon system
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework


