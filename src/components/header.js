import styled from 'styled-components';
import banner from '../assets/banner.jpg';
import {device, colors} from '../styles/globalStyles';

const HeaderContainer = styled.div `
    background: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    display:  flex;
    justify-content:center;
    align-items: left;
    flex-direction: column;
    position: relative;
    height: 500px;
`;

const HeaderContent = styled.div `
    position: absolute;
    left: 250px;
    top:180px;
    @media ${device.laptop} {
        left: 40px;
        width: 250px;
    }
`;

const Title = styled.h1 `
    padding: 0;
    margin:0;
    color:${colors.secondaryBlue};
    letter-spacing: 2px;
    font-size: 2.5rem;
    line-height: 0.1;
`;

const Subtitle = styled.h4 `
    color:${colors.primaryTan};
    font-size: 1.2rem;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Title>Big Paws Rescue</Title>
                <Subtitle>Bring home your new best friend in no time</Subtitle>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header;