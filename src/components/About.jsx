import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Code, Palette, Smartphone, BookOpen } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const educationData = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Visual Communication Design",
      institution: "Anadolu University",
      period: "2023 - Present",
      type: "Bachelor's Degree",
      description: "Currently pursuing my bachelor's degree, focusing on modern design principles and digital communication.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Labor Economics",
      institution: "Çankırı Karatekin University",
      period: "2022 - Present",
      type: "Bachelor's Degree - Senior Year",
      description: "Currently in my final year as a senior student, specializing in economic analysis and labor market dynamics.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Design and Coding",
      institution: "Anadolu University",
      period: "2019 - 2022",
      type: "Associate Degree - Graduated",
      description: "Graduated with comprehensive knowledge in web technologies, programming fundamentals, and digital design.",
      color: "from-primary-500 to-primary-600"
    }
  ]

  const highlights = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Building cross-platform mobile applications with React Native",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces with Figma and Framer",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern web applications using React and cutting-edge tools",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "AI-Powered Development",
      description: "Leveraging Cursor, Bolt, Lovable, and Emergent.sh for rapid development",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate software developer with a diverse educational background in economics, web development, 
              and design, bringing analytical thinking and creative solutions to modern applications.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  As a senior student studying Labor Economics at Çankırı Karatekin University since 2022, I bring a unique 
                  analytical perspective to software development. My journey began in 2019 when I started 
                  studying Web Design and Coding at Anadolu University, where I discovered my passion for 
                  creating digital solutions.
                </p>
                <p>
                  After graduating from Web Design and Coding in 2022, I started my Labor Economics degree 
                  the same year and began pursuing Visual Communication Design at Anadolu University in 2023. 
                  This diverse educational background - combining economics, web development, and design - gives me a 
                  comprehensive understanding of both technical implementation and user experience.
                </p>
                <p>
                  I specialize in modern development tools and AI-powered platforms like Cursor, Bolt, 
                  Lovable, and Emergent.sh, which enable me to deliver high-quality solutions efficiently. 
                  My goal is to bridge the gap between analytical thinking, design, and development, creating 
                  seamless digital experiences that solve real-world problems.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Education */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card p-6 border-l-4 border-primary-500"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${edu.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                        {edu.icon}
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <h4 className="font-bold text-gray-900">{edu.title}</h4>
                          <span className="text-sm text-primary-600 font-medium">{edu.period}</span>
                        </div>
                        <p className="text-primary-600 font-medium">{edu.institution}</p>
                        <p className="text-sm text-gray-500 font-medium">{edu.type}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{edu.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center">What I Do</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="card p-6 text-center space-y-4 group cursor-pointer"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-2xl flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {highlight.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-gray-900">{highlight.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-black text-gradient">3+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-black text-gradient">15+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-black text-gradient">100%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
