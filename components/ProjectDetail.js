import Image from 'next/image'

export default function ProjectDetail({ projectData }) {
  return (
    <div>
      <h1>{projectData.title}</h1>
      <p>{projectData.description}</p>
      {projectData.images.map((img, index) => (
        <Image 
        key={index} 
        src={img} 
        width={1000} 
        height={3000} 
        layout="responsive" 
        placeholder="blur"
        />
      ))}
      {/* Render other project data... */}
    </div>
  )
}