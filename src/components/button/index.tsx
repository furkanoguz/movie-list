import React, { FC, memo } from "react";
import { ButtonWrapper } from "./styled";

interface ISimpleButton {
  title: string;
  onClick: () => void;
  isTransparent?: boolean;
}

const SimpleButton: FC<ISimpleButton> = ({
  title,
  onClick,
  isTransparent = false,
}) => {
  return (
    <ButtonWrapper
      className={isTransparent ? "transparent" : ""}
      onClick={onClick}
    >
      {title}
    </ButtonWrapper>
  );
};

export default memo(SimpleButton);
