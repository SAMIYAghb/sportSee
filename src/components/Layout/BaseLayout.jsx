import { Outlet } from 'react-router-dom';
import '../../App.css'
import Navbar from './../Navbar/Navbar';
import Sidebar from './../Sidebar/Sidebar';

const BaseLayout = () => {
    return (
        <>
            <div className='container'>
                <Navbar />
                <Sidebar />
                    <main>
                        <Outlet />
                    </main>
            </div>
        </>
    )
}

export default BaseLayout
