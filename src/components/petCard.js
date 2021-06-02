
import {useState} from 'react';
import Image from "react-image-enlarger";
import {useDispatch, useSelector} from 'react-redux'
import {handleImageDownload} from '../helpers/imageDownload';
import allActions from '../actions/index';

import styled from 'styled-components';
import {colors} from '../styles/globalStyles';

const Card = styled.div `
    width: 90%;
    max-width: 340px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fcf9fa;
    padding:20px;
`;

const DownloadOptions = styled.div `
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    align-items: center;
    height: 80px;
    justify-content: space-between;
`;

const DownloadIcon = styled.img `
    width: 35px;
    cursor: pointer;
`;

const Checkmark = styled.input `
     width:25px;
     height:25px;
     border-radius:5px;
     border:2px solid ${colors.primaryBlue};
`;

const Title = styled.h3 `
    color:${colors.secondaryBlue};
`;

const Description = styled.h4 `
    text-align: center;
     color:${colors.primaryGrey};
`;

const Date = styled.p `
     color:${colors.primaryTan};
`;

const PetCard = ({data, check, setCheck}) => {
    const [zoomed, setZoomed] = useState(false);
    const dispatch = useDispatch();
    let images = useSelector(state => state.arrayImages.arrayImages);

    const handleCheck = (e) => {
        const { id, checked } = e.target;
        setCheck([...check, id]);
        const index = images.findIndex(item => item === id)

        if (index === -1){
            dispatch(allActions.petImages.updateArrayImages(id));
        }

        if (!checked) {
          console.log('helll');
          console.log(check.filter(item => item !== id), 'check');
          setCheck(check.filter(item => item !== id));
          dispatch(allActions.petImages.deleteImage(id));
        }
    }

    return (
     <Card>
        <DownloadOptions>
            <DownloadIcon
                onClick={() => handleImageDownload(data.url)}
                alt="download"
                src="https://img.icons8.com/pastel-glyph/64/000000/download--v1.png"/>
            <Checkmark
                className="petsCard__checkmark"
                id={data.url}
                onChange={handleCheck}
                type="checkbox"
                checked={check.includes(data.url)}
            />
        </DownloadOptions>

        <Image
            style={{width:"200px",height: "200px",objectFit: "cover", borderRadius:'20px'}}
            zoomed={zoomed}
            src={data.url}
            alt="pets"
            onClick={() => setZoomed(true)}
            onRequestClose={() => setZoomed(false)}
        />
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>
        <Date>{data.created.split(' ').slice(0, 4).join(' ')}</Date>
     </Card>
    )
}

export default PetCard;
