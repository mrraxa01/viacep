import { ChangeEvent, FormEvent, useState } from "react";
import ResultCard from "../../components/ResultCard";
import "./styles.css";
import axios from "axios";

type FormData = {
  cep: string;
 
};

type Address = {
  logradouro: string;
  localidade: string;
};

const CepSearch = () => {
  const [formData, setFormData] = useState<FormData>({
    cep: ""  
  });

  const [address, setAddress] = useState<Address>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.get(`https://viacep.com.br/ws/${formData.cep}/json`)
      .then((response) => {
        setAddress(response.data);
      })
      .catch(
        (error) => {
          setAddress(undefined);
          console.log(error);
        }  
      )
  };
  return (
    <div className="cep-search-container">
      <h1 className="text-primary">Busca CEP</h1>
      <div className="container search-container">
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="CEP (somente números)"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
            />

            <button type="submit" className="btn btn-primary search-button">
              Buscar
            </button>
          </div>
        </form>

        {address && (
          <>
            <ResultCard title="Logradouro" description={address.logradouro} />
            <ResultCard title="Localidade" description={address.localidade} />
          </>
        )}
      </div>
    </div>
  );
};

export default CepSearch;
