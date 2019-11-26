import React from 'react'
import ITunes from '../components/ITunes'
import ITuneDetail from '../components/ITuneDetail'
class MusicChart extends React.Component{
  constructor(props){
    super(props);
    this.state={
      musicChart: [],
      selectedMusciAlbum:null
    }
    this.handleTuneSelected=this.handleTuneSelected.bind(this)
  }
  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    fetch(url).then(res=> res.json())
    .then(data => this.setState({
      musicChart:data.feed.entry
    }))
    .catch(err=>console.error);
  }
  handleTuneSelected(index){
    const selectedtune = this.state.musicChart[index]
    this.setState({
      selectedMusciAlbum: selectedtune
    })
  }
  render(){
    return (
      <div>
      <h1>iTunes</h1>
      <ITunes musicChart ={this.state.musicChart}
      ontuneSelected={this.handleTuneSelected}/>
      <ITuneDetail iTune ={this.state.selectedMusciAlbum}/>
      </div>
    )
  }
}
export default MusicChart;
