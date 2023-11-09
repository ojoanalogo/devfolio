export interface WorkExperience {
  listIcon: string;
  title: string;
  website: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  active: boolean;
}

export const workExperienceData: Array<WorkExperience> = [
  {
    listIcon: "🏘️",
    title: "Backend engineer",
    company: "DD360.mx",
    website: "https://monopolio.com.mx",
    location: "México",
    startDate: "2022",
    endDate: "Actual",
    description: `Creación y optimización de APIs con un enfoque en Microservicios.
      Soluciones para clusterización de datos y procesamiento de grandes volúmenes de información.
      Trabajé en documentación y optimización de pipelines de CI/CD.
      Desarrollo de pipelines de automatización de carga de datos a través de funciones serverless.`,
    active: true,
    technologies: [
      "AWS",
      "Node.js",
      "Serverless",
      "PostgreSQL",
      "Terraform",
      "GitLab CI/CD",
      "DynamoDB",
      "SQS/SNS",
    ],
  },
  {
    listIcon: "🏒",
    title: "Backend engineer",
    company: "champs.app",
    website: "https://champs.app",
    location: "California, E.U",
    startDate: "2021",
    endDate: "2022",
    description: `Migración de backend monolitico a un mono-repo de microservicios haciendo uso de tecnologías del ecosistema de Google Cloud, implementé sistemas de comunicación vía email y sistemas similares a los de una red social.`,
    active: false,
    technologies: [
      "Google Cloud",
      "Firebase",
      "Firestore",
      "Microservicios",
      "TypeScript",
      "Flutter",
      "SendGrid",
    ],
  },
];
