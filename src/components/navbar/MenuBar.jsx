// import Link from 'next/link';

import { Button, Navbar } from 'flowbite-react';

import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
const MenuBar = () => {
    return (
        <div className='wrapper'>

            <Navbar fluid rounded className='p-0 py-8'>
                <Navbar.Brand href="/">
                    <img src={logo} className="mr-3 w-[130px] md:w-[160px]" alt="Flowbite React Logo" />
                    {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span> */}
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button className='bg-[#9CC020] my-btn duration-200'><Link to='/login'>Login</Link></Button>
                    <Navbar.Toggle className='p-0 ml-3' />
                </div>
                <Navbar.Collapse className='my-menu'>
                    <Navbar.Link active className={`md:text-base text-sm lg:text-left text-right`}>
                        <NavLink to={'/'}>Home</NavLink>
                    </Navbar.Link >
                    <Navbar.Link className={`md:text-base text-sm lg:text-left text-right`} href="#">
                        <NavLink to='/add-food'>Add Food</NavLink>
                    </Navbar.Link>
                    <Navbar.Link className={`md:text-base text-sm lg:text-left text-right`} href="#">
                        <NavLink to='/manage-food'>Manage My Foods</NavLink>
                    </Navbar.Link>
                    <Navbar.Link className={`md:text-base text-sm lg:text-left text-right`} href="/available-food">
                        <NavLink to='/available-food'>Available Foods</NavLink>
                    </Navbar.Link>
                    <Navbar.Link className={`md:text-base text-sm lg:text-left text-right`} href="#">
                        <NavLink to='/my-food-request'>My Food Request</NavLink>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default MenuBar;