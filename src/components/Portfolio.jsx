import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'

const Portfolio = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Prestige Motors",
      description: "Luxury car dealership website with modern design and smooth animations. Features vehicle showcase, booking system, and responsive layout.",
      image: "/prestige-motors.png",
      link: "https://mutlukurt.github.io/prestige-motors/",
      github: "#",
      category: "web",
      technologies: ["React", "Tailwind CSS", "Framer Motion"]
    },
    {
      id: 2,
      title: "Elara Vance Portfolio",
      description: "Personal portfolio website with creative design and interactive elements. Showcases work with elegant typography and smooth transitions.",
      image: "/elara-vance.png",
      link: "https://mutlukurt.github.io/elara-vance-portfolio/",
      github: "#",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 3,
      title: "Alex Corbin Portfolio",
      description: "Creative portfolio website with unique layout and engaging animations. Features project showcase and contact integration.",
      image: "/alex-corbin-portfolio.png",
      link: "https://mutlukurt.github.io/alex-corbin-portfolio/",
      github: "#",
      category: "web",
      technologies: ["React", "CSS3", "Animations"]
    },
    {
      id: 4,
      title: "DashPro",
      description: "Professional dashboard template with clean UI and comprehensive data visualization. Perfect for business analytics and management.",
      image: "/dash-pro.png",
      link: "https://mutlukurt.github.io/dashpro/",
      github: "#",
      category: "web",
      technologies: ["React", "Chart.js", "Tailwind CSS"]
    },
    {
      id: 5,
      title: "NovaVault Web3",
      description: "Modern Web3 wallet landing page with cryptocurrency features and blockchain integration. Secure and user-friendly interface.",
      image: "/nova-vault-web3-wallet.png",
      link: "https://mutlukurt.github.io/NovaVault-Web3-Landing/",
      github: "#",
      category: "web",
      technologies: ["React", "Web3.js", "Tailwind CSS"]
    },
    {
      id: 6,
      title: "Food Fun",
      description: "Restaurant website template with appetizing design and online ordering system. Features menu showcase and reservation booking.",
      image: "/food-fun.png",
      link: "https://mutlukurt.github.io/foodfun/",
      github: "#",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript"]
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
              My <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Here are some of my recent projects that showcase my skills in web development, 
              mobile applications, and UI/UX design.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-soft'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                whileHover={{ y: -10 }}
                className="group card overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-gray-900 hover:bg-white transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-gray-900 hover:bg-white transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center"
                    >
                      View Live
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center"
                    >
                      View Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <p className="text-gray-600">
              Interested in working together? Let's create something amazing!
            </p>
            <motion.button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
