import {
  SET_VISIBILITY_FILTER,
  SHOW_ALL,
  VisibilityFilterTypes,
  FilterTypes,
} from "../actions/types";

const visibilityFilter = (
  state: FilterTypes = SHOW_ALL,
  action: VisibilityFilterTypes,
): FilterTypes => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
