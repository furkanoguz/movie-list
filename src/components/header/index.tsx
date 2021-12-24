import React, { FC } from "react";
import { HeaderWrapper, Logo, LogoWrapper, WishlistWrapper } from "./styled";
import LogoSvg from "../../assets/images/logo.svg";
import SimpleButton from "../button";

interface IHeader {
  wishCount: number;
  onButtonClick: () => void;
}

const Header: FC<IHeader> = ({ wishCount, onButtonClick }) => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo src={LogoSvg} />
      </LogoWrapper>
      <WishlistWrapper>
        <SimpleButton
          title={`Movie List (${wishCount})`}
          onClick={onButtonClick}
        />
      </WishlistWrapper>
    </HeaderWrapper>
  );
};

export default Header;
