import {FaFacebook, FaInstagram, FaTwitter, FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <nav className='w-100'>
            <h2 className='title text-2xl text-koderlim'>KODERX</h2>
            <div className='banner flex gap-6 px-14'>
                <Link to='/'><h4 className='text-white'>Home</h4></Link>
                <Link to='/skills'><h4 className='text-white'>Skills</h4></Link>
                <a target='_blank' href='https://www.linkedin.com/in/harold-casta%C3%B1o-816180216/'><h4 className='text-white'>Linkedin</h4></a>
                <Link to='/cv'><h4 className='text-white'>CV</h4></Link>
                <Link to='/proyects'><h4 className='text-white'>Proyects</h4></Link>
            </div>
            <div className='social flex cursor-pointer'>
                <a href="https://www.facebook.com/profile.php?id=100073088183904" target='_blank'><FaFacebook color='white' /></a>
                <a href="https://www.instagram.com/koder_alvarez/" target='_blank'><FaInstagram color='white'/></a>
                <a href="https://twitter.com/Haroldkoderx" target="_blank" rel="noopener noreferrer"><FaTwitter color='white'/></a>
                <a href="https://github.com/haroldCoder" target="_blank" rel="noopener noreferrer"><FaGithub color='white'/></a>
            </div>
        </nav>
    )
}
export default Navbar;