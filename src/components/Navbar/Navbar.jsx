import { NavLink, useParams } from 'react-router-dom';
import logo from '../../assets/Group.png';
import style from './Navbar.module.css';

const Navbar = () => {
    const { id }= useParams();
    // console.log(id)
    return (
        <header>
            <img src={logo} alt="" className={style.logo} />
            <span>SportSee</span>
            <nav>
                <ul>
                    <li>
                        <NavLink to={`/user/${id}`}>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to='/profil'>Profil</NavLink>
                    </li>
                    <li>
                        <NavLink to='/setting'>Réglages</NavLink>
                    </li>
                    <li>
                        <NavLink to='/community'>Communauté</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
