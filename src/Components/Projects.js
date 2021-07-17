import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
export default function Projects() {
  const [projectsData, setProjects] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
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
      )
      .then((data) => {
        setProjects(data);
      })
      .catch(console.error);
  }, []);
  console.log(projectsData);
  return (
    <div className="docs-section">
      <div className="container">
        <h1>Projects</h1>
        {projectsData &&
          projectsData.map((project, index) => (
            <div className="card four columns">
              <Link
                to={"/project/" + project.slug.current}
                key={project.slug.current}
              >
                <div class="item-img">
                  <img
                    src={project.mainImage.asset.url}
                    alt={project.mainImage.alt}
                  />
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
