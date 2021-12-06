import React from 'react';
import './Youtube.css';



const YoutubeFetch = ({ video }) => {
    const videoID = video.contentDetails.videoId;
    return (
        <div className="VideoContainerAll ">
            <div
                className="VideoContainer ">
                <iframe style={{
                    margin:"20px",
                }}
                    title='batata'
                    className="VideoFrame"
                    src={'https://www.youtube.com/embed/RSuud7HP18w'}
                    frameborder='0'
                    allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen
                ></iframe>
                <iframe style={{
                    margin:"20px",
                }}
                    title='batata'
                    className="VideoFrame"
                    src={'https://www.youtube.com/embed/RSuud7HP18w'}
                    frameBorder='0'
                    allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                ></iframe>
                <iframe style={{
                    margin:"20px",
                }}
                    title='batata'
                    className="VideoFrame"
                    src={'https://www.youtube.com/embed/RSuud7HP18w'}
                    frameBorder='0'
                    allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                ></iframe>
                
            </div>
        </div>
    );
};
export default YoutubeFetch;