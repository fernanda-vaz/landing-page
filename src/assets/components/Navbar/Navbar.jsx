import { Link } from "react-scroll"
import './Navbar.css'
import { useEffect, useState } from "react"
import MenuIcon from '../../icons/menu-mobile.svg'
import Logo from '../../icons/logo.svg'

export const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setSticky (true) : setSticky (false);
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <Link to="home" smooth={true} offset={-10} duration={700}><img className="logo" src={Logo} alt="" /></Link>
        <ul className={mobileMenu? '':'hide-mobile-menu'}>
            <li><Link to="home" smooth={true} offset={-10} duration={700}>Home</Link></li>
            <li><Link to="product" smooth={true} offset={0} duration={700}>Product</Link></li>
            <li><Link to="about" smooth={true} offset={0} duration={700}>About</Link></li>
            <li><Link to="contact" smooth={true} offset={0} duration={700}>Contact</Link></li>
            <li><Link to="home" smooth={true} offset={0} duration={700}><button className="login-btn">Login</button></Link></li>
        </ul>
        <img src={MenuIcon} alt="" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  )
}
