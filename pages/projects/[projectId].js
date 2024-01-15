// pages/projects/[projectId].js
import { getAllProjectIds } from '../../lib/projects'
import userData from "@constants/data";
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

export default function Project({ projectData }) {
    return <ProjectDetail projectData={projectData} />
}