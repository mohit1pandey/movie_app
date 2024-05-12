import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import "./style.scss";

import useFetch from '../../../hooks/useFetch'
import ContantWrapper from '../../../components/contentWrapper/ContantWrapper/'
import CircleRating from "../../../components/lazyloadimage/circle/CircleRating";
import Genres from "../../../components/genres/Genres";
import Img from "../../../components/lazyloadimage/Img";
import PosterFallback from '../../../assets/no-poster.png'

import { PlayIcon } from "./PlayBtn";
import VideoPopup from "../../../components/videoPopup/VideoPopu";


const DetailsBanner = ({ video, crew }) => {

    const { mediaType, id } = useParams();

    const { data, loading } = useFetch(`/${mediaType}/${id}`)

    let { url } = useSelector(state => state.home);

    // popup state
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null)


    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };

    // get the genres id in _genres
    const _genres = data?.genres?.map((g) => g.id)

    // create two variables for crew and directors
    const director = crew?.filter((f) => f.job === "Director")
    const writer = crew?.filter((f) => f.job === "Screenplay" || f.job === "Stroy" || f.job === "Writer")


    return (
        <div className="detailsBanner">
            {!loading ? (

                <>
                    {/* convert data !data=false ; !!data=true */}
                    {!!data && (
                        <React.Fragment>

                            <div className="backdrop-img">
                                <Img src={url.backdrop + data?.backdrop_path} />
                            </div>
                            <div className="opacity-layer"></div>

                            <ContantWrapper>
                                <div className="content">
                                    <div className="left">
                                        {
                                            data.poster_path ?
                                                (
                                                    <Img className="posterImg"
                                                        src={url.backdrop + data.poster_path} />
                                                ) : (
                                                    <Img className="posterImg"
                                                        src={PosterFallback} />
                                                )
                                        }
                                    </div>
                                    <div className="right">
                                        <div className="title">
                                            {
                                                `${data.name || data.title}
                                             
                                            (${dayjs(data.release_Date).format('YYYY')})`
                                            }
                                        </div>
                                        <div className="subtitle">
                                            {data.tagline}
                                        </div>
                                        <Genres data={_genres} />

                                        <div className="row">
                                            <CircleRating rating={data.vote_average.toFixed(1)} />
                                            <div className="playbtn" onClick={()=>{
                                                
                                                setShow(true);
                                                setVideoId(video?.key)
                                            
                                            }}>
                                                <PlayIcon />
                                                
                                               <span className="text">
                                               Watch Trailer
                                               </span>
                                            </div>
                                        </div>
                                        <div className="overview">
                                            <div className="heading">
                                                Overview
                                            </div>
                                            <div className="discription">
                                                {data.overview}
                                            </div>
                                        </div>
                                        <div className="info">
                                            {
                                                data.status && (
                                                    <div className="infoItem">
                                                        <span className="text bold">
                                                            Status:{" "}
                                                        </span>
                                                        <span className="text">
                                                            {data.status}
                                                        </span>
                                                    </div>
                                                )

                                            }
                                            {
                                                data.release_date && (
                                                    <div className="infoItem">
                                                        <span className="text bold">
                                                            Release Date :{" "}
                                                        </span>
                                                        <span className="text">
                                                            {dayjs(data.release_date).format("MMM D, YYYY")}
                                                        </span>
                                                    </div>
                                                )

                                            }

                                            {
                                                data.runtime && (
                                                    <div className="infoItem">
                                                        <span className="text bold">
                                                            Runtime :{" "}
                                                        </span>
                                                        <span className="text">
                                                            {toHoursAndMinutes(data.runtime)}
                                                        </span>
                                                    </div>
                                                )

                                            }
                                        </div>
                                        {/* directors section */}

                                        {
                                            director?.length > 0 && (
                                                <div className="info">
                                                    <span className="text bold">
                                                        Director:{" "}
                                                    </span>
                                                    <span className="text">
                                                        {
                                                            director.map((d, i) => {
                                                                // print director's length if add " , " in case of multiple dir
                                                                return <span key={i}>{d.name}{director.length - 1 !== i && ", "}</span>
                                                            })
                                                        }
                                                    </span>
                                                </div>
                                            )
                                        }
                                        {/* writer section */}

                                        {
                                            writer?.length > 0 && (
                                                <div className="info">
                                                    <span className="text bold">
                                                        Writer:{" "}
                                                    </span>
                                                    <span className="text">                                                   {
                                                        writer.map((d, i) => {
                                                            // print director's length if add " , " in case of multiple dir
                                                            return <span key={i}>{d.name}{writer.length - 1 !== i && ", "}</span>
                                                        })
                                                    }
                                                    </span>

                                                </div>
                                            )
                                        }
                                    </div>
                                </div>

                                {/* tailler popup */}
                                <VideoPopup
                                
                                show={show}
                                setShow={setShow}
                                videoId={videoId}
                                setVideoId={setVideoId}

                                />
                            </ContantWrapper>


                        </React.Fragment>

                    )

                    }

                </>
            ) : (
                <div className="detailsBannerSkeleton">
                    <ContantWrapper>
                        <div className="left skeleton"></div>
                        <div className="right">
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                        </div>
                    </ContantWrapper>
                </div>
            )}
        </div>
    );
};

export default DetailsBanner;