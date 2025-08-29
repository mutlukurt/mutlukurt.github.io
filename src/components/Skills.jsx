import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  HtmlIcon, 
  CssIcon, 
  JavaScriptIcon, 
  ReactIcon, 
  ReactNativeIcon, 
  FigmaIcon, 
  FramerIcon, 
  NotionIcon,
  TailwindIcon,
  CursorIcon,
  BoltIcon,
  LovableIcon,
  EmergentIcon
} from './icons/TechSvgIcons'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: 95, icon: HtmlIcon, color: "from-orange-500 to-red-500" },
        { name: "CSS3", level: 90, icon: CssIcon, color: "from-blue-500 to-blue-600" },
        { name: "JavaScript", level: 88, icon: JavaScriptIcon, color: "from-yellow-400 to-yellow-500" },
        { name: "React", level: 85, icon: ReactIcon, color: "from-blue-400 to-blue-500" },
        { name: "Tailwind CSS", level: 92, icon: TailwindIcon, color: "from-cyan-500 to-blue-500" },
      ]
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 82, icon: ReactNativeIcon, color: "from-blue-500 to-purple-500" },
        { name: "Mobile UI/UX", level: 88, icon: ReactNativeIcon, color: "from-purple-500 to-pink-500" },
        { name: "Cross-platform", level: 80, icon: ReactNativeIcon, color: "from-green-500 to-blue-500" },
      ]
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "Figma", level: 90, icon: FigmaIcon, color: "from-purple-500 to-pink-500" },
        { name: "Framer", level: 85, icon: FramerIcon, color: "from-pink-500 to-rose-500" },
        { name: "Notion", level: 88, icon: NotionIcon, color: "from-gray-600 to-gray-700" },
        { name: "UI/UX Design", level: 87, icon: FigmaIcon, color: "from-indigo-500 to-purple-500" },
      ]
    },
    {
      title: "AI-Powered Development",
      skills: [
        { name: "Cursor AI", level: 90, icon: CursorIcon, color: "from-blue-600 to-purple-600" },
        { name: "Bolt", level: 85, icon: BoltIcon, color: "from-yellow-500 to-orange-500" },
        { name: "Lovable", level: 88, icon: LovableIcon, color: "from-pink-500 to-red-500" },
        { name: "Emergent.sh", level: 82, icon: EmergentIcon, color: "from-green-500 to-teal-500" },
      ]
    }
  ]

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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  }

  return (
    <section id="skills" className="section-padding bg-white">
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
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm proficient in a wide range of technologies and tools that help me create 
              exceptional digital experiences and efficient development workflows.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-gray-900 text-center lg:text-left">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                                        {category.skills.map((skill, skillIndex) => {
                        const IconComponent = skill.icon
                        return (
                          <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            className="space-y-3"
                          >
                            {/* Skill Header */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className={`w-10 h-10 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center text-white`}>
                                  <IconComponent className="w-5 h-5" />
                                </div>
                                <span className="font-semibold text-gray-900">{skill.name}</span>
                              </div>
                              <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                            </div>

                      {/* Progress Bar */}
                      <div className="relative">
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                            variants={progressVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            custom={skill.level}
                          >
                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-pulse"></div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                        )
                      })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Cloud */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center">
              Additional Technologies
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Git & GitHub", "Responsive Design", "Performance Optimization", 
                "SEO", "Accessibility", "Testing", "API Integration", "Database Design",
                "Project Management", "Agile Methodology", "Version Control", "Deployment"
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-primary-100 hover:to-primary-200 rounded-full text-sm font-medium text-gray-700 hover:text-primary-700 transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Always Learning, Always Growing
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Technology evolves rapidly, and I'm committed to staying at the forefront of 
                innovation. I continuously learn new tools, frameworks, and best practices to 
                deliver cutting-edge solutions that exceed expectations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-black text-gradient">50+</div>
                  <div className="text-gray-600 font-medium">Technologies</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-black text-gradient">3+</div>
                  <div className="text-gray-600 font-medium">Years Learning</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-black text-gradient">∞</div>
                  <div className="text-gray-600 font-medium">Growth Mindset</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
