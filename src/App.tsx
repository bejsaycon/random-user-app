import { useState } from "react";
import { InputForm } from "./InputForm";
import "./styles/App.css";
import { Welcome } from "./Welcome";
import { useFetch } from "./useFetch";
import { OutputCard } from "./OutputCard";

const App = () => {
  interface UserData {
      results?: Array<Results>;
      info?: unknown;
  }
  interface Results {
    name?: Name;
    email: string;
    phone: string;
    picture?: Picture;
    location?: Location;
  }
  interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
  }
  interface Name {
    first: string
    last: string
    title: string
  }
  interface Location{ 
    city: string
    country: string
    postcode: number
    state: string
    street: Street
  }
  interface Street{
    number: number
    name: string
  }
  const [seed, setSeed] = useState("");
  const url: string = `https://randomuser.me/api/?seed=${seed}`; //seed value is from inputbox
  const data:UserData = useFetch(url); //the url relies on seed input
  const defVal: Results = {
    name: {
      first: "",
      last: "",
      title: "",
    },
    email : "" , 
    phone : "",
    picture: {
      large: "",
      medium: "",
      thumbnail: ""
    },
    location: {
      city:"",
      country: "",
      postcode: 69,
      state: "",
      street: {
        number: 66,
        name: ""
      }
    }
  }

  return (
    <div className="container">
      <InputForm setSeed={setSeed} />
      {seed === "" ? <Welcome /> : <OutputCard usersData={data.results? data.results[0] : defVal} />}
    </div>
  );
};

export default App;
