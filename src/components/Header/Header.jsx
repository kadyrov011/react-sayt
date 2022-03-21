import './Header.scss'
import Logo from '../../assets/img/logo-img.svg'
import FormImg from '../../assets/img/form-search.svg'
import { NavLink } from 'react-router-dom'
import MenuImg from '../../assets/img/icon.png'
import { useState } from 'react'

function Header() {
    let [open, setOpen] = useState(false);
 
    function handleClick(){setOpen(!open);}

    return (
        <header className='header'>
            <div className='header__container container'>
                <div className='header__left'>
                    <img src={Logo} alt="logo" srcset="" className='header__logo' />
                    <button className='header__close-btn'><img src={MenuImg} alt="menu" width="24px" height="14px" onClick={()=>handleClick() } /></button>
                </div>
                <nav className={ open ? "nav header__nav " :'nav-open'}>
                    <ul className='nav__list'>
                        <NavLink className={(x) => (x.isActive ? "nav__link-active" : 'nav__link')} to={'/'}>All</NavLink>
                        <NavLink className={(x) => (x.isActive ? "nav__link-active" : 'nav__link')} to={'/design'}>Design Theory</NavLink>
                        <NavLink className={(x) => (x.isActive ? "nav__link-active" : 'nav__link')} to={'/ux'}>UX</NavLink>
                        <NavLink className={(x) => (x.isActive ? "nav__link-active" : 'nav__link')} to={'/ui'}>UI</NavLink>
                        <NavLink className={(x) => (x.isActive ? "nav__link-active" : 'nav__link')} to={'/typography'}>Typography</NavLink>
                    </ul>
                </nav>
                <form className='form'>
                    <input type="search" name="search" placeholder='Search' className='form__search' />
                    <span className='form__img-span'> <img src={FormImg} alt="img" srcset="" className='form__img' /></span>
                </form>
            </div>
        </header>

    )
}
export default Header

// '