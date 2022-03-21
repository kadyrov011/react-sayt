import './Posts.scss'


import Strelka2 from '../../../assets/img/strelka.png'
import Strelka from '../../../assets/img/strelka2.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Timeimg from '../../../assets/img/time.png'

const renderData = (users) => {
    return (
        <ul className="slogan-lists">
            {
                users.map((user) => (
                    <li  className='posts__li' key={user.id} user={user}>
                        <div className='posts__lists-box'>
                            <p className="posts__list-text">September 24.2020</p>
                            <p className="posts__list-text">User Interface</p>
                        </div>

                        <div className="posts__cap">
                            <Link className="posts__link" to={`/info/${user.id}`} >{user.title}</Link>
                        </div>
                        <p className='posts__inform'> <img src={Timeimg} alt="img" />  3 minutes read</p>
                        <hr  className='posts__line' />
                    </li>
                ))
            }
        </ul>
    )
}

function Posts() {
    const [users, setUsers] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [itemsPage, setitemsPage] = useState(10)
    const [pageNumberLimit, setpageNumberLimit] = useState(5)
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5)
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0)

    const handleClick = (event) => {
        setcurrentPage(Number(event.target.id))
    }

    const pages = [];

    for (let i = 1; i <= Math.ceil(users.length / itemsPage); i++) {
        pages.push(i)
    }

    const indexOfLastItem = currentPage * itemsPage;
    const indexOfFirstItem = indexOfLastItem - itemsPage;
    const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

    const renderPagesNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li key={number} id={number} onClick={handleClick} className={currentPage == number ? "active" : null}>
                    {number}
                </li>
            )
        } else {
            return null;
        }
    })

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setUsers(data))
    }, [])

    const handleNextBtn = () => {
        setcurrentPage(currentPage + 1);
        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    }

    const handlePrevBtn = () => {
        setcurrentPage(currentPage - 1);
        if ((currentPage - 1) % pageNumberLimit == 0) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    }

    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextBtn}></li>
    }
    let pageDecrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageDecrementBtn = <li onClick={handlePrevBtn}> </li>
    }



    return (
        <>
            <div className="posts">
                <h3 className="posts__title">Recent Posts</h3>
                {renderData(currentItems)}
                <ul className="posts__btn-slider">
                    <li className='posts__slider'>
                        <button onClick={handlePrevBtn} disabled={currentPage == pages[0] ? true : false}>
                            <img src={Strelka} alt="" srcset="" width="32px"
                                height="32px"  />
                        </button>
                    </li>
                    {pageDecrementBtn}
                    {renderPagesNumbers}
                    {pageIncrementBtn}
                    <li className='posts__slider-2'>
                        <button onClick={handleNextBtn} disabled={currentPage == pages[pages.length - 1] ? true : false}>
                            <img src={Strelka2} alt="" srcset="" width="32px"
                            height="32px" className='posts__btn-transform' />
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}


export default Posts;