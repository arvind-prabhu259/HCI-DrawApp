import { Outlet, Link } from "react-router-dom";
import React, {useState} from 'react'
import "./../styles/layoutStyle.css"
const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>  
        <div className="header">
            <div className="container">
                <button className="navButton" onClick={() => setIsOpen(!isOpen)}>Nav</button>
                <h2 className="PageTitle">DrawApp</h2>
                <button className="navButton" >Settings</button>
                <button className="navButton" >Profile</button>
            </div>
        </div>
        {isOpen && (
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        
                        <li><Link to="/about">About</Link></li>
                        
                        <li><Link to="/contact">Contact</Link></li>

                        <li><Link to="/lessonSelect">Select Lesson</Link></li>
                    </ul>
                    
                </nav>
        
            </div>
        )}
        <Outlet /> 
      </>
    );
};

export default Layout;