import React, {useEffect} from 'react'
import connect from 'react-redux'

function HikingList() {

  useEffect(() {
    fetchHikingLocations()
  })

  const fetchHikingLocations = () => {
    fetch('http://localhost:3001/all-locations')
    .then(response => response.json())
    .then(json => {
      props.onHikingLocationsLoaded(json)
    })
  }

  return(
    <div>Hiking List</div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return (
    onHikingLocationsLoaded: (hikingData) => dispatch({type: 'HIKING_DATA_LOADED', payload: hikingData})
  )
}

export default connect(null, mapDispatchToProps)(HikingList)
