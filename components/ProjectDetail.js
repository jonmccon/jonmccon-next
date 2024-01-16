// ProjectDetail.js
import { useRouter } from 'next/router';
import userData from '@constants/data';
import Projects from '@components/Projects';
import Image from 'next/image'

export default function ProjectDetail() {
	const router = useRouter();
	const { projectId } = router.query;

// Get the current project's data
const currentProject = projectId ? userData.projects.find(
  (project) => project.title.replace(/\s+/g, '-') === projectId
) : null;
	
  // Get the related projects
  const relatedProjects = currentProject ? userData.projects.filter(
    (project) =>
      project.title !== currentProject.title &&
      project.tags.some((tag) => currentProject.tags.includes(tag))
  ) : [];

  console.log(currentProject);
  console.log(relatedProjects);

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
      {currentProject && (
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          {currentProject.title}
        </h1>
      )}
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          {currentProject && currentProject.sections.map((section, index) => (
            <div key={index}>
              <h2 className="leading-loose text-2xl md:text-4xl font-semibold mx-4" style={{ lineHeight: "3rem" }}>
                {section.subtitle}
              </h2>
              {section.description.map((desc, descIndex) => (
                <p key={descIndex} className="text-xl text-gray-700 mb-4 dark:text-gray-300">
                  {desc}
                </p>
              ))}
              {section.images.map((img, imgIndex) => (
                <Image 
                  key={imgIndex} 
                  src={img} 
                  width={1000} 
                  height={3000} 
                  placeholder="blur"
                  blurDataURL="/avatar.jpg" // find a smaller image to use here
                  className="my-4"
                />
              ))}
            </div>
          ))}
          {/* Render other project data... */}
        </div>
      </div>
		<Projects projects={relatedProjects} />

    </section>
  )
}