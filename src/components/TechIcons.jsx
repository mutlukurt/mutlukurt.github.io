import React from 'react'
import { motion } from 'framer-motion'
import { 
  HtmlIcon, 
  CssIcon, 
  JavaScriptIcon, 
  ReactIcon, 
  ReactNativeIcon, 
  FigmaIcon, 
  FramerIcon, 
  NotionIcon 
} from './icons/TechSvgIcons'

const TechIcons = () => {
  const technologies = [
    { name: 'HTML5', icon: HtmlIcon, color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', icon: CssIcon, color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', icon: JavaScriptIcon, color: 'from-yellow-400 to-yellow-500' },
    { name: 'React', icon: ReactIcon, color: 'from-blue-400 to-blue-500' },
    { name: 'React Native', icon: ReactNativeIcon, color: 'from-blue-500 to-purple-500' },
    { name: 'Figma', icon: FigmaIcon, color: 'from-purple-500 to-pink-500' },
    { name: 'Framer', icon: FramerIcon, color: 'from-pink-500 to-rose-500' },
    { name: 'Notion', icon: NotionIcon, color: 'from-gray-600 to-gray-700' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
        Technologies I Use
      </p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-3 justify-center lg:justify-start"
      >
        {technologies.map((tech, index) => {
          const IconComponent = tech.icon
          return (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 cursor-pointer`}>
                <IconComponent className="w-6 h-6 text-white" />
              </div>
            
            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              {tech.name}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default TechIcons
