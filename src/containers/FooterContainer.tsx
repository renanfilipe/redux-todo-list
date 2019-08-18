import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { Footer } from "../components";
import { setVisibilityFilter } from "../actions";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_INCOMPLETED,
  VisibilityFilterTypes,
} from "../actions/types";

const FooterContainer: React.FC = () => {
  const dispatch = useDispatch();
  const buttons = [
    {
      name: "Show all",
      onClick: (): VisibilityFilterTypes =>
        dispatch(setVisibilityFilter(SHOW_ALL)),
    },
    {
      name: "Show completed",
      onClick: (): VisibilityFilterTypes =>
        dispatch(setVisibilityFilter(SHOW_COMPLETED)),
    },
    {
      name: "Show incompleted",
      onClick: (): VisibilityFilterTypes =>
        dispatch(setVisibilityFilter(SHOW_INCOMPLETED)),
    },
  ];

  return <Footer buttons={buttons} />;
};

export default memo(FooterContainer);
