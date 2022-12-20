import {FaFacebook, FaInstagram, FaTwitter, FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <nav className='w-100'>
            <h2 className='title text-2xl text-transparent text-koderlim'>KODERX</h2>
            <div className='banner flex gap-6 px-14'>
                <Link to='/'><h4 className='text-white'>Home</h4></Link>
                <Link to='/skills'><h4 className='text-white'>Skills</h4></Link>
                <a target='_blank' href='https://www.linkedin.com/in/harold-casta%C3%B1o-816180216/'><h4 className='text-white'>Linkedin</h4></a>
                <Link to='/cv'><h4 className='text-white'>CV</h4></Link>
            </div>
            <div className='social flex'>
                <FaFacebook color='white'/>
                <FaInstagram color='white'/>
                <FaTwitter color='white'/>
                <FaGithub color='white'/>
            </div>
        </nav>
    )
}
export default Navbar;