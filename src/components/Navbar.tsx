import { useNavigate } from 'react-router-dom';
import Logo from '../images/Bitcoin_logo.png';

const Navbar = () => {

    const nav = useNavigate();
    const updateNav = (url: String) => {
        nav('/' + url);
    };

    return (
        <div id='header'>
            <img src={Logo} id='logo' className='navButton' onClick={() => updateNav('')}></img>
            <p className='navButton' onClick={() => updateNav('chart')}> Chart</p>
        </div>
    );

};

export default Navbar;