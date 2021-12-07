import axios from "axios";
import React, { useState, FormEvent } from "react";
import InputMask from "react-input-mask";
import { Container } from "./styles";

interface Route {

  code: number;
  state: string;
  city: string;
  district: string;
  address: string;

}

export function DateInput(props: { onChange: React.ChangeEventHandler<HTMLInputElement> | undefined; value: string | number | readonly string[] | undefined; }) {

  const [cep, setCep] = useState('');

  const [code, setCode] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [district, setDistrict] = useState([]);
  const [adress, setAdress] = useState([]);

  const [routes, setRoutes] = useState<Route[]>([]);

  async function handleSearchNewCep(event: FormEvent) {

    event.preventDefault();
    setCep('');

  };

  function searchCep() {
    axios.get(`https://ws.apicep.com/cep/${cep}.json`)
      .then((response) => {
        setCode(response.data.code);
        setState(response.data.state);
        setCity(response.data.city);
        setDistrict(response.data.district);
        setAdress(response.data.address);

        const route = response.data;

        setRoutes([
          route,
        ]);

      })
  }

  function handleAddList() {

    localStorage.setItem("list", JSON.stringify(routes));
    console.log(data);
    
  }

  function handleClearList() {

    localStorage.clear();
    
  }
  
  const data = JSON.parse(localStorage.getItem("list") || "[]");

  return (

    <Container onSubmit={handleSearchNewCep}>

      <span>
        
        <InputMask mask="99999-999" placeholder="Digite aqui o CEP!" value={cep} className="input" onChange={event => setCep(event.target.value)} />
        <button type="submit" onClick={searchCep}>Buscar CEP</button>

      </span>

      <table>

        <thead>

          <tr>

            <th>CEP</th>
            <th>Estado</th>
            <th>Cidade</th>
            <th>Bairro</th>
            <th>Rua</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>{code}</td>
            <td>{state}</td>
            <td>{city}</td>
            <td>{district}</td>
            <td>{adress}</td>

          </tr>

        </tbody>

      </table>

      <span>
        
        <button type="submit" className="add" onClick={handleAddList}>Adicionar à lista</button>
        <button type="submit" className="clear" onClick={handleClearList}>Limpar a lista</button>

      </span>

      <table>

        <thead>

          <tr>

            <th>CEP</th>
            <th>Estado</th>
            <th>Cidade</th>
            <th>Bairro</th>
            <th>Rua</th>

          </tr>

        </thead>

        <tbody>

          {data.map((routes: any) => (

            <tr key={routes.code}>
              <td>{routes.code}</td>
              <td>{routes.state}</td>
              <td>{routes.city}</td>
              <td>{routes.district}</td>
              <td>{routes.address}</td>
            </tr>
              
          ))}

        </tbody>

      </table>

    </Container>

  );

}