// pages/projects/[projectId].js
import { getAllProjectIds } from '../../lib/projects'
import userData from "@constants/data";
import Image from 'next/image'
import ProjectDetail from '@components/ProjectDetail';

export async function getStaticPaths() {
    const paths = getAllProjectIds().map(id => ({
        params: {
            projectId: encodeURIComponent(id.replace(/\s+/g, '-'))
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const decodedProjectId = decodeURIComponent(params.projectId.replace(/-/g, ' '))
    const projectData = userData.projects.find(project => project.title === decodedProjectId);
    return {
        props: {
            projectData
        }
    }
}

export default function ProjectDetail({ projectData }) {
    return (
        <div>
            <h1>{projectData.title}</h1>
            <p>{projectData.description}</p>
            {projectData.images.map((img, index) => (
                <Image key={index} src={img} width={500} height={300} />
            ))}
            {/* Render other project data... */}
        </div>
    )
}