import React from "react";
// import { robots } from "../robots";

const Card = (props) => {
    const {name, email, id} = props;
    return (
        <div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
           <img src={`https://robohash.org/${id}?200x200`} alt="img" />
            <div>
                <h2>
                  {name}
                </h2>
                <p>
                    {email}
                </p>
            </div>
        </div>
    );
}

export default Card;
