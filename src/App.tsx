import {useState} from 'react';
import { InputForm } from './InputForm';
import './styles/App.css';
import { Welcome } from './Welcome';
import { useFetch } from './useFetch';
import { OutputCard } from './OutputCard';


const App: React.FC = () => {
  const [seed, setSeed] = useState('');
  const url:string = `https://randomuser.me/api/?seed=${seed}`; //seed value is from inputbox
  let usersData = useFetch(url); //the url relies on seed input
  console.log(typeof(usersData as object));
  return (
    <div className="container">
      <InputForm setSeed={setSeed}/>
      {seed==='' ? <Welcome /> : <OutputCard usersData={usersData as object}/>}
    </div>
    
  );
}

export default App;
