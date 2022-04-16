import { Prop } from "./IfcFetchedData";
export const OutputCard = ({usersData}:Prop) =>{
    console.log("Outputbox prop", usersData)
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