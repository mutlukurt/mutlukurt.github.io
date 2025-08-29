import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'
import CodingIcon from './icons/CodingIcon'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const projectLinks = [
    { name: 'Prestige Motors', href: 'https://mutlukurt.github.io/prestige-motors/' },
    { name: 'Elara Vance', href: 'https://mutlukurt.github.io/elara-vance-portfolio/' },
    { name: 'Alex Corbin', href: 'https://mutlukurt.github.io/alex-corbin-portfolio/' },
    { name: 'DashPro', href: 'https://mutlukurt.github.io/dashpro/' },
    { name: 'NovaVault', href: 'https://mutlukurt.github.io/NovaVault-Web3-Landing/' },
    { name: 'Food Fun', href: 'https://mutlukurt.github.io/foodfun/' },
  ]

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        const navbar = document.querySelector('nav')
        const navbarHeight = navbar ? navbar.offsetHeight : 80
        
        const elementRect = element.getBoundingClientRect()
        const absoluteElementTop = elementRect.top + window.pageYOffset
        const targetPosition = absoluteElementTop - navbarHeight - 30
        
        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: 'smooth'
        })
      }
    } else {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/20 to-blue-500/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <CodingIcon className="w-7 h-7" color="white" />
                  </div>
                  <h3 className="text-2xl font-bold">Mutlu Kurt</h3>
                </div>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Software Developer passionate about creating exceptional digital experiences 
                  with modern web and mobile technologies. Always learning, always building.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-200">Built with</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Tailwind CSS', 'Framer Motion', 'Vite'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-200">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors duration-200 block"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Projects */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-200">Recent Projects</h4>
              <ul className="space-y-3">
                {projectLinks.slice(0, 5).map((project) => (
                  <li key={project.name}>
                    <motion.button
                      onClick={() => scrollToSection(project.href)}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors duration-200 block text-sm"
                    >
                      {project.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container-custom py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>© {currentYear} Mutlu Kurt. Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>in Turkey</span>
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                <span className="text-sm">Back to top</span>
                <div className="w-8 h-8 bg-gray-800 group-hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-200">
                  <ArrowUp className="w-4 h-4" />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 z-50 lg:hidden"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  )
}

export default Footer
