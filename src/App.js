import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import { imgUpload } from './helpers/imgUpload.js';
import { useEffect, useState } from 'react';
import { useForm } from './hooks/useForm.js';

function App() {
  // const handleFileChange = (e) => {
  //   const file = e.target.files[0]
  //   imgUpload(file)
  //     .then((resp) => {
  //       console.log(resp);
  //     })
  //     .catch((error) => { console.warn(error) });
  // }

  const [cont, setCont] = useState(1);
  const [arrayEstudiantes, setArrayEstudiantes] = useState([])

  const handleMinus = () => {
    setCont(cont - 1);
  }

  const handleSum = () => {
    setCont(cont + 1);
  }

  //hook useForm

  const [formValue, handleChange, reset] = useForm({
    nombre: '',
    edad: ''
  })

  const { nombre, edad } = formValue;

  const handleSubmit = (event) => {
    event.preventDefault();
    const registro = {
      nombre,
      edad
    }
    const clon = [...arrayEstudiantes]
    clon.push(registro);
    setArrayEstudiantes(clon);
    reset();
  }

  useEffect(() => {
    // console.log('Cambió el valor de la etiqueta <p>');
    // console.log(...miObjeto);
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p> */}
        <Welcome name="Juan Jose" edad="14" />

        <button onClick={() => handleMinus()}>Disminuir - 1</button>
        <p>{cont}</p>
        <button onClick={() => handleSum()}>Incrementar + 1</button>

        <hr></hr>
        <h1>Registro de Estudiantes</h1>
        <form onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input id='nombre' type='text' value={formValue.nombre} placeholder='Ingrese nombre' onChange={handleChange}/>
          <label>Edad</label>
          <input id='edad' type='number' value={formValue.edad} placeholder='Ingrese su edad' onChange={handleChange}/>
          <button type='submit'>Registrar</button>
        </form>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Edad</th>
            </tr>
          </thead>
          <tbody>
            {arrayEstudiantes.map((item, index) => (
              <tr>
                <th scope="row">{index+1}</th>
                <td>{item.nombre}</td>
                <td>{item.edad}</td>
              </tr>
            ))}
          </tbody>
        </table>


        {/* <input id="image" name="image" type="file" onChange={handleFileChange} /> */}
      </header>
    </div>
  );
}

export default App;
