import React,{ useState } from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../components/FormField';

// import { Container } from './styles';

const Category = () => {
  const initialValues = {
    name: '',
    description:'',
    color:''
  }
  const [values, setValues] = useState(initialValues);
  const [categories, setCategories] = useState([]);
  
  const setValue = (key, value) => {
    setValues({
      ...values,
      [key]:value,
    });
  }
  
  const handleChange = (event) => {
    const {getAtribute , value} = event.target;
    setValue(getAtribute('name'), value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setCategories([...categories, values])
    setValues(initialValues);
  } 
  return (
    <PageDefault>
    <h1>Cadastro de categoria :</h1>
    
    <form onSubmit={handleSubmit}>
    {/* <div>
      <label>
      Nome da Categoria
      <input 
      type="text"
      name="name"
      onChange={handleChange}
      value={values.name}
      />
      </label>
    </div> */}
    <FormField
    label="Nome da Categoria"
    type="text"
    name="name"
    onChange={handleChange}
    value={values.name}
    />
    <div>
    <label htmlFor="">
    Descrição:
    <textarea 
    type="text"
    name="description"
    onChange={handleChange}
    value={values.description}
    />
    </label>
    </div>

   
    <div>
      <label htmlFor="">
      Cor:
      <input
      type="color"
      name="color"
      onChange={handleChange}
      value={values.color}
      />
      </label>
    </div>

    <button type="submit">Cadastrar</button>
    </form>
    
    <ul>
      {
        categories.map((category,index) => (
          <li key={`${category.name}${index}`}>
          {category.name}
          </li>
        ))
      }
    </ul>
      
      <Link to="/">
        Voltar para Home
      </Link>
      </PageDefault>
      );
    }
    
    export default Category;