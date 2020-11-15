import React, { useState } from 'react';
import './App.css';
import AvatarImg from './components/AvatarImg';
import InputForm from './components/InputForm';
import axios from 'axios';

function App() {


  const [nomeIG, setnomeIG] = useState();
  const [imgIG, setImgIG] = useState();


  function getIG(nome) {
    setnomeIG(nome);
  }

  function mudaImg(url) {
    setImgIG(url);
  }


  const apiInsta = axios.create({ baseURL: `'https://www.instagram.com` });



  async function fetchUser(user) {

    try {
      const response = await apiInsta.get(`https://www.instagram.com/${user}/?__a=1`);
      const { data: { graphql: { user: { profile_pic_url } } } } = response;
      console.log(user);
      console.log(profile_pic_url);
      mudaImg(profile_pic_url);
    } catch (e) {
      console.log(user);
      console.log(e);
    }

  }


  return (
    <div>
      <h2>Buscador Perfil</h2>
      <InputForm getIG={getIG} fetchUser={fetchUser}></InputForm>
      <AvatarImg urlImg={imgIG}></AvatarImg>
      <p>{nomeIG}</p>
    </div>


  );
}

export default App;
