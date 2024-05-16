import React from 'react'
import Sidebar from './Sidebar'
import Modal from './Modal'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './Context'


const Home = () => {
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
    <main className="home">
      <button className='sidebar-toggle' type="button" onClick={OpenSidebar}>
        <FaBars />
      </button>
       <button
        type="button"
        className="btn"
        onClick={OpenModal}
      >
        Show Modal
      </button>
    </main>
  )
}

export default Home