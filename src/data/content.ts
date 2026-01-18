import type { SiteContent } from '@/lib/types';

export const siteContent: SiteContent = {
  profile: {
    name: "Samuel LaFell",
    pronouns: "he/him",
    tagline: "Data Engineer & Solutions Architect",
    location: "Raleigh, NC",
    timezone: "EST",
    avatarUrl: "/avatar.svg",
  },

  socials: [
    {
      platform: 'github',
      url: 'https://github.com/samlafell',
      label: 'GitHub',
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/samlafell',
      label: 'LinkedIn',
    },
    {
      platform: 'email',
      url: 'mailto:datasolutions@samlafell.com',
      label: 'Email',
    },
  ],

  about: {
    headline: "Data Engineer with 5+ years of experience building and optimizing data pipelines across enterprise environments.",
    paragraphs: [
      "I specialize in translating complex business problems into scalable architectures leveraging Python, cloud services, and modern data platforms. My background spans Solutions Architecture, Data Science, and Analytics Engineering, with a proven track record in marketing analytics, AI implementation, and architectural governance.",
    ],
    bullets: [
      "Cloud-native data architectures (Snowflake, AWS, Azure)",
      "AI-enabled FinOps & automation solutions",
      "Scalable ETL/ELT pipeline design",
    ],
  },

  // Simplified skill categories per design brief
  skillCategories: [
    {
      name: "Languages",
      skills: [
        { name: "Python", proficiency: "expert" },
        { name: "SQL", proficiency: "expert" },
        { name: "Scala", proficiency: "proficient" },
        { name: "Rust", proficiency: "familiar" },
      ],
    },
    {
      name: "Data Stack",
      skills: [
        { name: "Snowflake", proficiency: "expert" },
        { name: "Databricks", proficiency: "expert" },
        { name: "dbt", proficiency: "expert" },
        { name: "Airflow", proficiency: "expert" },
        { name: "Spark", proficiency: "expert" },
        { name: "Kafka", proficiency: "proficient" },
      ],
    },
    {
      name: "Cloud & Systems",
      skills: [
        { name: "AWS (S3, IAM, Athena, SageMaker)", proficiency: "expert" },
        { name: "Azure", proficiency: "proficient" },
        { name: "Delta Lake", proficiency: "expert" },
        { name: "Data Modeling", proficiency: "expert" },
      ],
    },
    {
      name: "Infrastructure",
      skills: [
        { name: "Docker", proficiency: "expert" },
        { name: "Git", proficiency: "expert" },
        { name: "CI/CD", proficiency: "expert" },
        { name: "Terraform", proficiency: "proficient" },
      ],
    },
  ],

  certifications: [
    {
      name: "Snowflake Advanced Architect",
      issuer: "Snowflake",
      dateObtained: "2024-10",
      credentialUrl: "https://www.credly.com/badges/your-badge",
    },
    {
      name: "Snowflake SnowPro Core Certification",
      issuer: "Snowflake",
      dateObtained: "2023-06",
      credentialUrl: "https://www.credly.com/badges/your-badge",
    },
    {
      name: "AWS Solutions Architect – Professional",
      issuer: "Amazon Web Services",
      dateObtained: "2024-01",
      expirationDate: "2027-01",
      credentialUrl: "https://aws.amazon.com/verification",
    },
    {
      name: "Databricks Certified Data Engineer Associate",
      issuer: "Databricks",
      dateObtained: "2024-02",
      credentialUrl: "https://credentials.databricks.com/your-credential",
    },
  ],

  projects: {
    subhead: "Selected systems and initiatives designed for scale and real-world impact.",
    entries: [
      {
        title: "AI-Enabled FinOps System",
        description: "Designed and led the architecture for an enterprise-wide cloud cost visibility platform at Snowflake. Integrated human-in-the-loop workflows and governance controls to drive better decision-making.",
        type: "Data Platform",
        techStack: ["Snowflake", "Snowpark", "Python", "AI/ML"],
        scale: "Enterprise-wide",
        impact: "Improved cost visibility and decision-making for leadership",
        isPublic: false,
        featured: true,
      },
      {
        title: "Saturdata Podcast",
        description: "Creator and host of Saturdata, a podcast and platform focused on data engineering and analytics lessons for newcomers to the field.",
        type: "Education",
        techStack: ["Content Creation", "Community Building"],
        liveUrl: "https://saturdata.github.io/",
        isPublic: true,
        featured: true,
      },
      {
        title: "Full Stack Data Workshop",
        description: "Designed and taught RTP’s only Learn & Build-style data workshops, covering end-to-end Data Engineering and Analytics curriculum.",
        type: "Education",
        techStack: ["Python", "SQL", "Data Modeling", "ETL"],
        scale: "Local Community",
        impact: "Taught 20+ newcomers foundational data skills",
        isPublic: false,
        featured: true,
      },
    ]
  },

  experience: {
    subhead: "Proven track record of delivering measurable impact at scale.",
    entries: [
      {
        company: "Snowflake",
        companyUrl: "https://snowflake.com",
        role: "Solutions Architect",
        startDate: "2024-10",
        location: "Menlo Park, CA (Remote)",
        achievements: [
          {
            description: "Built multi-threaded Snowflake functions for PGP decryption and GZIP decompression leveraging Snowpark Python",
            metric: "Optimized Ingestion",
          },
          {
            description: "Guided large-scale Java/Oracle Exadata migrations to Snowflake for major enterprise clients",
            metric: "Enterprise Migration",
          },
          {
            description: "Developed internal Cursor IDE training and dbt platform migration frameworks for Professional Services leadership",
            metric: "Architectural Governance",
          },
        ],
        techStack: ["Snowflake", "Snowpark", "Python", "Java", "Oracle", "dbt"],
      },
      {
        company: "IQVIA",
        companyUrl: "https://iqvia.com",
        role: "Staff Architect",
        startDate: "2023-08",
        endDate: "2024-10",
        location: "Bridgewater, NJ (Remote)",
        achievements: [
          {
            description: "Reengineered legacy Scala/Hadoop backend into efficient Snowpark Python processes",
            metric: "40% Runtime Reduction",
          },
          {
            description: "Architected a new data model from source systems with strict typing and 80+ pages of specification documentation",
            metric: "Data Quality",
          },
          {
            description: "Served as technical lead across multiple systems, ensuring alignment with enterprise architectural guardrails",
            metric: "Technical Leadership",
          },
        ],
        techStack: ["Scala", "Hadoop", "Hive", "Snowflake", "Snowpark", "Python"],
      },
      {
        company: "Ameriprise Financial",
        companyUrl: "https://ameriprise.com",
        role: "Data Science Manager",
        startDate: "2023-02",
        endDate: "2023-08",
        location: "Minneapolis, MN (Remote)",
        achievements: [
          {
            description: "Optimized SQL and Python queries in Dataiku pipelines, significantly reducing scanned data volume in Athena",
            metric: "75% Reduction in Data Scanned",
          },
          {
            description: "Automated ML scoring and reporting pipelines leveraging AWS SageMaker, S3, and Athena for continuous model feedback",
            metric: "Continuous ML",
          },
        ],
        techStack: ["Python", "SQL", "Dataiku", "AWS SageMaker", "AWS Athena", "S3"],
      },
      {
        company: "PPL Corporation",
        companyUrl: "https://pplweb.com",
        role: "Data Scientist",
        startDate: "2022-06",
        endDate: "2023-01",
        location: "Allentown, PA (Remote)",
        achievements: [
          {
            description: "Led a team of three to design a Python-based statistical clustering solution for critical infrastructure optimization",
            metric: "Statistical Testing",
          },
          {
            description: "Standardized engineering practices including Cookiecutter, pre-commit hooks, and unit testing across the DS team",
            metric: "Engineering Excellence",
          },
        ],
        techStack: ["Python", "Databricks", "Azure", "Git", "Unit Testing"],
      },
      {
        company: "Capgemini",
        companyUrl: "https://capgemini.com",
        role: "Data Science Consultant",
        startDate: "2022-01",
        endDate: "2022-06",
        location: "Atlanta, GA (Remote)",
        achievements: [
          {
            description: "Optimized multi-table joins across billions of rows by analyzing Spark execution plans and Delta Lake commands",
            metric: "Big Data Optimization",
          },
          {
            description: "Deployed an NLP-based Streamlit dashboard via Docker, automating analysis of large-scale employee feedback datasets",
            metric: "Process Automation",
          },
        ],
        techStack: ["Spark", "Databricks", "Delta Lake", "Python", "Docker", "Streamlit"],
      },
      {
        company: "Terminix",
        companyUrl: "https://terminix.com",
        role: "Data Scientist",
        startDate: "2020-07",
        endDate: "2022-01",
        location: "Memphis, TN (Remote)",
        achievements: [
          {
            description: "Discovered $30M in overstated revenue through deep SQL audit, saving $2.3M in annual ad spend",
            metric: "$2.3M Annual Savings",
          },
          {
            description: "Built time-series forecasting models using Facebook's Prophet to guide digital strategy and indexed demand data",
            metric: "Strategic Analytics",
          },
        ],
        techStack: ["SQL", "SSMS", "Python", "Prophet", "PowerBI"],
      },
    ]
  },

  articles: [],

  contact: {
    email: "datasolutions@samlafell.com",
    ctaText: "Get in Touch",
    headline: "Let's Build Something Together",
    description: "I'm always interested in hearing about new opportunities and challenging data problems.",
  },

  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
  ],
};

export default siteContent;
