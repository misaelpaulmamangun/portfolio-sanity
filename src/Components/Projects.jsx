import BlockContent from '@sanity/block-content-to-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client.js'
export default function Projects() {
  const [projectsData, setProjects] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"] {
        title,
        slug,
        mainImage {
          asset->{
            _id,
            url
          },
          alt
        },
        link,
        description
      }`
      )
      .then((data) => {
        setProjects(data)
      })
      .catch(console.error)
  }, [])
  console.log(projectsData)

  return (
    <div className='docs-section'>
      <div className='container'>
        <h1>Projects</h1>
        <div className='row'>
          {projectsData &&
            projectsData.map((project, index) => (
              <div className='card four columns' key={project.slug.current}>
                <div className='item-img'>
                  <img
                    src={project.mainImage.asset.url}
                    alt={project.mainImage.alt}
                  />
                </div>
                <div className='item-desc'>
                  <div className='container'>
                    <Link to={{ pathname: project.link }} target='_blank'>
                      <h6 className='item-title text-center text-bold mt-1'>
                        {project.title}
                      </h6>
                    </Link>
                    <div>
                      <BlockContent
                        blocks={project.description}
                        projectId='6kpzhc7k'
                        dataset='production'
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
