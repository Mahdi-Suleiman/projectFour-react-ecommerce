import React from 'react';
import YoutubeFetch from './youtubeFetch'

class Youtube extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            videos: [],
        };
    }

    async componentDidMount() {
        const url = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=1&playlistId=PL3WCgw5_iBX6zBNibX3c9GOB9WTL_qQf9&key=AIzaSyB67B_szVr6uSIUounQ8IR2xsErKFv1pBU';

        const response = await fetch(url);
        const data = await response.json();
        this.setState({ videos: data.items });
    }
    render() {
        const { videos } = this.state;
        const renderedVideos = videos.map((video, index) => {
            return <YoutubeFetch key={video.id} video={video} />;
        });
        return (
            <div className='YouTubeFullDiv'>

                <div className="six">
                    <h1>Our products
                        <span>Let's see some products</span>
                    </h1>
                </div>
               
                <div className='YouAPI'>{renderedVideos}</div>

            </div>
        );
    }
}
export default Youtube;