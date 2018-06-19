import React from 'react';

//CREATE SKILLSLIST//

const SkillsList = (props) => { // WHEN CREATING A LSIT MAKE SURE YOU DO NOT CREATE A CONSTRUCTOR//
    let ListItems = props.items.map((item, index) =>{ // REMEBER TO CREATE A KEY FOR IDs//
        return (
            <div key = {index} className ="bg-light">
                {`${item.skills}`}
            </div>
        );
    });
    

    // ADD A RETURN METHOD IF I WANT TO ADD STUFF TO MY ARRAY USING {ListItems}...LOOK AT POKEMONE REACT PAGE FOR REFERENCE//
    return(
        <div>
            {ListItems}
        </div>
    )
}


export default SkillsList;