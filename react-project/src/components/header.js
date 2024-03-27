import React from 'react';
import Searchbar from './searchbar';
import Sidebar from './sidebar';
import File from './file';
function Header() {
    return (
        <div  class='header'>
         <File />
         <Sidebar />
        </div>
    )
}

export default Header 