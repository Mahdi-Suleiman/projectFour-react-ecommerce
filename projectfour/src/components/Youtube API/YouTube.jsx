import React from "react";
import './youtube.css'
const API = "AIzaSyA5aEZ23T4Sk9SslAO2-yLNhLR-4ft0bQ0";
const channelId = "UChVhSgRKnAvCZgUL8wIFIkQ";
const maxResults = 10;
const finalUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`;
class YouTube extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      data: []
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch(finalUrl);
      const data = await response.json()
      console.log(data)
      const result = data.items[1].id.videoId
      console.log(result)
      this.setState({ data: result })
    } catch (err) {
      this.setState({ error: err.message })
    }
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="youtube">
        {this.state.error ? <div>{this.state.error}</div> : null}
        <div>
          <iframe
            title="Hats Commercial"
            src={`https://www.youtube.com/embed/${this.state.data}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}



export default YouTube;