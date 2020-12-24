import React from 'react'
import NuevoProyecto from '../proyectos/NuevoProyecto'

const SideBar = ()=> 
{
    return(
        <aside>
            <h1>MERN<span>Tasks</span></h1>
            <NuevoProyecto/>
            <div className="proyectos">
                
            </div>
        </aside>
    )
}

export default SideBar