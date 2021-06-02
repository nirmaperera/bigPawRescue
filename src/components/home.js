import {useState, useEffect} from 'react';
import styled from 'styled-components';
import Header from "./header";
import Search from "./search";
import {getPets} from '../services/petsApi';
import Pets from './pets';
import Button from './buttons';
import NavBar from './navbar';
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {colors} from '../styles/globalStyles';

const MainWrapper = styled.div `
     height: auto;
     background-color: ${colors.lightestMint};
     font-family: 'Raleway', sans-serif;
     width: 100%;
     height: 100%;
`;

const LoaderContainer = styled.div `
    margin: 0 auto;
    width:10%;
    padding-bottom: 20%;
`;

function Home() {
  const [petData, setPetData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] =useState(true);

  useEffect(() => {
    getPets(setPetData, setLoading);
  }, [])

  return (
    <MainWrapper>
      <NavBar />
      <Header />
      <Search search={search} setSearch={setSearch}/>
      <Button/>

      {loading ?
      <LoaderContainer>
        <Loader
          type="Puff"
          color="#88B7A8"
          height={100}
          width={100}
          visible={true}
      />
      </LoaderContainer> : <Pets petData={petData} search={search} />}
    </MainWrapper>
  );
}

export default Home;