import axios from 'axios'

export function getReviews(spotId) {
  return dispatch => {
    return axios.get(`/reviews/${spotId}`).then(res => {
      return res.data.reviews
    })
  }
}
