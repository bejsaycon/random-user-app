import {useState} from 'react';

export const useProfile = () => {
    const [defVal, setdefVal] = useState({
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
      })
    return defVal 
}