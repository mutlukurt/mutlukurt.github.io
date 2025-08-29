# Mutlu Kurt - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Powered by Framer Motion for engaging user experience
- **Performance Optimized**: Fast loading times and efficient code splitting
- **SEO Friendly**: Optimized for search engines
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📱 Sections

1. **Hero Section**: Introduction with profile photo and tech stack
2. **About Section**: Education, background, and journey
3. **Portfolio Section**: Showcase of recent projects
4. **Skills Section**: Technical skills with progress bars
5. **Contact Section**: Contact form and social links

## 🎨 Design Features

- Gradient backgrounds and modern color schemes
- Smooth scroll navigation
- Hover effects and micro-interactions
- Mobile-first responsive design
- Professional typography (Inter font)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mutlukurt/mutlukurt.github.io.git
   cd mutlukurt.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup environment variables:
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` file and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   VITE_EMAIL_TO=your_email@example.com
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The build files will be generated in the `dist` folder.

## ⚙️ EmailJS Configuration

This project uses EmailJS for the contact form. To set it up:

### For Local Development:
1. Create a `.env` file in the root directory
2. Add your EmailJS credentials (see `.env.example`)

### For GitHub Pages Deployment:
1. Go to your GitHub repository settings
2. Navigate to **Secrets and variables** → **Actions**
3. Add the following repository secrets:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAIL_TO`

### Getting EmailJS Credentials:
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key

### Preview Production Build

```bash
npm run preview
```

## 📂 Project Structure

```
src/
├── components/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Portfolio.jsx
│   ├── Skills.jsx
│   └── TechIcons.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Mutlu Kurt**
- GitHub: [@mutlukurt](https://github.com/mutlukurt)
- LinkedIn: [mutlukurt](https://linkedin.com/in/mutlukurt)
- Email: mutlu@techie.com

---

⭐ Star this repository if you found it helpful!
