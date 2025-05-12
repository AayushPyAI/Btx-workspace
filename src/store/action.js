import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api'

export default {
  async RegisterUser({ commit }, userData) {
    try {
      //   console.log(userData, 'usedata=====')
      //   const user = await axios.post(`${BASE_URL}/users/register`, userData)
      //   console.log(commit, 'commit..')

      return true
    } catch (error) {
      console.log('something went wrong while registering User', error)
    }
  },
  async addTour({ commit }, tourData) {
    try {
      // Here, you can make an API call if needed (optional)
      // const response = await axios.post(`${BASE_URL}/tours`, tourData);

      commit('setTour', tourData); // Commit mutation with new tour data
      return true;
    } catch (error) {
      console.log('Something went wrong while adding tour', error);
    }
  },
  async removeTour({ commit }, tourname) {
    try {
      // Optional: API call to delete the tour (if needed)
      // await axios.delete(`${BASE_URL}/tours/${tourname}`);

      commit('removeTour', tourname); // Pass the tourname to the mutation
      return true;
    } catch (error) {
      console.log('Something went wrong while removing tour', error);
    }
  },
}
