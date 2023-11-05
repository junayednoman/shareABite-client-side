// import Link from 'next/link';
import { Button, Navbar } from 'flowbite-react';
import logo from '../../assets/logo.png'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../auth provider/AuthProvider';
const MenuBar = () => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);

    // if(location.pathname === '/login' || location.pathname === '/sign-up'){
    //     return;
    // }

    return (
        <div className='wrapper'>

            <Navbar fluid rounded className='p-0 py-8'>
                <Navbar.Brand href="/">
                    <img src={logo} className="mr-3 w-[130px] md:w-[160px]" alt="Flowbite React Logo" />
                    {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span> */}
                </Navbar.Brand>
                {user ? <div className="flex md:order-2">
                    < Button className='bg-[#9CC020] my-btn duration-200'><Link to='/login'>{loading ? 'Loading...': 'Log Out'}</Link></Button>
                    <Navbar.Toggle className='p-0 ml-3' />
                </div>
                    : <div className="flex md:order-2">
                        <Button className='bg-[#9CC020] my-btn duration-200'><Link to='/login'>{loading ? 'Loading...': 'Login'}</Link></Button>
                        <Navbar.Toggle className='p-0 ml-3' />
                    </div>

                }


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
            </Navbar >

        </div >
    );
};

export default MenuBar;