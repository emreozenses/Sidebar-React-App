import React from 'react'
import Sidebar from './Sidebar'
import Modal from './Modal'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './Context'


const Home = () => {
    const { name } = useGlobalContext();
  return (
    <section>
        <button type='button'><FaBars/>{name}</button>
        <Sidebar/>
        <Modal/>
        <button type='button' className='btn'>Show Modal</button>
    </section>
  )
}

export default Home