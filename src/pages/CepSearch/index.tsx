import { ChangeEvent, FormEvent, useState } from 'react';
import ResultCard from '../../components/ResultCard';
import './styles.css';

type FormData = {
  cep: string;
  test: string;
}


const CepSearch = () => {

const [formData, setFormData] = useState<FormData>(
  {
    cep: '',
    test: ''
  }
);

const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  const name = event.target.name;
  const value = event.target.value;

  setFormData({ ... formData, [name]:value});
  
}

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  console.log("clicou =>" + formData.cep +" - " + formData.test)
}
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
              name='cep'
              value={formData.cep}  
              onChange={handleChange}
            />
            <input
              type="text"
              className="search-input"
              placeholder="TESTE INPUT"
              name='test'
              value={formData.test}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Buscar
            </button>
          </div>
        </form>
    
        <ResultCard title="Logradouro" description="Lalala" />
        <ResultCard title="Número" description="234" />

      </div>
    </div>
  );
};

export default CepSearch;