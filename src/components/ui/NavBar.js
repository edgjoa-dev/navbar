import React, { useEffect, useState } from 'react'
import { Link } from "react-scroll";
import { BiMenuAltRight } from 'react-icons/bi';
import 'animate.css';
import '../../Styles/components/ui/navbarStyle.scss';


export const NavBar = () => {

    const [ToggleMenu, setToggleMenu] = useState(false);
    const [ScreenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!ToggleMenu);
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth( window.innerWidth );
        }

            window.addEventListener( 'resize', changeWidth );

        return () =>{
            window.removeEventListener( 'resize', changeWidth );
        }

    }, []);

    return (
        <div>
            <nav>

            { (ToggleMenu || ScreenWidth > 680 ) && (

                <div className='nav__links  animate__animated animate__fadeInLeftBig' >

                    <Link
                        className='item'
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        onClick={()=>setToggleMenu(false)}
                    >
                    Home
                    </Link>

                    <Link
                        className='item'
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        onClick={()=>setToggleMenu(false)}
                    >
                            About
                    </Link>

                    <Link
                        className='item'
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        onClick={()=>setToggleMenu(false)}
                    >
                            Projects
                    </Link>

                    <Link
                        className='item'
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        onClick={()=>setToggleMenu(false)}
                    >
                            Contact
                    </Link>

                </div>
                )}
            </nav>

                <button className='btn' onClick={toggleNav}> <BiMenuAltRight /></button>

        </div>
    )
}
