import React from 'react'
import ProjectList from './ProjectList'
import moment from 'moment'

const ProjectSummary = ({project})=>{
    return(
        <div className="card project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted By {project.authorFirstName} {project.authorLastName}</p>
                    <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>

                </div>
            </div>
    )
}

export default ProjectSummary