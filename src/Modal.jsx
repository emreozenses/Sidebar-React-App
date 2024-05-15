import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context'

const Modal = () => {
  const {
      isModalOpen,
      isSidebarOpen,
      setIsModalOpen,
      setIsSidebarOpen,
      OpenModal,
      OpenSidebar,
      CloseModal,
      CloseSidebar,
    } = useGlobalContext()
  return (
    <div className="modal-overlay">
      <div className={isModalOpen?"modal-container show-modal":"modal-container"}>
        <p>Modal Content</p>
        <button 
        type="button" 
        className="close-modal-btn"
        onClick={CloseModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal