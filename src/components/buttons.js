
import {handleImageDownload} from '../helpers/imageDownload';
import styled from 'styled-components';
import {device, colors} from '../styles/globalStyles';
import {useSelector} from 'react-redux';

const StyledButton = styled.button `
    outline:none;
    padding:10px 20px;
    font-size: 1.1rem;
    border-radius: 20px;
    margin-right: 20px;
    cursor: pointer;
    border:${colors.secondaryBlue} 2px solid;
    background-color:  ${colors.secondaryBlue};
    color:white;
    :hover{
        background-color:${colors.lightestMint};
        color:${colors.primaryGrey};
    }
    @media ${device.laptop} {
        margin:2% auto;
    }
`;


const ButtonContainer = styled.div `
     width:100%;
     display: flex;
     justify-content: flex-end;

     @media ${device.laptop} {
        justify-content: center;
        align-items: center;
    }
`;

const Button= () => {
    let images = useSelector(state => state.arrayImages.arrayImages);

    const handleDownload = () => {
        if(!images.length){
            alert('Please select images to download');
        }
        var newImages = [...new Set(images)]
        newImages.forEach(element => handleImageDownload(element));
    }

    return (
        <ButtonContainer>
           <StyledButton onClick={handleDownload}>Download Images</StyledButton>
        </ButtonContainer>
    )
}

export default Button;