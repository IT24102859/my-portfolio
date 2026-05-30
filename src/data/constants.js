export const PERSON = {
  name: 'Amalathas Dilshan',
  shortName: 'Dilshan',
  title: 'AI/ML Engineer & Data Science Student',
  tagline:
    'Building intelligent systems with machine learning, data science, and full-stack engineering.',
  email: 'amalathasdilshan@gmail.com',
  phone: '0768720035',
  location: 'Sri Lanka',
  university: 'SLIIT Northern Uni',
  specialization: 'Data Science',
  profileImage: '/public.jpeg',
  cvUrl: '/CV.pdf',
  github: 'https://github.com/IT24102859',
  linkedin: 'https://linkedin.com/in/',
  typingRoles: [
    'AI/ML Engineer',
    'Data Science Student',
    'Full-Stack Developer',
    'Machine Learning Enthusiast',
  ],
  stats: [
    { label: 'Projects', value: '3+' },
    { label: 'Focus', value: 'AI/ML' },
    { label: 'Stack', value: 'Full-Stack' },
  ],
}

export const MAILTO = {
  hire: `mailto:${PERSON.email}?subject=${encodeURIComponent('Hire Me — Portfolio Inquiry')}`,
  contact: `mailto:${PERSON.email}?subject=${encodeURIComponent('Contact Me — Portfolio Inquiry')}`,
}

/** Top skills shown as icon cards — import icons in SkillIconGrid */
export const SKILL_HIGHLIGHTS = [
  { name: 'Python', iconKey: 'python' },
  { name: 'TensorFlow', iconKey: 'ml' },
  { name: 'React', iconKey: 'react' },
  { name: 'Django', iconKey: 'django' },
  { name: 'SQL', iconKey: 'sql' },
  { name: 'MongoDB', iconKey: 'mongo' },
  { name: 'ML', iconKey: 'brain' },
  { name: 'Data', iconKey: 'chart' },
];

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export const TECHNICAL_SKILLS = [
  { name: 'Python', level: 90 },
  { name: 'Java', level: 82 },
  { name: 'React', level: 88 },
  { name: 'Django', level: 85 },
  { name: 'MERN Stack', level: 80 },
  { name: 'Machine Learning', level: 85 },
  { name: 'Artificial Intelligence', level: 84 },
  { name: 'SQL Server', level: 86 },
  { name: 'MongoDB', level: 83 },
  { name: 'Data Analysis', level: 87 },
  { name: 'Web Development', level: 88 },
  { name: 'Database Management', level: 85 },
  { name: 'API Testing (Postman)', level: 80 },
];

export const SOFT_SKILLS = [
  { name: 'Problem Solving', level: 92 },
  { name: 'Team Collaboration', level: 88 },
  { name: 'Communication', level: 85 },
  { name: 'Critical Thinking', level: 90 },
  { name: 'Time Management', level: 87 },
];

export const PROJECTS = [
  {
    id: 'hostel',
    title: 'AI-Based Student Hostel Management System',
    subtitle: 'Intelligent room booking & accommodation platform',
    year: 2026,
    category: 'ai',
    featured: true,
    role: 'Full-Stack Developer · AI Integration',
    description:
      'An intelligent hostel management system for student room listings, accommodations, and end-to-end booking workflows — powered by AI recommendations and real-time data insights.',
    highlights: [
      'Developed a full platform for room listings, accommodations, and booking processes',
      'Implemented AI-based room recommendations tailored to student preferences and availability',
      'Built web frontend and backend with React and Django, integrated with SQL Server',
      'Delivered a mobile companion app using the MERN stack (MongoDB, Express, React, Node.js)',
      'Performed API testing and validation using Postman across all service endpoints',
      'Generated data-driven insights for occupancy trends and booking optimization',
    ],
    technologies: [
      'Python',
      'Django',
      'React',
      'MongoDB',
      'Express.js',
      'Node.js',
      'SQL Server',
      'Artificial Intelligence',
      'Postman',
    ],
    github: '',
    demo: '',
  },
  {
    id: 'stock',
    title: 'Stock Management System',
    year: 2025,
    category: 'software',
    description:
      'Stock management platform for inventory and stock transactions with real-time tracking and reporting.',
    highlights: [
      'Inventory and stock transaction management',
      'Software engineering and database design principles',
      'MS SQL Server for real-time tracking and reporting',
    ],
    technologies: ['Java', 'MS SQL Server', 'Software Engineering'],
  },
  {
    id: 'forecast',
    title: 'Sales Forecasting Model',
    year: 2025,
    category: 'ml',
    description:
      'Machine learning-based sales forecasting model with preprocessing, feature engineering, and model training for business insights.',
    highlights: [
      'Data preprocessing and feature engineering',
      'Model training and evaluation',
      'Data-driven insights for business decision-making',
    ],
    technologies: ['Python', 'Machine Learning', 'Data Analysis'],
  },
];

export const PROJECT_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI / ML' },
  { id: 'software', label: 'Software' },
  { id: 'ml', label: 'Data Science' },
];

export const SERVICES = [
  {
    icon: 'brain',
    title: 'AI/ML Solution Development',
    description:
      'Intelligent systems, predictive models, and data-driven automation tailored to real-world problems.',
  },
  {
    icon: 'web',
    title: 'Web Application Development',
    description:
      'Modern, responsive web applications with clean architecture and engaging user experiences.',
  },
  {
    icon: 'stack',
    title: 'Full-Stack Development',
    description:
      'End-to-end solutions from database design to polished frontends using React, Django, and MERN.',
  },
  {
    icon: 'database',
    title: 'Database Design & Management',
    description:
      'Relational and NoSQL database design, optimization, and integration with SQL Server and MongoDB.',
  },
  {
    icon: 'chart',
    title: 'Data Analysis Solutions',
    description:
      'Exploratory analysis, visualization, and actionable insights to support smarter decisions.',
  },
];
