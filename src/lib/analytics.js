/**
 * Helpers GA4 — centralise l'envoi des événements personnalisés.
 * gtag() est défini globalement dans index.html.
 */

function track(eventName, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}

// Intention — ouverture de la popup "Rejoindre Le Cercle"
export const trackPopupOpen = (source = '') =>
  track('popup_open', { source })

// Prospect confirmé — soumission de la demande via la popup
export const trackPopupSubmit = (service = '') =>
  track('popup_submit', { service })

// Intention — affichage de la page Contact
export const trackContactView = () => track('contact_view')

// Prospect confirmé — soumission du formulaire page Contact
export const trackContactSubmit = (service = '') =>
  track('contact_submit', { service })
