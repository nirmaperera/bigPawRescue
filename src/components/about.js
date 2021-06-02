import styled, {css} from 'styled-components';
import aboutPic from '../assets/aboutPic.png';
import footprint from '../assets/footprints.png';
import {device, colors} from '../styles/globalStyles';
import fadeIn from '../styles/fadeIn';

const AboutWrapper = styled.div`
    background:${colors.lightMint};
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${device.laptop} {
        height: auto;
        flex-direction: column;
  }
`;

const ContentContainer = styled.div`
    flex:0.8;
    padding:20px;
    line-height: 2;
`;

const ImageContainer = styled.div`
    display: flex;
    padding: 0;
    align-self: flex-end;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.h1`
    color:${colors.primaryBlue};
    font-size: 3rem;
    letter-spacing: 3px;
`;

const SubTitle = styled.h3`
     color:${colors.primaryTan};
`;

const AboutInfo = styled.p`
    font-size: 1.2rem;
    color:${colors.primaryGrey};
    position: relative;
    z-index: 1;
`;

const FootPrintImg = styled.img `
    opacity: 0;
    ${({one}) =>
        one && css `
            transform: rotate(-10deg);
            --animate-duration: 5s;
    `}
    ${({two}) =>
        two && css `
           transform: rotate(-10deg);
          --animate-duration: 5s;
    `}
    ${({three}) =>
        three && css `
            position: absolute;
            left: 400px;
            transform: rotate(-20deg);
            --animate-duration: 5s;
            opacity: 0.6 !important;
        @media ${device.laptop} {
            display: none;
        }
    `}
    ${({four}) =>
        four && css `
            position: absolute;
            z-index: -1;
            transform: rotate(-20deg);
            --animate-duration: 5s;
            opacity: 0.4 !important;
         @media ${device.laptop} {
             left: 0;
        }
    `}
    ${({fade}) =>
        fade && css `
           animation-name: ${fadeIn};
           animation-duration: 8s;
    `}
`;

const About = () => {
    return (
        <AboutWrapper>
            <ContentContainer>
                <FootPrintImg one className="animate__animated animate__fadeIn  animate__delay-4s"
                     width="170px" src={footprint} alt="footprints"/>
                 <Header>
                    <div>
                        <Title>Hi there!</Title>
                        <SubTitle>Bring home your new best friend in no time</SubTitle>
                    </div>
                    <FootPrintImg three className="animate__animated animate__fadeIn  animate__delay-3s"
                     width="120px" height="100px"src={footprint} alt="footprints"/>
                    <FootPrintImg two className="animate__animated animate__fadeIn animate__delay-2s"
                     width="200px" height="150px"src={footprint} alt="footprints"/>
                 </Header>

                <AboutInfo>According to volunteer website DoSomething.org, there are five homeless animals
                    on the street for every one homeless human.Each year, it's estimated that more than one million
                    adoptable dogs and cats are euthanized in the United States,
                    <FootPrintImg four fade
                    width="300px" height="220px"src={footprint} alt="footprints"/>simply because too many
                    pets come into shelters and too few people consider adoption when looking for a pet.
                    By adopting, you're fighting back against puppy mills, where dogs are kept in "overcrowded,
                    soiled cages" and are unable to socialize or roamIf you want a dog that's truly one of a kind,
                    then the shelter is the place to go!
                </AboutInfo>
            </ContentContainer>
            <ImageContainer>
                <img alt="about" src= {aboutPic} width="500px" />
            </ImageContainer>
        </AboutWrapper>
    )
}

export default About;
