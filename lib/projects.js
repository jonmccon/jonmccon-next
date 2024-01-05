// lib/projects.js
import userData from "@constants/data";

export function getAllProjectIds() {
  return userData.projects.map(project => project.title)
}