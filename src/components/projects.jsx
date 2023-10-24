import React , { useState, useEffect } from 'react';
import ProjectComponent from './projectComponent';
import '../css/projects.css'
import LoadingAnimation from './loading';

const ProjectsSection = () =>{
    const [infoComponent, setInfoComponent] = useState(null)

    useEffect(() => {
        const fetchInfoComponent = async () => {
            try {
                const response = await fetch('https://portfolio-kendall-madrigal.onrender.com/portfolio/infoComponent');
                if(!response.ok){
                    throw new Error("It can't connect to API");
                }
                const data = await response.json();
                setInfoComponent(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchInfoComponent();
    }, []);

    
    return (
        <section id='projects'> 
            <div id='projects-title'>
                <h1>Projects</h1>
            </div>
            <div id='projectSection'>
            {
                infoComponent ? 
                infoComponent.map((item) => (
                    <ProjectComponent 
                        key={item._id} 
                        imgURL={item.imgURL} 
                        nameProject={item.name}
                        urlGit={item.gitURL}
                        language={item.language}
                        description={item.description}
                        status={item.status}
                    />
                ))
                :  <LoadingAnimation />
            }
            </div>
        </section>
    )
};

export default ProjectsSection;