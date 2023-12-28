import "./Root.css"

import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"



function Root() {
    return (
        <div className="rootBack">
            <Header/>
            <Outlet/>
          
        </div>
    );
}

export default Root;