import * as constants from "./constants";

const fakeLitterBoxes = new Array(50).fill(null).map((_, index) => ({
  id: `id-${index}`,
  name: `Litter Box ${index + 1}`
}));

export const fetchLitterBoxes = () => dispatch =>
  dispatch({
    type: constants.FETCH_LITTER_BOXES_SUCCESS,
    litterBoxes: fakeLitterBoxes
  });
