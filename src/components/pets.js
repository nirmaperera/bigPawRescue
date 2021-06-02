import {useState} from 'react';
import PetCard from "./petCard";
import searchForPet from "../helpers/searchForPet";
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import allActions from '../actions/index';
import {colors, device} from '../styles/globalStyles';
import LazyLoad from 'react-lazyload';

const PetListContainer = styled.div `
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 5rem;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;
`;

const CheckBoxContainer = styled.div `
    margin-left: 4%;
    display: flex;
    align-items: center;
    background:${colors.secondaryBlue};
    width: 10%;
    height: 50px;
    border-radius: 20px;
    justify-content: space-evenly;
    padding: 0px 10px;
    border:1px solid ${colors.primaryBlue};
    @media ${device.laptop} {
        width: 30%;
        margin-top: 10%;
        align-self: auto;
        margin:10%auto;
    }
`;

const CheckBoxLabel = styled.p `
    font-size: 1.3rem;
    color: #fff;
`;

const Checkmark = styled.input `
     width:25px;
     height:25px;
     border-radius:5px;
     border:2px solid ${colors.primaryBlue};
`;

const Pets = ({petData, search}) => {
    const [selectAll, setSelectAll] = useState(false);
    const [check, setCheck] = useState([]);
    const dispatch = useDispatch();

    const handleSelectAll = e => {
        setSelectAll(!selectAll);
        setCheck(petData.map(li => li.url)); //check all boxes

        petData.map((element) => (
            dispatch(allActions.petImages.updateArrayImages(element.url))
        ))

        if (selectAll) {
          setCheck([]);
          dispatch(allActions.petImages.clearArray());
        }
    };

    return (
    <>
        <CheckBoxContainer>
            <Checkmark
                onChange={handleSelectAll}
                type="checkbox"
                checked={selectAll}
            />
           <CheckBoxLabel>{selectAll ? 'Clear All': 'Select All'}</CheckBoxLabel>
       </CheckBoxContainer>
       <LazyLoad height={200} once>
            <PetListContainer>
                {petData.filter(searchForPet(search)).map((data, i) =>
                    <PetCard key={i} data={data} check={check} setCheck={setCheck}/>
                )}
            </PetListContainer>
        </LazyLoad>
    </>
    )
}

export default Pets;

