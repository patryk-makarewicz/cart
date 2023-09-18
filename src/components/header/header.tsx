import Image from 'next/image';
import Logo from '../../assets/logo_black.svg';
import FlagPl from '../../assets/lang_pl.png';
import FlagEn from '../../assets/lang_en.png';
import * as Styled from './header.styles';
import Link from 'next/link';

const Header = ({ lng }: { lng: string }) => (
  <Styled.Wrapper>
    <Styled.InnerWrapper>
      <Image priority src={Logo} width={30} height={36} alt="Logo makaDev" />
      <Styled.FlagContainer>
        {lng === 'pl' ? (
          <Link href={'/en'}>
            <Image priority src={FlagPl} width={30} height={30} alt="Poland flag" />
          </Link>
        ) : (
          <Link href={'/pl'}>
            <Image priority src={FlagEn} width={30} height={30} alt="English flag" />
          </Link>
        )}
      </Styled.FlagContainer>
    </Styled.InnerWrapper>
  </Styled.Wrapper>
);

export default Header;
