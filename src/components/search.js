import styled from 'styled-components';
import {device} from '../styles/globalStyles';

const SearchContainer = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SearchInput = styled.input `
    width: 30%;
    padding: 15px;
    border-radius: 20px;
    border:none;
    position: relative;
    bottom: 20px;
    box-shadow: rgba(136, 183, 168, 0.5) 0px 7px 29px 0px;
    text-align: center;
    font-size: 1.3rem;
    outline: none;

    @media ${device.laptop} {
        width: 80%;
    }
`;

const Search = ({search, setSearch}) => {
    return (
        <SearchContainer>
            <SearchInput type="text"
                 onChange = {({target: {value}}) => setSearch(value)}
                 value={search}
                 className = "search__input"
                 placeholder ="Search for pets by title or description"/>
        </SearchContainer >
    )
}

export default Search;