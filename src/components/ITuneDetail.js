import React from 'react';

const ITuneDetail= (props) => {
  if(!props.iTune)return null
  return (
    <div className = "itune-wrapper">
    <div className="chart">
                <h2>"{props.iTune["im:name"].label}" by {props.iTune["im:artist"].label}</h2>
                  <p>Price :{props.iTune['im:price'].label}</p>
                <img src={props.iTune["im:image"][2].label} />
            </div>
    <div className="itune-play">
       <audio controls>
        <source src={props.iTune.link[1].attributes.href} type="audio/mpeg" />
         Browser doesnot support.
        </audio>
    </div>


  </div>
  )
}

export default ITuneDetail;
