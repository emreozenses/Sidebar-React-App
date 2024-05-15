import React from 'react'
import { useGlobalContext } from './Context'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { links,social } from './data'

const Sidebar = () => {
      const {
      isModalOpen,
      isSidebarOpen,
      setIsModalOpen,
      setIsSidebarOpen,
      OpenModal,
      OpenSidebar,
      CloseModal,
      CloseSidebar,
    } = useGlobalContext();
  return (
    <div 
    className={isSidebarOpen ? "sidebar show-sidebar":"sidebar"}
    >
      <div className='sidebar-header'>
        <img src={logo} alt='logo' className='logo'/>
        <button type='button' className='close-btn'onClick={CloseSidebar}><FaTimes/></button>
      </div>
      <ul className='links'>
        {links.map((link)=>{
          const {id,url,text,icon} = link;
        return (
          <li key={id}>
            <a href={url}>
              <span className='svg'>{icon}</span>
              {text}
            </a>
          </li>
        )
        })}
      </ul>
      <footer className='social-links'>
        {social.map((slink)=>{
          const{id,url,icon} = slink;
          return <a key={id} href={url}>{icon}</a>
        })}
      </footer>
    </div>
  )
}

export default Sidebar