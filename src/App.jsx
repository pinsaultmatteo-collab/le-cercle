import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ScrollToTop } from './components/PageWrapper'
import { ModalProvider } from './context/ModalContext'

import Home from './pages/Home'
import Concept from './pages/Concept'
import Services from './pages/Services'
import Offres from './pages/Offres'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()

  return (
    <ModalProvider>
      <div className="grain relative min-h-screen bg-bg-primary">
        <ScrollToTop />
        <Navbar />

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/concept" element={<Concept />} />
            <Route path="/services" element={<Services />} />
            <Route path="/offres" element={<Offres />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>

        <Footer />
      </div>
    </ModalProvider>
  )
}
