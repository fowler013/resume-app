import React, { Component } from 'react'
import SkillsPage from './SkillsPage'

class Skills extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Tevin',
            id: 4,
            skills: '',
            items: [],
        }


        this.state.items = [
            { skills: 'HTML ', id: 0 },
            { skills: 'CSS', id: 1 },
            { skills: 'JavaScript', id: 2 },
            { skills: 'JQuery', id: 3 },
            { skills: 'React', id: 4 },
        ]


        


    }

    componentDidMount() {
        let films = object.map((films, id) => {
            return (
                d
            )
        }
    }

    render() {
        return(
            <SkillsPage
                key = { props.resume.id }
                name = { props.resume.name }
                skills = { props.resume.skills }
                exp = { props.resume.experience }
                edu = { props.resume.education }
                link = { props.resume.id }
            />
        ) 
    }
   
}

export default Skills;