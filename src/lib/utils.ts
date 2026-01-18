import { type ClassValue, clsx } from 'clsx';

// Utility for conditionally joining classNames
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Format date string to readable format
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
}

// Format date range for experience entries
export function formatDateRange(startDate: string, endDate?: string): string {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : 'Present';
  return `${start} — ${end}`;
}

// Calculate duration between two dates
export function calculateDuration(startDate: string, endDate?: string): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                 (end.getMonth() - start.getMonth());
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (years === 0) {
    return `${remainingMonths} mo`;
  } else if (remainingMonths === 0) {
    return `${years} yr`;
  } else {
    return `${years} yr ${remainingMonths} mo`;
  }
}

// Get proficiency color class
export function getProficiencyColor(proficiency?: 'familiar' | 'proficient' | 'expert'): string {
  switch (proficiency) {
    case 'expert':
      return 'bg-accent-green';
    case 'proficient':
      return 'bg-accent-blue';
    case 'familiar':
      return 'bg-accent-orange';
    default:
      return 'bg-text-muted';
  }
}

// Get proficiency label
export function getProficiencyLabel(proficiency?: 'familiar' | 'proficient' | 'expert'): string {
  switch (proficiency) {
    case 'expert':
      return 'Expert';
    case 'proficient':
      return 'Proficient';
    case 'familiar':
      return 'Familiar';
    default:
      return '';
  }
}
