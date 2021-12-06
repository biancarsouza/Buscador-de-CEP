import axios from "axios";
import React, { useState, FormEvent } from "react";
import InputMask from "react-input-mask";
import { Container } from "./styles";

export function DateInput(props: { onChange: React.ChangeEventHandler<HTMLInputElement> | undefined; value: string | number | readonly string[] | undefined; }) {

  const [cep, setCep] = useState('');

  const [code, setCode] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [district, setDistrict] = useState([]);
  const [adress, setAdress] = useState([]);

  async function handleSearchNewCep(event: FormEvent) {

    event.preventDefault();
    setCep('');

  };

  function searchCep() {
    axios.get(`https://ws.apicep.com/cep/${cep}.json`)
      .then((response) => {
        console.log(response);
        setCode(response.data.code);
        setState(response.data.state);
        setCity(response.data.city);
        setDistrict(response.data.district);
        setAdress(response.data.adress);
      })
  }

  return (

    <Container onSubmit={handleSearchNewCep}>

      <InputMask mask="99999-999" placeholder="Digite aqui o CEP" value={cep} onChange={event => setCep(event.target.value)} />;

      <button type="submit" onClick={searchCep}>Cadastrar</button>

      <h1>{code}</h1>
      <h1>{state}</h1>
      <h1>{city}</h1>
      <h1>{district}</h1>
      <h1>{adress}</h1>

    </Container>

  );

}