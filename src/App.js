import logo from './logo.svg';
import './App.css';
import {useForm} from 'react-hook-form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
    
export default function App() {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => console.log(data);
  return(
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <input className='first'{...register("FirstName",{required:true,minLength:{value:5}})} />
        <input className='last' {...register("LastName",{required:true,minLength:{value:5}})} />
        <input type="number"{...register("Age")} />
        <input className='sumbit' type = "submit" />
      </form>
  );
};
