import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import sanityClient from '../client.js';
export default function Projects() {
  const [projectsData, setProjects] = useState(null);

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "post"] {
        title,
        slug,
        mainImage {
          asset->{
            _id,
            url
          },
          alt
        }
      }`
    ).then((data) => {
      setProjects(data)
    }).catch(console.error)
  }, [])
  console.log(projectsData)
  return (
    <div className="docs-section">
      <div className="container">
        <h1>Projects</h1>
        <div className="card four columns">
          {projectsData && projectsData.map((project, index) => (
            <Link to={"/project/" + project.slug.current} key={project.slug.current}>
                <img 
                  src={project.mainImage.asset.url}
                  alt={project.mainImage.alt}  
                />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
