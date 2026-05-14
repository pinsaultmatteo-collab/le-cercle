import { createContext, useCallback, useContext, useState } from 'react'
import MembershipModal from '../components/MembershipModal'

const ModalContext = createContext(null)

export function ModalProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [preselect, setPreselect] = useState('')

  const openModal = useCallback((formule = '') => {
    setPreselect(formule)
    setOpen(true)
  }, [])

  const closeModal = useCallback(() => setOpen(false), [])

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <MembershipModal open={open} onClose={closeModal} preselect={preselect} />
    </ModalContext.Provider>
  )
}

export function useModal() {
  const ctx = useContext(ModalContext)
  if (!ctx) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return ctx
}
