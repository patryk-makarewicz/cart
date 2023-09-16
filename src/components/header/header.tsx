import Image from 'next/image';
import Logo from '../../assets/logo_black.svg';
import FlagPl from '../../assets/lang_pl.png';
import FlagEn from '../../assets/lang_en.png';

import * as Styled from './header.styles';

const Header = () => {
  return (
    <Styled.Wrapper>
      <Styled.InnerWrapper>
        <Image priority src={Logo} width={30} height={36} alt="Logo makaDev" />
        <Styled.FlagContainer>
          <Image priority src={FlagPl} width={30} height={30} alt="Poland flag" />
        </Styled.FlagContainer>
      </Styled.InnerWrapper>
    </Styled.Wrapper>
  );
};

export default Header;
