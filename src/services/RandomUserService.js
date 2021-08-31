import { get } from 'axios'
import RandomUserTransformer from '../transformers/RandomUserTransformer'

// axios.defaults.withCredentials = true

export default {
  name: 'RandomUser',
  async getRandomUser(currentUsers) {
    try {
      return await get('https://api.randomuser.me/').then((response) =>
        RandomUserTransformer.convertUserFrom(
          currentUsers,
          response.data.results
        )
      )
    } catch (error) {
      console.log('Error retrieving data: ' + error)
    }
  }
}
