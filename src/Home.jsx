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
    <section className="home">
      <button className='sidebar-toggle' type="button" onClick={isSidebarOpen ? CloseSidebar : OpenSidebar}>
        <FaBars />
      </button>
      <Sidebar/>
      {isModalOpen && <Modal/>}
      <button
        type="button"
        className="btn"
        onClick={!isModalOpen && OpenModal}
      >
        Show Modal
      </button>
    </section>
  )
}

export default Home