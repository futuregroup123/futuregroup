# Future Transfer - Corporate Website

A modern, single-page web application built with Next.js, TypeScript, and Tailwind CSS for Future Group, showcasing their supply chain solutions.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful UI
- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Single Page Application**: Smooth scrolling navigation
- **Component-Based**: Reusable React components
- **Optimized Performance**: Fast loading and smooth animations

## 📋 Sections

1. **Hero Section** - Eye-catching landing with company tagline
2. **Certifications** - Showcase of industry certifications
3. **About Us** - Company overview and mission
4. **Core Values** - Vision, Mission, and Values
5. **Services** - Manufacturing, Warehousing, Transportation
6. **Markets** - Industries served
7. **Latest News** - Company updates carousel
8. **Locations** - Geographic footprint across Canada
9. **Contact** - Contact form for inquiries
10. **Footer** - Links and company information

## 🛠️ Technologies

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Color Scheme

- **Primary**: #003366 (Navy Blue)
- **Secondary**: #5b9bd5 (Light Blue)
- **Accent**: #f0f4f8 (Light Gray)

## 📁 Project Structure

```
future-transfer/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── CoreValues.tsx   # Values section
│   ├── Services.tsx     # Services section
│   ├── Markets.tsx      # Markets section
│   ├── Certifications.tsx
│   ├── News.tsx         # News carousel
│   ├── Locations.tsx    # Locations map
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
├── public/
│   └── images/          # Static images
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🔧 Customization

### Adding Images

1. Place images in `public/images/` directory
2. Update component imports to use Next.js Image component
3. Configure image domains in `next.config.js` if using external images

### Modifying Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#003366',
      secondary: '#5b9bd5',
      // Add your colors
    }
  }
}
```

### Adding New Sections

1. Create component in `components/` directory
2. Import and add to `app/page.tsx`
3. Update navigation in `Header.tsx`

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

```bash
npm run build
# Deploy the .next folder and package.json
```

## 📝 Environment Variables

Create `.env.local` for any environment variables:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 📧 Contact

For questions or support, contact: careers@futuretransfer.com

## 🙏 Acknowledgments

- Design inspired by Future Group's branding
- Built with modern web technologies
- Optimized for performance and accessibility
