export interface Prop{
    usersData: Results
  }
export interface UserData {
    results?: Array<Results>;
    info?: unknown;
}
export interface Results {
  name?: Name;
  email: string;
  phone: string;
  picture?: Picture;
  location?: Location;
}
export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
export interface Name {
  first: string
  last: string
  title: string
}
export interface Location{ 
  city: string
  country: string
  postcode: number
  state: string
  street: Street
}
export interface Street{
  number: number
  name: string
}
