// import Link from 'next/link';
import { Button, Navbar } from 'flowbite-react';
import logo from '../../assets/logo.png'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../auth provider/AuthProvider';
import Swal from 'sweetalert2';
import { Tooltip } from 'flowbite-react';


const MenuBar = () => {
    const { user, loading, logOut } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);

    // if(location.pathname === '/login' || location.pathname === '/sign-up'){
    //     return;
    // }

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'Success!',
                    'You have logged out successfully',
                    'success'
                )
                navigate('/login')
            })
            .catch(error => {
                Swal.fire(
                    'Error!',
                    `${error.message}`,
                    'error'
                )
            })
    }

    return (
        <div className='wrapper'>


            <Navbar fluid rounded className='p-0 py-6 md:py-8'>
                <Navbar.Brand href="/">
                    <img src={logo} className="mr-3 w-[120px] md:w-[160px]" alt="Flowbite React Logo" />
                    {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span> */}
                </Navbar.Brand>
                {user ? <div className="flex md:order-2">
                    <div className='flex gap-2 items-center'>
                        <Tooltip content={user.displayName} placement="bottom">
                            <div className='border p-1 py-[2px] pb-[3px] rounded-md'>
                                <img className='w-9 h-9 rounded-full' src={user.photoURL} alt="" />
                            </div>
                        </Tooltip>
                        < Button onClick={handleLogOut} className='bg-[#9CC020] my-btn duration-200'><Link>{loading ? 'Loading...' : 'Log Out'}</Link></Button>
                    </div>
                    <Navbar.Toggle className='p-0 ml-3' />
                </div>
                    : <div className="flex md:order-2">
                        <Button className='bg-[#9CC020] my-btn duration-200'><Link to='/login'>{loading ? 'Loading...' : 'Login'}</Link></Button>
                        <Navbar.Toggle className='p-0 ml-3' />
                    </div>

                }


                <Navbar.Collapse className='my-menu'>
                    <Navbar.Link active className={`md:text-base text-sm lg:text-left text-right`}>
                        <NavLink className='anchor' to={'/'}>Home</NavLink>
                    </Navbar.Link >
                    <Navbar.Link className={`md:text-base text-sm lg:text-left text-right`} href="#">
                        <NavLink className='anchor' to='/add-food'>Add Food</NavLink>
                    </Navbar.Link>
                    <Navbar.Link className={`md:text-base text-sm lg:text-left text-right`} href="#">
                        <NavLink className='anchor' to='/manage-food'>Manage My Foods</NavLink>
                    </Navbar.Link>
                    <Navbar.Link className={`md:text-base text-sm lg:text-left text-right`} href="/available-food">
                        <NavLink className='anchor' to='/available-food'>Available Foods</NavLink>
                    </Navbar.Link>
                    <Navbar.Link className={`md:text-base text-sm lg:text-left text-right`} href="#">
                        <NavLink className='anchor' to='/my-food-request'>My Food Request</NavLink>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar >

        </div >
    );
};

export default MenuBar;