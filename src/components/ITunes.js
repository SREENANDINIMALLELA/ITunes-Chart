import React from 'react';

const ITunes = (props) => {

const options = props.musicChart.map((itune,index)=>{
  return < option value={index} key={index}>{itune['im:name'].label}</option>
})
function handleChange(event){
  props.ontuneSelected(event.target.value)
}

  return (
    <select id="tune-selector" onChange={handleChange}>
      <option disabledvalue="default">Choose tune...</option>
      {options}
    </select>
  )
}

export default ITunes;
