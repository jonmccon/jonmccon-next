import Image from 'next/image'

export default function ProjectDetail({ projectData }) {
  return (
    <div>
      <h1>{projectData.title}</h1>
      {projectData.sections.map((section, index) => (
        <div key={index}>
          <h2>{section.subtitle}</h2>
          {section.description.map((desc, descIndex) => (
            <p key={descIndex}>{desc}</p>
          ))}
          {section.images.map((img, imgIndex) => (
            <Image 
              key={imgIndex} 
              src={img} 
              width={1000} 
              height={3000} 
              placeholder="blur"
              blurDataURL="/avatar.jpg" // find a smaller image to use here
            />
          ))}
        </div>
      ))}
      {/* Render other project data... */}
    </div>
  )
}