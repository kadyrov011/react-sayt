import './Info.scss'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Image from "../../../assets/img/img-post.png"
import Images1 from "../../../assets/img/Group512.svg"
import TimeImg from '../../../assets/img/time.png'


function Info() {
    let { userId } = useParams()
    let [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch(err => console.log(err))
    }, [userId])

    return (
        <>
            <div className="info">
                <div className='container info__container'>
                    <div className='info__left'>
                        <img src={Images1} alt="img" />
                    </div>
                    <div className='info__right'>
                        <p className='info__right-text'>User interface</p>
                        <h3 className="info__title">{posts.title}</h3>
                        <div className="info__right-box">
                            <p className="info__right-are">October 24, 2020 </p>
                            <img src={TimeImg} alt="img" srcset="" width="17px" height="17px"/>
                            <p className='info__right-are'>  3 minutes read</p>
                        </div>
                        <img className="info__big-img" src={Image} alt="img"  />
                        <p className='info__body'>{posts.body}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Info