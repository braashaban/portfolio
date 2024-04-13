import './Footer.css'

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { FaPinterest } from 'react-icons/fa'


const Footer = () => {
    return (
   
            
  <footer>
    <div class="main-footer">
      <div class="foot">
        <h1>Braa Shaban</h1>
        <a href="#" >
          <p>Front end developer</p>
        </a>
      </div>
      <div class="foot">
          <h2 className='mb-2  text-xl'>Follow Me in</h2>
        <div class="icons">

          <div class="social-media">
          <a href="https://www.facebook.com/shaban.braa.7?mibextid=ZbWKwL"> <FaFacebook /> </a>
          </div>
          <div class="social-media">
          <a href="https://www.instagram.com/braashaban?igsh=NmhvYzBuYmltMzFt"> <FaInstagram /> </a>
          </div>
          <div class="social-media">
          <a href="https://www.linkedin.com/in/braa-shaban-7a6784288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <FaLinkedin /> </a>
          </div>
          <div class="social-media">
          <a href="https://github.com/braashaban"> <FaGithub /> </a>
          </div>
          <div class="social-media">
          <a href="https://in.pinterest.com/braashaban101/"> <FaPinterest /> </a>
          </div>
        </div>
      </div>


      <div class="foot">
      <h2 className=' mb-2  text-xl font-bold' >Contact Us:</h2>
    <a href="#"><span className='mt-3 mb-2  text-xl'>braashaban101@gmail.com</span></a>    
      </div>
    </div>
 
          
        <hr className='mt-10' />
        <p className='text-center mt-6 text-white'>© 2024 by Braa Shaban. All rights reserved.</p>
        </footer>
    )
}

export default Footer

/*   <div className="main-footer text-white  grid lg:grid-cols-3  md:grid-cols-1 gap-5 lg:text-start sm:text-center md:text-start">

                <div className='coloum-1 w-50'>
                    <span className='  text-start text-xl font-bold  mt-2
                     bg-gradient-to-r from-yellow-00 via-black-500 to-crimson-500 inline-block text-white bg-clip-text'>
                        Braa Sh</span>
                    <p className='text-white text-xl mt-2'>Front end developer</p>
                    <div className="icon-footer2 mt-4 text-3xl">
                        <a href="https://www.facebook.com/shaban.braa.7?mibextid=ZbWKwL"> <FaFacebook /> </a>
                        <a href="https://www.instagram.com/braashaban?igsh=NmhvYzBuYmltMzFt"> <FaInstagram /> </a>
                        <a href="https://www.linkedin.com/in/braa-shaban-7a6784288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <FaLinkedin /> </a>
                        <a href="https://github.com/braashaban"> <FaGithub /> </a>
                        <a href="https://in.pinterest.com/braashaban101/"> <FaPinterest /> </a>
                    </div>

                </div>

                <div className="links-footer coloum-2 w-48">
                    <ul>
                        <li className='mb-2'> <Link>Skills</Link></li>
                        <li className='mb-2'> <Link>About </Link></li>
                        <li className='mb-2'> <Link>portfolio</Link></li>
                        <li className='mb-2'> <Link>Certificates</Link></li>
                        <li className='mb-2'>  <Link>contact us</Link></li>
                    </ul>




                </div>
                <div className="icon-footer coloum-3 w-48">
                    <h2 className='text-black mb-2  text-xl' >Contact Us:</h2>
                <a href="#"><span className='mt-3 mb-2  text-xl'>braashaban101@gmail.com</span></a>    

                </div>
            </div> */