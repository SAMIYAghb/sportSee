import { Outlet } from 'react-router-dom';
import '../../App.css'
import Navbar from './../Navbar/Navbar';
import Sidebar from './../Sidebar/Sidebar';
import { useState } from 'react';

const BaseLayout = () => {
    const [userId, setUserId] = useState(12); // Default userId
    return (
        <>
            <div className='container'>
                <Navbar />
                <Sidebar  onToggle={setUserId}/>
                    <main>
                        <Outlet context={{ userId }}/>
                    </main>
            </div>
        </>
    )
}

export default BaseLayout
 