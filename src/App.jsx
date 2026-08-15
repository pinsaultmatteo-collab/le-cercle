import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import DebugPanel from './components/DebugPanel'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ScrollToTop } from './components/PageWrapper'
import { ModalProvider } from './context/ModalContext'

import Home from './pages/Home'
import Concept from './pages/Concept'
import Services from './pages/Services'
import Offres from './pages/Offres'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import MentionsLegales from './pages/MentionsLegales'
import Confidentialite from './pages/Confidentialite'
import Cgu from './pages/Cgu'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()

  return (
    <ModalProvider>
      <div className="grain relative min-h-screen bg-bg-primary">
        <ScrollToTop />

        {/*
          Masque de débord iOS Safari.
          La zone web commence sous la barre d'état, mais Safari y laisse
          déborder la couche de défilement : le contenu défile donc en
          apparence au-dessus du header. La couche des éléments `fixed`
          étant découpée à la zone web, aucun style sur le header ne peut
          peindre là — seul un élément de la couche de défilement le peut.
          D'où ce `sticky`, dont la hauteur est annulée par une marge
          négative pour ne décaler aucune mise en page.
        */}
        <div
          data-bleed-mask
          aria-hidden="true"
          className="sticky top-[-90px] z-[500] -mb-[90px] h-[90px] bg-bg-primary"
        />

        <Navbar />
        {typeof window !== 'undefined' &&
          window.location.search.includes('debug') && <DebugPanel />}

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/concept" element={<Concept />} />
            <Route path="/services" element={<Services />} />
            <Route path="/offres" element={<Offres />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/confidentialite" element={<Confidentialite />} />
            <Route path="/cgu" element={<Cgu />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>

        <Footer />
      </div>
    </ModalProvider>
  )
}
