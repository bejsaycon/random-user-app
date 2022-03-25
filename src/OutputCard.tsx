interface Prop{
    usersData: {
      results?: Array<Results>
      info?: unknown
    }
}

interface Results {
      name?: unknown
      email: string
      phone: string
      picture?: Picture
      location?: unknown
}

interface Picture {
  large: string
  medium : string
  thumbnail:string
}



export const OutputCard = ({usersData}:Prop) =>{
    console.log("Results", usersData.results? usersData.results[0] : {}) //Error when I start to add the index
    return (
        <div className="below-input-box">
          <figure className="img-prof">
            <img alt="USER-PROFILE"
            src = {usersData.results? usersData.results[0].picture?.large : ""} />
          </figure>

          <div className="user-info-card">
              <div className="user-name user-details head-text">
                <i className="fas fa-user"></i>
                {/* {` ${u.name.title} ${u.name.first} ${u.name.last}`} */}
              </div>
              <div className="user-details head-text">
                <i className="fas fa-map-marker-alt"></i>
                {/* {` ${u.location.street.name} ${u.location.street.number}, ${u.location.city}, ${u.location.state} ${u.location.postcode} ${u.location.country}`} */}
              </div>
              <div className="user-details head-text">
                <i className="fas fa-envelope"></i>
                {/* {` ${u.email}`} */}
              </div>
              <div className="user-details head-text">
                <i className="fas fa-phone-alt"></i>
                {/* {` ${u.phone}`} */}
              </div>
            </div>
        </div>
      );
}