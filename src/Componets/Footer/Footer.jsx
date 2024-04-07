import './Footer.css'
import footer from "../../assets/imgs/footer.png"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { FaPinterest } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='footer' >
            <img src={footer} alt="" />
            <div className="main-footer text-white ">

                <div>
                    <span className='text-white text-3xl font-bold decoration-slate-300 mt-2'>
                        Braa <span style={{ color: "#240f39" }}>Sh</span></span>
                    <p className='text-white text-xl mt-2'>Front end developer</p></div>

                <div className="icon-footer">
                    <span className='mt-3 mb-2  text-2xl'>braashaban101@gmail.com</span>
                    <div className="icon-footer2 mt-4 text-3xl">
                        <a href="https://www.facebook.com/shaban.braa.7?mibextid=ZbWKwL"> <FaFacebook /> </a>
                        <a href="https://www.instagram.com/braashaban?igsh=NmhvYzBuYmltMzFt"> <FaInstagram /> </a>
                        <a href="https://www.linkedin.com/in/braa-shaban-7a6784288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <FaLinkedin /> </a>
                        <a href="https://github.com/braashaban"> <FaGithub /> </a>
                        <a href="https://in.pinterest.com/braashaban101/"> <FaPinterest /> </a>
                    </div>


                </div>
            </div>
{/* 
            <div className="links-footer">
    <a href="">Home</a>
    <a href="">portfolio</a>
    <a href="">skills</a>
    <a href="">certifues</a>
    <a href="">servicess</a>
          </div> */}
        </footer>
    )
}

export default Footer