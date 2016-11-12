import axios from 'axios'
import { SET_DEFAULT_SPOTS } from './types'

export function setDefaultSpots(spots) {
  return {
    type: SET_DEFAULT_SPOTS,
    spots
  }
}

export function getSpots() {
  return dispatch => {
    return axios.get('/spots/all').then(res => {
      dispatch(setDefaultSpots(res.data.spots))
    })
  }
}

export function addSpot(spot) {
  return dispatch => {
    return axios.post('/spots/create', spot)
  }
}

export function deleteSpot(id) {
  return dispatch => {
    return axios.delete(`/spots/delete/${id}`);
  }
}
