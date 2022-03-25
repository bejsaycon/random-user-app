import { useState } from "react";
import { InputForm } from "./InputForm";
import "./styles/App.css";
import { Welcome } from "./Welcome";
import { useFetch } from "./useFetch";
import { OutputCard } from "./OutputCard";
import { UserData, Results } from "./IfcFetchedData";
import { useProfile } from "./useProfile";
const App = () => {
  
  const [seed, setSeed] = useState("");
  const url: string = `https://randomuser.me/api/?seed=${seed}`; //seed value is from inputbox
  const data:UserData = useFetch(url); //the url relies on seed input
  const defVal: Results = useProfile();
  return (
    <div className="container">
      <InputForm setSeed={setSeed} />
      {seed === "" ? <Welcome /> : <OutputCard usersData={data.results? data.results[0] : defVal} />}
    </div>
  );
};

export default App;
