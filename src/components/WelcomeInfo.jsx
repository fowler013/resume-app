import React from 'react';



// ADD INFORMATION TO WELCOME//
const WelcomeInfo = props => {
    return (
       <div className = "WelcomeInfo">
        {props.user.skills}
       </div>
            )
        }
        
export default WelcomeInfo;