'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Menu, X, CheckCircle, Users, Code, Globe, Quote, ChevronRight, Microscope, Grid, FileText } from 'lucide-react'



export default function About() {
const [isMenuOpen, setIsMenuOpen] = useState(false)
const [activeSection, setActiveSection] = useState('')

const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

useEffect(() => {
  const handleScroll = () => {
    const sections = ['hero', 'what-is', 'goals', 'features', 'citation', 'join-community']
    const currentSection = sections.find(section => {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      }
      return false
    })
    if (currentSection) setActiveSection(currentSection)
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

return (
  <div className="min-h-screen bg-gradient-to-br from-[#E8F5E9] to-[#E3F2FD] flex flex-col">
    <header className="sticky top-0 w-full py-4 bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="PhysiCell Logo" width={40} height={40} className="w-10 h-10" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4CAF50] to-[#2196F3]">PhysiCell</span>
        </Link>
        <nav className="hidden md:flex space-x-1">
          {['Home', 'About', 'Features', 'Documentation', 'Downloads', 'Contact'].map((item) => (
            <Link key={item} href={item === 'Features' ? '#' :  item === 'Documentation' ? '#' : item === 'Downloads' ? '#' : item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
              <Button variant="ghost" className={`text-[#333] hover:text-[#4CAF50] hover:bg-[#E8F5E9] transition-all duration-300 ${activeSection === item.toLowerCase() ? 'bg-[#E8F5E9] text-[#4CAF50]' : ''}`}>
                {item}
              </Button>
            </Link>
          ))}
        </nav>
        <Button variant="ghost" className="md:hidden text-[#333]" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
    </header>

    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}

   
          className="md:hidden bg-white shadow-md absolute top-16 left-0 right-0 z-40"
        >
          <nav className="flex flex-col space-y-2 p-4">
            {['Home', 'About', 'Features', 'Documentation', 'Downloads', 'Contact'].map((item) => (
              <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                <Button variant="ghost" className="w-full text-left text-[#333] hover:text-[#4CAF50] hover:bg-[#E8F5E9] justify-start">
                  {item}
                </Button>
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>

    <main className="flex-grow">
      <section id="hero" className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4CAF50]/10 to-[#2196F3]/10">
          <Grid className="w-full h-full text-[#4CAF50]/20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#4CAF50] to-[#2196F3]">
              About PhysiCell
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-[#333]">
              An open source, agent-based modeling framework for 3-D multicellular simulations
            </p>
            <Button className="bg-gradient-to-r from-[#4CAF50] to-[#2196F3] text-white hover:from-[#45a049] hover:to-[#1e88e5] transition-all duration-300">
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section id="what-is" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-[#333]">What is PhysiCell?</h2>
              <p className="text-lg mb-6 text-[#555]">
                PhysiCell is a cutting-edge, open-source framework designed for 3-D multicellular simulations. It empowers researchers to model and analyze complex biological systems with unprecedented detail and accuracy.
              </p>
              <p className="text-lg mb-6 text-[#555]">
                By focusing on cellular behaviors such as movement, growth, division, interaction, and death, PhysiCell unveils the intricacies of tissue-scale dynamics emerging from systems of many interacting cells.
              </p>
              <p className="text-lg text-[#555]">
                Developed to seamlessly integrate with BioFVM, PhysiCell serves as a sophisticated virtual laboratory for multicellular systems, simulating both the biochemical microenvironment and the mechanically and biochemically interacting cells within it.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/PhysiCell_pic.jpg"
                alt="PhysiCell Simulation"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#4CAF50]/20 to-[#2196F3]/20 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="goals" className="py-20 bg-gradient-to-br from-[#E8F5E9] to-[#E3F2FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center text-[#333]"
          >
            Project Goals
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Simulate large systems of cells in 3-D tissues on standard desktops",
              "Scale to at least 500,000 cells on modern quad-core desktops",
              "Implement physics-based cell movement and volume changes",
              "Support calibration to digital cell lines and simulation snapshots",
              "Model realistic cell cycle, apoptosis, and necrosis",
              "Couple with microenvironment using BioFVM",
              "Reproduce experimentally recorded cell heterogeneity",
              "Maintain open source and cross-platform compatibility",
              "Focus on ongoing performance and accuracy improvements"
            ].map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-[#4CAF50] flex-shrink-0 mt-1" />
                    <p className="text-[#333] text-lg">{goal}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center text-[#333]"
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Mechanistic", icon: Microscope, description: "Built upon transport of diffusible substances, cell movement, and basic signaling." },
              { title: "Multiscale", icon: Grid, description: "Simulates tissue dynamics from subcellular processes to tissue-scale behaviors." },
              { title: "Flexible", icon: FileText, description: "Adaptable to a variety of biological problems in 2 dimensional and 3 dimensional." },
              { title: "User-Friendly", icon: Users, description: "Easy to learn with an XML-based model setup and intuitive C++ API." },
              { title: "Open Source", icon: Code, description: "BSD license for academic and commercial use, with active development." },
              { title: "Cross-Platform", icon: Globe, description: "Works on Linux, macOS, and Windows with minimal dependencies." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-white to-[#E3F2FD] shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 border-t-4 border-[#2196F3]">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-[#333] flex items-center">
                      <feature.icon className="mr-2 h-6 w-6 text-[#4CAF50]" />
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#555] text-lg">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="citation" className="py-20 bg-gradient-to-br from-[#E8F5E9] to-[#E3F2FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center text-[#333]"
          >
            Citation
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 backdrop-sm shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <CardContent className="p-8">
                <Quote className="h-12 w-12 text-[#4CAF50] mb-6" />
                <p className="text-[#333] text-lg mb-6">
                  PhysiCell was published after extensive peer review in PLoS Computational Biology. Please cite:
                </p>
                <p className="text-[#555] text-lg italic mb-8">
                  A. Ghaffarizadeh, R. Heiland, S.H. Friedman, S.M. Mumenthaler, and P. Macklin, PhysiCell: an open source physics-based cell simulator for 3-D multicellular systems, PLoS Comput. Biol. 14(2): e1005991, 2018. DOI: 10.1371/journal.pcbi.1005991.
                </p>
                <div className="flex space-x-4">
                  <Link href="https://drive.google.com/uc?export=download&amp;id=1mXXmNj3BGMgJC4ysJV8Mab263RU0UBtq">
                    <Button className="bg-gradient-to-r from-[#4CAF50] to-[#45a049] text-white hover:from-[#45a049] hover:to-[#4CAF50] transition-all duration-300">
                      BIBTEX
                    </Button>
                  </Link>
                  <Link href="https://drive.google.com/uc?export=download&amp;id=1rSrWBM29h92LX1LSGlHizmH3lQ9ZFT3N">
                    <Button className="bg-gradient-to-r from-[#2196F3] to-[#1e88e5] text-white hover:from-[#1e88e5] hover:to-[#2196F3] transition-all duration-300">
                      ENDNOTE
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="licensing" className="py-20 bg-gradient-to-br from-[#E8F5E9] to-[#E3F2FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center text-[#333]"
          >
            Licensing
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 backdrop-sm shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <CardContent className="p-8">
                <p className="text-[#555] text-lg mb-6">
                  PhysiCell is licensed under the (3-Clause) BSD License. It is GPL v2 and v3 compatible, and suitable for commercial use in many circumstances.
                </p>
                <p className="text-[#333] text-lg font-bold">
                  PhysiCell is an academic and scientific code, and it should not be used as the basis for individual medical decisions. Always consult your physician when making medical decisions.
                </p>
                <div className="mt-6">
                  <Button className="bg-gradient-to-r from-[#4CAF50] to-[#2196F3] text-white hover:from-[#45a049] hover:to-[#1e88e5] transition-all duration-300">
                    View Full License
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="join-community" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center text-[#333]"
          >
            Join the PhysiCell Community
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-white to-[#E8F5E9] shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-[#333]">Get Involved</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#555] text-lg mb-6">
                    Contribute to the project, share your research, or join our forums to connect with other scientists and developers.
                  </p>
                  <Button className="bg-gradient-to-r from-[#4CAF50] to-[#45a049] text-white hover:from-[#45a049] hover:to-[#4CAF50] transition-all duration-300">
                    <Users className="mr-2 h-5 w-5" />
                    Join Community
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-white to-[#E3F2FD] shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-[#333]">Stay Updated</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#555] text-lg mb-6">
                    Sign up for our newsletter to receive the latest updates, tutorials, and community news.
                  </p>
                  <div className="flex space-x-2">
                    <Input type="email" placeholder="Enter your email" className="flex-grow bg-white border-gray-300 text-[#333] placeholder-gray-500" />
                    <Button className="bg-gradient-to-r from-[#2196F3] to-[#1e88e5] text-white hover:from-[#1e88e5] hover:to-[#2196F3] transition-all duration-300">
                      Sign Up
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </main>

    <footer className="bg-gradient-to-r from-[#4CAF50]/10 to-[#2196F3]/10 text-[#333] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="PhysiCell Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4CAF50] to-[#2196F3]">
                PhysiCell
              </h3>
            </div>
            <p className="text-[#555] text-sm sm:text-base leading-relaxed mb-6">
              Open source, agent-based modeling framework for 3-D multicellular
              simulations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-12 col-span-1 md:col-span-2 lg:col-span-2">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#333]">Quick Links</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                {['Home', 'About', 'Features', 'Documentation', 'Download', 'Contact'].map((item) => (
                  <li key={item}>
                     <Link key={item} href={item === 'Features' ? '#' :  item === 'Documentation' ? '#' : item === 'Downloads' ? '#' : item === 'Home' ? '/' : `/${item.toLowerCase()}`}>

                      <Button
                        variant="link"
                        className="text-[#555] hover:text-[#4CAF50] p-0 transition-colors duration-300"
                      >
                        {item}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#333]">Resources</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                {['Documentation', 'Tutorials', 'Publications', 'Community'].map((item) => (
                  <li key={item}>
                    <Button
                      variant="link"
                      className="text-[#555] hover:text-[#2196F3] p-0 transition-colors duration-300"
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-[#333]">Stay Connected</h4>
            <p className="text-[#555] text-sm sm:text-base mb-4 leading-relaxed">
              Sign up for our newsletter for updates.
            </p>
            <form className="flex flex-col space-y-2 mb-6">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/50 border border-gray-300 rounded px-3 py-2 text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
              />
              <Button className="bg-gradient-to-r from-[#4CAF50] to-[#2196F3] text-white font-semibold py-2 rounded hover:from-[#45a049] hover:to-[#1e88e5] transition-all duration-300">
                Sign Up
              </Button>
            </form>
            <div className="flex space-x-4">
              {[
                { name: 'Facebook', icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z', color: '#1877F2' },
                { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', color: '#1DA1F2' },
                { name: 'GitHub', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z', color: '#333' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="inline-block p-2 w-10 h-10 bg-gray-100 rounded hover:opacity-80 shadow-md transition-opacity duration-300"
                  style={{ backgroundColor: social.color }}
                  aria-label={social.name}
                >
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-[#555] text-left">
          <p>&copy; {new Date().getFullYear()} PhysiCell. All rights reserved.</p>
        </div>
      </div>
    </footer>

  </div>
)
}