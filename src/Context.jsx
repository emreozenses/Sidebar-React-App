import { createContext, useContext, useState } from "react";


const GlobalContext = createContext();

export const useGlobalContext =()=> useContext(GlobalContext);

const AppContext =({children})=>{
    const [isSidebarOpen,setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false)

    const OpenModal =()=>setIsModalOpen(true);
    const CloseModal =()=>setIsModalOpen(false);
    const OpenSidebar =()=>setIsSidebarOpen(true);
    const CloseSidebar = ()=>setIsSidebarOpen(false);
    return(
        <GlobalContext.Provider value={{isModalOpen,isSidebarOpen,setIsModalOpen,setIsSidebarOpen,OpenModal,OpenSidebar,CloseModal,CloseSidebar}}>
            {children}
        </GlobalContext.Provider>
    )

}
export default AppContext;