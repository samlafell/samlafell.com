// Profile
export interface ProfileData {
  name: string;
  pronouns?: string;
  tagline: string;
  valueStatement?: string;
  location?: string;
  timezone?: string;
  avatarUrl: string;
}

// Social Links
export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'youtube' | 'email' | 'website';
  url: string;
  label: string;
}

// Skills - Categorized for recruiter scanning
export interface SkillCategory {
  name: string;
  icon?: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: string;
  proficiency?: 'familiar' | 'proficient' | 'expert';
}

// Certifications
export interface Certification {
  name: string;
  issuer: string;
  issuerLogo?: string;
  dateObtained: string;
  expirationDate?: string;
  credentialUrl?: string;
  credentialId?: string;
}

// Projects - Extended for Data Engineering context
export interface ProjectSectionData {
  subhead?: string;
  entries: Project[];
}

export interface Project {
  title: string;
  description: string;
  type: 'ETL Pipeline' | 'Data Warehouse' | 'Streaming' | 'Analytics' | 'ML Pipeline' | 'Data Platform' | 'Education' | 'Other';
  techStack: string[];
  scale?: string;
  impact?: string;
  repoUrl?: string;
  liveUrl?: string;
  isPublic: boolean;
  featured?: boolean;
}

// Experience - With quantified metrics
export interface ExperienceSectionData {
  subhead?: string;
  entries: Experience[];
}

export interface Experience {
  company: string;
  companyLogo?: string;
  companyUrl?: string;
  role: string;
  startDate: string;
  endDate?: string; // undefined = "Present"
  location?: string;
  achievements: Achievement[];
  techStack?: string[];
}

export interface Achievement {
  description: string;
  metric?: string;
}

// Writing (Optional)
export interface Article {
  title: string;
  platform: 'Medium' | 'Dev.to' | 'Personal' | 'LinkedIn' | 'Other';
  url: string;
  publishedDate: string;
  readTime?: string;
  description?: string;
}

// About Section
export interface AboutData {
  headline: string;
  paragraphs: string[];
  bullets?: string[];  // Optional capability bullets for hero section
}

// Contact
export interface ContactData {
  email: string;
  calendlyUrl?: string;
  ctaText: string;
  headline: string;
  description: string;
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
}

// Complete Site Content
export interface SiteContent {
  profile: ProfileData;
  socials: SocialLink[];
  about: AboutData;
  skillCategories: SkillCategory[];
  certifications: Certification[];
  projects: ProjectSectionData;
  experience: ExperienceSectionData;
  articles: Article[];
  contact: ContactData;
  navigation: NavItem[];
}

// Redesign Artifacts
export interface Artifact {
  id: string;
  styleName: string;
  html: string;
  status: 'streaming' | 'complete' | 'error';
}

export interface Session {
  id: string;
  prompt: string;
  timestamp: number;
  artifacts: Artifact[];
}

export interface ComponentVariation {
  name: string;
  html: string;
}

export interface LayoutOption {
  name: string;
  css: string;
  previewHtml: string;
}
