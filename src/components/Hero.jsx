import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import TechIcons from './TechIcons'
import { LightningIcon, RocketIcon } from './icons/TechSvgIcons'
import profilePhoto from '../assets/IMG_6202.JPG'

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-primary-50/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-200/40 to-blue-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-primary-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight"
              >
                <span className="block">Hi, I'm</span>
                <span className="block text-gradient">Mutlu Kurt</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-2"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-semibold">
                  Software Developer
                </h2>
                <p className="text-lg sm:text-xl text-gray-600">
                  Web & Mobile Applications
                </p>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Building modern, responsive websites and mobile applications with cutting-edge technologies. 
              Passionate about creating exceptional user experiences and clean, efficient code.
            </motion.p>

            {/* Tech Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <TechIcons />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-blue-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
                
                {/* Photo Container */}
                <div className="relative w-full h-full bg-gradient-to-r from-primary-500 to-blue-500 rounded-full p-2">
                  <div className="w-full h-full bg-white rounded-full p-2">
                    <img
                      src={profilePhoto}
                      alt="Mutlu Kurt - Software Developer"
                      className="w-full h-full profile-photo rounded-full shadow-large"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <LightningIcon className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-primary-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <RocketIcon className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </motion.div>
      </motion.button>
    </section>
  )
}

export default Hero
