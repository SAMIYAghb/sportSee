import { Outlet, useNavigate, useParams } from 'react-router-dom';
import '../../App.css'
import Navbar from './../Navbar/Navbar';
import Sidebar from './../Sidebar/Sidebar';
import { useEffect, useState } from 'react';

const BaseLayout = () => {
    const { id: urlUserId } = useParams(); // Get userId from the URL params
    const [userId, setUserId] = useState(Number(urlUserId) || 12); // Default to 12 if no valid userId
    const navigate = useNavigate();

    // const [userId, setUserId] = useState(12); // Default userId
    useEffect(() => {
        // Only perform validation if urlUserId is present
        if (urlUserId) {
            const numericId = Number(urlUserId);

            // If userId is not valid
            if (isNaN(numericId) || ![12, 18].includes(numericId)) {
                navigate('/error'); // Redirect to the error page if invalid
            } else {
                setUserId(numericId); // Update the userId if it's valid
            }
        }
    }, [urlUserId, navigate]);

    return (
        <>
            <div className='container'>
                <Navbar />
                <Sidebar  onToggle={setUserId}/>{/* Sidebar ou ToggleBtn met à jour userId */}
                    <main>
                        <Outlet context={{ userId }}/>{/* Fournit userId au contexte d'Outlet */}
                    </main>
            </div>
        </>
    )
}

export default BaseLayout
 