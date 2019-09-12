const initialState = {
  locations: []
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'HIKING_DATA_LOADED':
      return {
        ...state,
        locations: action.payload
      }

      break;
    default:

  }
}
