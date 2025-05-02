import { ProfileData } from './types'

const profileData: ProfileData = {
  "identity": {
    "name": "Rogério Moreira",
    "location": "Porto, Portugal",
    "email": "r@rgllm.com",
    "phone": "+351 918821769",
    "website": "https://rgllm.com",
    "github": "https://github.com/rgllm/",
    "linkedin": "https://www.linkedin.com/in/rgllm",
    "languages": {
      "pt": "native",
      "en": "fluent"
    }
  },
  "experience": [
    {
      "role": "Senior Software Engineer",
      "company": "Flecto.io",
      "years": "2025–present",
      "highlights": [
        "Led frontend platform architecture (React, Next.js, Vercel)",
        "Owned observability and performance conventions",
        "Defined CI/CD strategies reducing deploy friction",
        "Mentored engineers and shaped engineering culture"
      ]
    },
    {
      "role": "Software Engineer",
      "company": "Blip.pt (Flutter/Betfair)",
      "years": "2024",
      "highlights": [
        "Worked on high-scale betting UIs across web and mobile",
        "Improved GraphQL integrations and component strategy"
      ]
    },
    {
      "role": "Software Engineer (Contractor)",
      "company": "Trainline",
      "years": "2020–2024",
      "highlights": [
        "Built and maintained React-based web apps for EU/UK markets",
        "Developed white-label solutions and booking flows",
        "Contributed to Trainline's design system",
        "Worked with Express.js, GraphQL, Docker, AWS"
      ]
    },
    {
      "role": "Software Engineer",
      "company": "Mindera",
      "years": "2020–2024",
      "highlights": [
        "Frontend engineer for external clients",
        "Led FE interviews and mentored interns"
      ]
    },
    {
      "role": "Front-End Developer",
      "company": "Pixelmatters",
      "years": "2018–2020",
      "highlights": [
        "Worked on apps for clients like DocSend, Rubrik, re:infer"
      ]
    }
  ],
  "education": {
    "institution": "Universidade do Minho",
    "location": "Braga, Portugal",
    "degrees": [
      {
        "title": "M.S in Software Engineering",
        "specializations": [
          "Intelligent Systems",
          "Software Systems Engineering"
        ]
      },
      {
        "title": "B.S in Software Engineering"
      }
    ]
  },
  "skills": {
    "languages": [
      "TypeScript",
      "JavaScript",
      "Python"
    ],
    "frontend": [
      "React",
      "React Native",
      "NextJS"
    ],
    "backend": [
      "Node.js",
      "GraphQL"
    ],
    "infra": [
      "Docker",
      "AWS"
    ],
    "testing": [
      "Jest",
      "React Testing Library",
      "Playwright"
    ],
    "practices": [
      "Design Systems",
      "A/B Testing",
      "Internationalization",
      "Agile",
      "Git"
    ]
  },
  "meta": {
    "experience_years": "7+",
    "preferences": [
      "Product-led",
      "Fast-paced",
      "High impact"
    ],
    "mentorship": [
      "Mentoring",
      "Onboarding",
      "Thesis supervision"
    ],
    "process": [
      "CI/CD",
      "Engineering process definition",
      "Hiring"
    ],
    "culture": [
      "Engineering norms",
      "Knowledge sharing",
      "Cross-team alignment"
    ]
  },
  "projects": [
    {
      "name": "Jornal O Minho",
      "url": "https://ominho.pt"
    }
  ],
  "publications": [
    {
      "title": "Building an imagining-based research platform for the implementation of experiments with brain connectivity data",
      "url": "https://repositorium.sdum.uminho.pt"
    }
  ]
}

export function getProfileData(): ProfileData {
  return profileData
}
