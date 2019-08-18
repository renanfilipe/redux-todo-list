import React, { memo } from "react";
import { VisibilityFilterTypes } from "../actions/types";

interface Button {
  name: string;
  onClick: () => VisibilityFilterTypes;
}

interface Props {
  buttons: Button[];
}

const Footer: React.FC<Props> = ({ buttons }) => (
  <>
    {buttons.map(({ name, onClick }) => (
      <button type="button" onClick={onClick} key={name}>
        {name}
      </button>
    ))}
  </>
);

export default memo(Footer);
