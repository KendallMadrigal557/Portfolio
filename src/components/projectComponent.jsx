import React from 'react';

const ProjectComponent = ({imgURL, nameProject, urlGit, language, description, status}) => {
    
    const getStatusClass = status ? "active" : "inactive"; 
    const goLocation = (link) => {
        window.open(link, '_blank')
    }
    return (
        <div className="card">
            <div className={`image ${getStatusClass}`} style={{ backgroundImage: `url(${imgURL})` }}></div>
            <div className="img-overlay">
            </div>
            <div className="content">
                <div className="content-text">
                    <span className="project-name">{nameProject}</span>
                    <div className="content-body">
                        <span className="project-description">{description}</span>
                    </div>

                    <span className="categories">
                        <a className="categories-btn" >{language}</a>
                        <a className="categories-btn" onClick={() => goLocation(urlGit)}>Repository</a>

                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProjectComponent;