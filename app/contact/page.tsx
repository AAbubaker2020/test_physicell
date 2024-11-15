'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Textarea from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Menu, X, Users, Grid } from 'lucide-react'

const socialButtonStyles = {
  facebook: 'bg-[#1877F2] hover:text-[#1877F2] border-[#1877F2]',
  twitter: 'bg-[#1DA1F2] hover:text-[#1DA1F2] border-[#1DA1F2]',
  github: 'bg-[#333333] hover:text-[#333333] border-[#333333]'
};

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['contact-form', 'join-community']
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
              <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
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
      <section id="contact-form" className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4CAF50]/10 to-[#2196F3]/10">
          <Grid className="w-full h-full text-[#4CAF50]/20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#4CAF50] to-[#2196F3]">
              Get in Touch
            </h1>
            <p className="text-xl text-[#333] max-w-2xl mx-auto">
              We&apos;re here to answer any questions you may have about PhysiCell. Reach out and we&apos;ll respond as soon as we can.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-[#333]">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input type="text" placeholder="Your Name" className="bg-white border-gray-300 text-[#333] placeholder-gray-500" />
                    <Input type="email" placeholder="Your Email" className="bg-white border-gray-300 text-[#333] placeholder-gray-500" />
                    <Textarea placeholder="Your Message" className="bg-white border-gray-300 text-[#333] placeholder-gray-500 h-32" />
                    <Button className="w-full bg-gradient-to-r from-[#4CAF50] to-[#2196F3] text-white hover:from-[#45a049] hover:to-[#1e88e5] transition-all duration-300">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-[#4CAF50] h-6 w-6" />
                    <div>
                      <h3 className="font-semibold text-[#333]">Address</h3>
                      <p className="text-[#555]">Luddy Hall (700 N. Woodlawn Ave) | Room: 3154, Bloomington, IN, USA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="text-[#2196F3] h-6 w-6" />
                    <div>
                      <h3 className="font-semibold text-[#333]">Phone</h3>
                      <p className="text-[#555]">+1 (812) 856-5754</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="text-[#4CAF50] h-6 w-6" />
                    <div>
                      <h3 className="font-semibold text-[#333]">Email</h3>
                      <p className="text-[#555]">Paul Macklin</p>
                      <a href="mailto:macklinp@iu.edu" className="text-[#2196F3] hover:underline">macklinp@iu.edu</a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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

    <footer className="bg-gradient-to-r from-[#4CAF50]/10 to-[#2196F3]/10 text-[#333] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image src="/logo.png" alt="PhysiCell Logo" width={32} height={32} className="mr-2" />
              <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#4CAF50] to-[#2196F3]">PhysiCell</h3>
            </div>
            <p className="text-[#555] text-base">
              Open source, agent-based modeling framework for 3-D multicellular simulations.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#333]">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Features', 'Documentation', 'Download', 'Contact'].map((item) => (
                <li key={item}>
                    <Link href={item === 'Features' ? '#' : item === 'Documentation' ? '#' :item === 'Download' ? '#' :item === 'Home' ? '/' :`/${item.toLowerCase()}`}>
                    <Button variant="link" className="text-[#555] hover:text-[#4CAF50] p-0 transition-colors duration-300">
                      {item}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#333]">Resources</h4>
            <ul className="space-y-2">
              {['Documentation', 'Tutorials', 'Publications', 'Community'].map((item) => (
                <li key={item}>
                  <Button variant="link" className="text-[#555] hover:text-[#2196F3] p-0 transition-colors duration-300">
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#333]">Stay Connected</h4>
            <p className="text-[#555] mb-4">Sign up for our newsletter for updates</p>
            <form className="flex flex-col space-y-2">
              <Input type="email" placeholder="Enter your email" className="bg-white/50 border-white/50 text-[#333] placeholder-gray-500" />
              <Button className="bg-gradient-to-r from-[#4CAF50] to-[#2196F3] text-white hover:from-[#45a049] hover:to-[#1e88e5] transition-all duration-300">
                Sign Up
              </Button>
            </form>
            <div className="flex space-x-4 mt-4">
              {[
                { name: 'Facebook', icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z', color: '#1877F2' },
                { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', color: '#1DA1F2' },
                { name: 'GitHub', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z', color: '#333' }
              ].map((social) => (
                <Button 
                  key={social.name} 
                  variant="outline" 
                  size="icon" 
                  className={`${socialButtonStyles[social.name.toLowerCase() as keyof typeof socialButtonStyles] || "bg-default"} text-white hover:bg-white transition-all duration-300`}
                  >
                  <span className="sr-only">{social.name}</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.icon} />
                  </svg>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-sm text-[#555]">
          <p>&copy; {new Date().getFullYear()} PhysiCell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
)
}