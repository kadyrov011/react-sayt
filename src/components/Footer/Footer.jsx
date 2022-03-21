import './Footer.scss'
import FooterLogo from '../../assets/img/footerS.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className='footer__container container'>
                    <img src={FooterLogo} alt="imgfooter"  className='footer__img'/>
                    <div className='footer__left'>
                        <ul className='foote__ul'>
                            <li className='footer__list'><h5>FIGHT WITH ME ON:</h5></li>
                            <li className='footer__list'> <Link to={'/'} className="footer__link">Twitter</Link> </li>
                            <li className='footer__list'> <Link to={'/'} className="footer__link">Instagram</Link></li>
                            <li className='footer__list'> <Link to={'/'} className="footer__link">Telegram</Link></li>
                            <li className='footer__list'> <Link to={'/'} className="footer__link">YouTube</Link></li>
                            <li className='footer__list'> <Link to={'/'} className="footer__link">Figma</Link></li>
                        </ul>
                        <ul className='footer__ul'>
                            <li className='footer__list'><h5>WHAT I HAVE DONE:</h5></li>
                            <li className='footer__list'> <Link to={'/'} className="footer__link">Xalq Kutubxonasi</Link></li>
                            <li className='footer__list'> <Link to={'/'} className="footer__link">Websitee</Link></li>
                            <li className='footer__list'> <Link to={'/'} className="footer__link">Website</Link></li>
                            <li className='footer__list'> <Link to={'/'} className="footer__link">Play Market</Link></li>
                            <li className='footer__list'> <Link to={'/'} className="footer__link">App Store</Link></li>
                        </ul>
                        <ul className='footer__ul'>
                            <li className='footer__list'> <Link to={'/'} className="footer__link">Contact</Link></li>
                            <li className='footer__list'> <Link to={'/'} className="footer__link">Blog</Link></li>
                            <li className='footer__list'> <Link to={'/'} className="footer__link">Dribbble</Link></li>
                            <li className='footer__list'> <Link to={'/'} className="footer__link">Behance</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}