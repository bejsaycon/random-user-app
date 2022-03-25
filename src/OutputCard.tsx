interface Prop{
  usersData: Result
}
interface Result {
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
export const OutputCard = ({usersData}:Prop) =>{
    console.log("Outputbox prop", usersData) //Error when I start to add the index
    return (
        <div className="below-input-box">
          <figure className="img-prof">
            <img alt="USER-PROFILE"
            src = {usersData?.picture?.large} 
            />
          </figure>

          <div className="user-info-card">
              <div className="user-name user-details head-text">
                <i className="fas fa-user"></i>
                {` ${usersData?.name?.title} ${usersData?.name?.first} ${usersData?.name?.last}`}
              </div>
              <div className="user-details head-text">
                <i className="fas fa-map-marker-alt"></i>
                {` ${usersData?.location?.street.name} ${usersData?.location?.street.number}, ${usersData?.location?.city}, ${usersData?.location?.state} ${usersData?.location?.postcode} ${usersData?.location?.country}`}
              </div>
              <div className="user-details head-text">
                <i className="fas fa-envelope"></i>
                {` ${usersData.email}`}
              </div>
              <div className="user-details head-text">
                <i className="fas fa-phone-alt"></i>
                {` ${usersData.phone}`}
              </div>
            </div>
        </div>
      );
}