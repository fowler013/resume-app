import React, {Component} from 'react';
import WelcomeInfo from './WelcomeInfo';






const Welcome = (props) => {
    return(
        <div className = "Welcome">
        <WelcomeInfo
            
                user = {props.user}
        
        />
        </div>
        
    )
}

export default Welcome;