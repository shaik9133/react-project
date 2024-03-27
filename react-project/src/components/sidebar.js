import React from "react"
import Searchbar from "./searchbar"
function Sidebar() {
    return (
        <div className= "sidebarFlexing">
            <div>
            <Searchbar />
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
            </div>
            <div>
                <button className="search">search</button>
            </div>
        </div>
    )
}

export default Sidebar