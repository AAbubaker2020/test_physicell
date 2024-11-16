'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Download, FileText, Grid, Menu, Microscope, X, ChevronRight } from 'lucide-react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'resources', 'get-started']
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
            className="md:hidden bg-white shadow-md fixed top-[60px] left-0 right-0 z-40"
          >
            <nav className="flex flex-col space-y-2 p-4 max-h-[calc(100vh-60px)] overflow-y-auto">
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
      <section id="hero" className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-r from-[#4CAF50]/10 to-[#2196F3]/10">
          <div className="absolute inset-0">
            <Grid className="w-full h-full text-[#4CAF50]/20" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 text-center lg:text-left"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#333] leading-tight">
                  Revolutionize Your Cell Modeling
                </h1>
                <p className="text-lg sm:text-xl mb-8 text-[#555] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  PhysiCell: Advanced open-source physics-based cell simulator for
                  cancer research and beyond
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button className="bg-gradient-to-r from-[#4CAF50] to-[#45a049] text-white px-6 py-3 rounded hover:from-[#45a049] hover:to-[#4CAF50] transition-all duration-300 text-sm sm:text-base">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#2196F3] text-[#2196F3] px-6 py-3 rounded hover:bg-[#2196F3] hover:text-white transition-all duration-300 text-sm sm:text-base"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 grid grid-cols-2 sm:grid-cols-2 gap-4 w-full max-w-md mx-auto lg:max-w-none"
              >
                {[
                  { day: 0, cells: 18317, color: '#2A9D8F' },
                  { day: 7, cells: 53600, color: '#008B8B' },
                  { day: 15, cells: 91189, color: '#006666' },
                  { day: 21, cells: 66978, color: '#003333' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative p-2 bg-white rounded-lg shadow-lg overflow-hidden group"
                  >
                    <span className="absolute top-2 left-2 bg-[#4CAF50] text-white text-xs px-2 py-1 rounded z-10">
                      Day {item.day} - {item.cells} cells
                    </span>
                    <div className="relative w-full h-48 sm:h-40 md:h-48">
                      <Image
                        src={`/${index + 1}.png`}
                        alt={`Cell simulation at day ${item.day}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
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
              className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#333]"
            >
              Key Features
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Physics-Based Modeling", icon: Microscope, description: "Simulate cell behavior with accurate physical interactions and forces for realistic results." },
                { title: "Flexible Framework", icon: Grid, description: "Easily extend and customize simulations to fit your specific research needs with our adaptable architecture." },
                { title: "High Performance", icon: FileText, description: "Optimized for speed and efficiency, allowing complex, large-scale simulations that push the boundaries of research." }
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

        <section id="resources" className="py-20 bg-gradient-to-br from-[#E8F5E9] to-[#E3F2FD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#333]"
            >
              Resources
            </motion.h2>
            <Tabs defaultValue="documentation" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 rounded-lg bg-white p-1 shadow mb-6">
                <TabsTrigger value="documentation" className="rounded-md py-2 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:ring-opacity-50 data-[state=active]:bg-[#4CAF50] data-[state=active]:text-white">Documentation</TabsTrigger>
                <TabsTrigger value="tutorials" className="rounded-md py-2 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:ring-opacity-50 data-[state=active]:bg-[#4CAF50] data-[state=active]:text-white">Tutorials</TabsTrigger>
                <TabsTrigger value="publications" className="rounded-md py-2 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:ring-opacity-50 data-[state=active]:bg-[#4CAF50] data-[state=active]:text-white">Publications</TabsTrigger>
                <TabsTrigger value="community" className="rounded-md py-2 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:ring-opacity-50 data-[state=active]:bg-[#4CAF50] data-[state=active]:text-white">Community</TabsTrigger>
              </TabsList>
              {['documentation', 'tutorials', 'publications', 'community'].map((tab) => (
                <TabsContent key={tab} value={tab}>
                  <Card className="shadow-lg border-t-4 border-[#4CAF50] bg-white">
                    <CardHeader>
                      <CardTitle className="text-2xl font-semibold text-[#333]">{tab.charAt(0).toUpperCase() + tab.slice(1)}</CardTitle>
                      <CardDescription className="text-[#555]">
                        {tab === 'documentation' && "Everything you need to get started and master PhysiCell"}
                        {tab === 'tutorials' && "Learn through hands-on examples"}
                        {tab === 'publications' && "Explore the scientific impact of PhysiCell"}
                        {tab === 'community' && "Connect with other researchers and developers"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#555] text-lg">
                        {tab === 'documentation' && "Our documentation covers installation, basic usage, advanced features, and API references, ensuring you have all the information at your fingertips."}
                        {tab === 'tutorials' && "From beginner to advanced, our tutorials guide you through real-world modeling scenarios, helping you apply PhysiCell to your research effectively."}
                        {tab === 'publications' && "Browse through peer-reviewed publications that have utilized PhysiCell in groundbreaking research across various fields of computational biology."}
                        {tab === 'community' && "Participate in forums, contribute to the project, and attend workshops and conferences. Be part of a thriving community pushing the boundaries of computational biology."}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-gradient-to-r from-[#4CAF50] to-[#45a049] text-white hover:from-[#45a049] hover:to-[#4CAF50] transition-all duration-300">
                        {tab === 'documentation' && "Explore Docs"}
                        {tab === 'tutorials' && "Start Learning"}
                        {tab === 'publications' && "View Publications"}
                        {tab === 'community' && "Get Involved"}
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section id="get-started" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#333]"
            >
              Get Started with PhysiCell
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-white to-[#E8F5E9] shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-[#333]">Download PhysiCell</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#555] text-lg mb-6">
                    Get the latest version of PhysiCell for your operating system and start modeling right away.
                  </p>
                  <Link href="https://github.com/MathCancer/PhysiCell/releases/download/1.14.0/PhysiCell_V.1.14.0.zip">
                    <Button className="bg-gradient-to-r from-[#4CAF50] to-[#45a049] text-white hover:from-[#45a049] hover:to-[#4CAF50] transition-all duration-300">
                      <Download className="mr-2 h-5 w-5" />
                      Download Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
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
                    <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
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