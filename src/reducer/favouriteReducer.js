export const initialState =
  JSON.parse(localStorage.getItem("favourites")) || [];

export function favouriteReducer(state, action) {
  switch (action.type) {

    case "TOGGLE_FAV":
      let updated;

      if (state.includes(action.payload)) {
        updated = state.filter((id) => id !== action.payload);
      } else {
        updated = [...state, action.payload];
      }

      localStorage.setItem("favourites", JSON.stringify(updated));
      return updated;

    default:
      return state;
  }
}
