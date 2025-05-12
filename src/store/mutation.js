export default {
  setUser(state, data) {
    state.user = data
  },
  setTour(state,data){
    state.tours.push(data);
    console.log(state.tours,'==========');
  },
  removeTour(state, tourname) {
    state.tours = state.tours.filter((tour) => tour.tourName !== tourname);
   },
}
