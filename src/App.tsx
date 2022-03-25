import {useState} from 'react';
import { InputForm } from './InputForm';
import './styles/App.css';
import { Welcome } from './Welcome';
import { useFetch } from './useFetch';
import { OutputCard } from './OutputCard';

const App = () => {
  const [seed, setSeed] = useState('');
  const url:string = `https://randomuser.me/api/?seed=${seed}`; //seed value is from inputbox
  const data = useFetch(url); //the url relies on seed input
  return (
    <div className="container">
      <InputForm setSeed={setSeed}/>
      {seed==='' ? <Welcome /> : <OutputCard usersData={data} />}
    </div>
  );
}

export default App;
