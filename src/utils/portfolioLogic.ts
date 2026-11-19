import type { ProjectCategory, ProjectItem } from '../data/portfolioData';

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormValues, string>>;
}

export function filterProjects(
  projects: ProjectItem[],
  category: ProjectCategory
): ProjectItem[] {
  if (category === 'All') {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

export function getAdjacentProject(
  projects: ProjectItem[],
  currentId: string,
  direction: 'next' | 'prev'
): ProjectItem | null {
  if (projects.length === 0) {
    return null;
  }
  const index = projects.findIndex((item) => item.id === currentId);
  if (index === -1) {
    return projects[0];
  }
  const offset = direction === 'next' ? 1 : -1;
  const targetIndex = (index + offset + projects.length) % projects.length;
  return projects[targetIndex];
}

export function validateContactForm(
  values: ContactFormValues
): ContactFormValidationResult {
  const errors: Partial<Record<keyof ContactFormValues, string>> = {};
  const trimmedName = values.name.trim();
  const trimmedEmail = values.email.trim();
  const trimmedMessage = values.message.trim();

  if (trimmedName.length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (trimmedMessage.length < 10) {
    errors.message = 'Please share a brief note (at least 10 characters).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function clampParallaxOffset(
  progress: number,
  maxOffsetPx: number
): number {
  const clampedProgress = Math.max(0, Math.min(1, progress));
  return Math.round((clampedProgress - 0.5) * 2 * maxOffsetPx);
}
