import React, { useEffect } from 'react'
import './style.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import { useSelector } from 'react-redux'
import Img from '../../../components/lazyloadimage/Img'
import ContantWrapper from '../../../components/contentWrapper/ContantWrapper'

const HeroBanner = () => {

    const [background, setBackground] = useState('');
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home)

    const { data, loading } = useFetch('/movie/upcoming');

    useEffect(() => {

        let bg = url?.backdrop + data?.results[Math.floor(Math.random() * 19) + 1]?.backdrop_path;

        setBackground(bg);


    }, [data])


    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`)
        }
    }


    return (
        <div className="heroBanner">
            {
                // if no loading so show image
                !loading && <div className="backdrop-img">
                    <Img src={background} />
                </div>
            }
            <ContantWrapper>

                <div className='optacity-layer'>
                    {/* this div is only for blur effect */}
                </div>
                    <div className="heroBannerContent">
                        <span className="title">Welcome</span>
                        <span className="subTitle">
                            Millions of movies, Tv shows and people to discover.
                            Explore Now
                        </span>
                        <div className="searchInput">
                            <input type="text" placeholder='Serarch for a movie or a tv show....'

                                onChange={(e) => setQuery(e.target.value)}

                                onKeyUp={searchQueryHandler}
                            />
                        <button >Search</button>
                        </div>
                    </div>
                

            </ContantWrapper>
        </div>
    )
}

export default HeroBanner