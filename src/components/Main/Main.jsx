import './Main.scss'
import { Link } from "react-router-dom"
import Github from '../../assets/img/github.svg'
import Facebook from "../../assets/img/facebook.svg"
import Twitter from "../../assets/img/twitter.svg"
import Instagram from "../../assets/img/instagram.svg"
import Strelka from '../../assets/img/strelka.png'
import Posts from './Posts/Posts'



function Main() {
    return(
        <div className='main'>
            <div className='main__container container'>
                <div className='main__left'>
                    <h2 className="main__title">What I do!</h2>
                    <p className="main__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.</p>
                    <Link className="main__link" to={'/'} >EXPLORE ME <img src={Strelka} alt="" srcset="" className='main__strelka' /> </Link>
                    <div className="main__img">
                        <img className="main__image" src={Facebook} alt="icons" />
                        <img className="main__image" src={Github} alt="icons" />
                        <img className="main__image" src={Twitter} alt="icons" />
                        <img className="main__image" src={Instagram} alt="icons" />
                    </div>
                </div>
                <div className='main__right'>
                    <Posts/>
                </div>
            </div>
        </div>
    )
}
export default Main