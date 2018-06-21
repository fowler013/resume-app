import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//CREATE SKILLSLIST//

class SkillsPage extends Component{
    
    render() {
        return (
            
            <div className="col-md-4 mb-4">
                <div className="card card-style text-light">
                    <div className="card-body text-dark">
                        <h5 className="card-title card-header text-dark">{this.props.name}</h5>
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item">Skills: { this.state.skill }</li>
                        <li className="list-group-item">Experience: { this.props.exp }</li>
                        <li className="list-group-item text-muted score">Education: { this.props.edu }</li>
                        <Link className="d-block btn btn-danger mt-2" to={"/skills/" + this.props.link}>ME</Link>
                        
                        </ul>
                    </div>
                </div>

            </div>
    )
    } 
}

export default SkillsPage























































// const SkillsList = (props) => { // WHEN CREATING A LSIT MAKE SURE YOU DO NOT CREATE A CONSTRUCTOR//
//     let ListItems = props.items.map((item, index) =>{ // REMEBER TO CREATE A KEY FOR IDs//
//         return (
//             <div key = {index} className ="bg-light">
//                 {`${item.skills}`}
//             </div>
//         );
//     });
    

//     // ADD A RETURN METHOD IF I WANT TO ADD STUFF TO MY ARRAY USING {ListItems}...LOOK AT POKEMONE REACT PAGE FOR REFERENCE//
//     return(
//         <div>
//             {ListItems}
//         </div>
//     )
// }


// export default SkillsList;