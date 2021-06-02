import styled, {css} from 'styled-components';
import {device, colors} from '../styles/globalStyles';

const Navbar = styled.nav `
     width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    background-color: white;
    z-index: 10;
`;

const List = styled.ul `
    list-style: none;
    display: flex;
    align-items: center;
    width: 20%;
    justify-content: space-between;

    @media ${device.laptop} {
        width: 60%;
    }
`;

const ListItem = styled.a `
    font-size: 1.4rem;
    cursor: pointer;
    text-decoration: none;
    color:${colors.primaryTan};
    font-weight: 600;

    ${({logo}) =>
        logo && css `
            color:${colors.secondaryBlue};
            font-weight: 800;
            font-size: 2rem;
    `}
`;

const NavBar = () => {
    return (
        <Navbar>
            <List>
                 <ListItem logo href="/">Big Paws</ListItem>
                 <ListItem href="/about">About</ListItem>
            </List>
        </Navbar>
    )
}

export default NavBar;
