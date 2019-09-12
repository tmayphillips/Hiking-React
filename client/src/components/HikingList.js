import React, {useEffect} from 'react'
import connect from 'react-redux'
import * as actionCreators from '../store/actions/actionCreators'

function HikingList(props) {

  useEffect(() => {
    props.onHikingLocationsLoaded()
  },[])

  return(
    <div>
      {props.hikingLocations.map(location => {
        return <div>{location.latitude}, {location.longitude}</div>
      })}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onHikingLocationsLoaded: () => dispatch(actionCreators.hikingDataFetched())
  }
}

const mapStateToProps = (state) => {
  return {
    hikingLocations: state.locations
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HikingList)
