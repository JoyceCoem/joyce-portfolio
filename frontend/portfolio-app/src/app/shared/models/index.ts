export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  architecture: string;
  myRole: string;
  technologies: string;
  outcome: string;
  lessonsLearned: string;
  gitHubUrl?: string;
  demoUrl?: string;
  displayOrder: number;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  category: string;
  dateLabel?: string;
  displayOrder: number;
}

export interface ResearchProject {
  id: number;
  slug: string;
  title: string;
  context: string;
  supervisor: string;
  abstract: string;
  objectives: string;
  methodology: string;
  technologies: string;
  keyFindings: string;
  displayOrder: number;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  credentialUrl?: string;
  inProgress: boolean;
  displayOrder: number;
}
