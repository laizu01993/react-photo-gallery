export const initialState = JSON.parse(localStorage.getItem('favourites')) || [];

export function favouritesReducer(state, action) {
  switch(action.type) {
    case 'ADD_FAVOURITE':
      const added = [...state, action.payload];
      localStorage.setItem('favourites', JSON.stringify(added));
      return added;

    case 'REMOVE_FAVOURITE':
      const removed = state.filter(photo => photo.id !== action.payload.id);
      localStorage.setItem('favourites', JSON.stringify(removed));
      return removed;

    default:
      return state;
  }
}