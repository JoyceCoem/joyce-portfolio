import { Project, Achievement, ResearchProject, Certification } from '../../shared/models';

/**
 * Local fallback data — mirrors database/seed.sql exactly.
 * Used when the ASP.NET Core API is unavailable (e.g. previewing
 * the frontend alone before the backend/SQL Server is running).
 */

export const FALLBACK_PROJECTS: Project[] = [
  {
    id: 1, slug: 'phishing-simulation', title: 'Phishing Simulation',
    subtitle: 'Companion platform to final-year research',
    problem: 'Phishing remains one of the most effective attack vectors because it exploits human behaviour rather than technical vulnerabilities. Most awareness training is theoretical, so few people experience what a realistic phishing attempt actually looks like until it is too late.',
    solution: 'A web-based phishing simulation platform, built as a team, designed to safely expose users to realistic phishing scenarios and measure awareness in a controlled environment.',
    architecture: 'Stack finalised soon - update pending once the team confirms the build.',
    myRole: 'Led research and design of the phishing scenarios themselves - crafting realistic attack pretexts and identifying the psychological and technical patterns that make phishing effective.',
    technologies: 'Team project, Design-Based Research',
    outcome: 'Ongoing - part of final-year research project.',
    lessonsLearned: 'Designing the attack scenarios required thinking like an attacker first: understanding urgency, authority, and trust cues before designing content that meaningfully tests them.',
    displayOrder: 1
  },
  {
    id: 2, slug: 'nutritech', title: 'NutriTech',
    subtitle: 'TCS Sustainathon - Top 10 Finish',
    problem: 'Malnutrition and food access remain persistent challenges in under-resourced communities, especially where school nutrition programmes and local farming are not well connected.',
    solution: 'NutriTech connects farms to schools and tracks malnutrition, so interventions can be targeted where they are needed most - combining Farm2School sourcing with nutrition monitoring.',
    architecture: 'React frontend, Node.js backend.',
    myRole: 'Team Lead - coordinated the team under time pressure, kept scope realistic, and brought everyone\'s work together into a coherent product by submission.',
    technologies: 'React, Node.js',
    outcome: 'Top 10 finish at the TCS Sustainathon, out of a competitive field tackling UN Sustainable Development Goals.',
    lessonsLearned: 'The technical build was only half the challenge - pitching to judges taught me that a great solution means nothing if you cannot communicate the why clearly under time pressure.',
    displayOrder: 2
  },
  {
    id: 3, slug: 'ai-mental-health-companion', title: 'AI Mental Health Companion',
    subtitle: 'TCS Sustainathon - Results Pending',
    problem: 'Mental health support is often reactive rather than proactive - people frequently do not recognise warning signs until a crisis point, especially where access to professional care is limited.',
    solution: 'An AI-powered mental health companion combining a predictive system with a conversational chatbot, designed to support users continuously while flagging concerning patterns early.',
    architecture: 'To be finalised.',
    myRole: 'Worked on the predictive model and AI logic - interpreting user input patterns to inform the system\'s supportive responses.',
    technologies: 'AI/ML, chatbot logic',
    outcome: 'Results pending - ongoing TCS Sustainathon submission.',
    lessonsLearned: 'Balancing predictive accuracy with sensitivity when working with mental health data responsibly.',
    displayOrder: 3
  },
  {
    id: 4, slug: 'prashad-cafe', title: 'Prashad Cafe Website',
    subtitle: 'Freelance Client Project - Full Redesign',
    problem: 'Prashad Cafe\'s old site was outdated and no longer reflected the business.',
    solution: 'Rebuilt the site from the ground up with a modern, clean design that better represents the brand and gives customers a smoother experience, including menu, gallery, catering and online ordering.',
    architecture: 'Static multi-page site with client-side interactivity.',
    myRole: 'Solo freelance build - full design and development.',
    technologies: 'HTML, CSS, JavaScript',
    outcome: 'Live production site for a real client.',
    lessonsLearned: 'Managing a full freelance rebuild solo, from client requirements through to a live, responsive deployment.',
    demoUrl: 'https://prashadcafe.com',
    displayOrder: 4
  },
  {
    id: 5, slug: 'health-connect-mozambique', title: 'Health Connect Mozambique',
    subtitle: 'A project by Africa, for Africa - 2nd Place, AMECCTECH Hackathon',
    problem: 'Mozambique\'s health system faces fragmented patient data across multiple systems (SIS-H, SIS-MA, Upscalo), doctors lacking full patient history at the point of care, and a severe health worker shortage (fewer than 1 doctor per 10,000 people).',
    solution: 'A centralised health platform built around a unique Central Patient ID linking records across every facility. Combines data integration, a mobile/web digital platform, and a USSD system for areas without internet, so a rural nurse can retrieve results like HIV status by dialing a USSD code on a basic phone.',
    architecture: 'Central Patient ID; mobile & web app for urban facilities; USSD gateway with mesh-network syncing for rural clinics; satellite internet for remote clinics.',
    myRole: 'Designed the AI/ML components: smart triage recommendations, predictive stock and supply alerts, maternal and child health reminders, and patient risk analytics.',
    technologies: 'Python (AI/ML), mobile & web app, USSD gateway integration',
    outcome: '2nd Place - AMECCTECH Hackathon.',
    lessonsLearned: 'Designing AI systems for equity - ensuring the smart features still worked for low-connectivity, low-literacy, and non-smartphone users.',
    displayOrder: 5
  },
  {
    id: 6, slug: 'cisco-packet-tracer-enterprise-network', title: 'Cisco Packet Tracer - Enterprise Network',
    subtitle: 'Multi-site enterprise network design',
    problem: 'Enterprise networks spanning multiple sites need reliable routing, redundancy, and secured wireless access without single points of failure.',
    solution: 'Designed a multi-site enterprise network spanning Johannesburg and Luanda with inter-VLAN routing, OSPF dynamic routing, DHCP failover, HSRP redundancy, and WPA2-secured wireless.',
    architecture: 'Cisco IOS, VLANs, OSPF, DHCP, HSRP, WPA2.',
    myRole: 'Solo design and implementation, validated end-to-end using diagnostic commands.',
    technologies: 'Cisco IOS, VLANs, OSPF, DHCP, WPA2',
    outcome: 'Fully validated, functioning simulated enterprise network.',
    lessonsLearned: 'Hands-on reinforcement of how routing, redundancy, and security layer together in real enterprise topologies.',
    gitHubUrl: 'https://github.com/JoyceCoem/cisco-packet-tracer',
    displayOrder: 6
  },
  {
    id: 7, slug: 'python-http-requests-practice', title: 'Python HTTP Requests Practice',
    subtitle: 'Backend & API fundamentals',
    problem: 'Understanding how HTTP methods, status codes, and headers behave in practice is core to backend and support engineering work.',
    solution: 'A hands-on exploration of HTTP methods (GET, POST, PUT, DELETE) using Python\'s requests library, covering status codes, headers, and JSON parsing through real API interaction.',
    architecture: 'Python scripts calling REST APIs.',
    myRole: 'Solo practice project.',
    technologies: 'Python, HTTP, REST API, JSON',
    outcome: 'Practical fluency with real API interaction patterns.',
    lessonsLearned: 'Built groundwork directly applicable to technical support and backend engineering roles.',
    gitHubUrl: 'https://github.com/JoyceCoem/python-http-requests-practice',
    displayOrder: 7
  },
  {
    id: 8, slug: 'devconnect', title: 'DevConnect',
    subtitle: 'Academic Social Platform (formerly Richfield Connect)',
    problem: 'Students often lack a simple, centralised place to see academic events, connect with peers, and share updates.',
    solution: 'A multi-page academic social platform featuring user profiles, a content feed, and event listings, with client-side persistence.',
    architecture: 'Client-side data persistence via localStorage; modular JavaScript/jQuery structure.',
    myRole: 'Solo academic project.',
    technologies: 'HTML, CSS, JavaScript, jQuery, localStorage',
    outcome: 'Fully functioning multi-page prototype.',
    lessonsLearned: 'Applied modular JavaScript/jQuery and iterative testing practices to a multi-page application.',
    gitHubUrl: 'https://github.com/JoyceCoem/DevConnect',
    displayOrder: 8
  }
];

export const FALLBACK_ACHIEVEMENTS: Achievement[] = [
  { id: 1, title: '2nd Place - AMECCTECH Hackathon', description: 'Health Connect Mozambique - an AI-integrated health platform for fragmented healthcare systems.', category: 'Hackathon', displayOrder: 1 },
  { id: 2, title: 'Top 10 - TCS Sustainathon', description: 'NutriTech - Farm2School and malnutrition tracking. Served as Team Lead.', category: 'Hackathon', displayOrder: 2 },
  { id: 3, title: 'TCS Sustainathon (ongoing)', description: 'AI Mental Health Companion - Predictive Model / AI Logic.', category: 'Hackathon', displayOrder: 3 },
  { id: 4, title: 'SRC Representative', description: 'Employability & Academics Member, Eduvos SRC.', category: 'Leadership', dateLabel: 'Dec 2024 - Present', displayOrder: 4 },
  { id: 5, title: 'Korbistat Job Shadow', description: 'Shadowed professionals across Agile delivery, DevOps, QA, Mapping, Innovation, and Content Quality teams.', category: 'Experience', dateLabel: '1-2 July 2026', displayOrder: 5 },
  { id: 6, title: 'YES Summit', description: 'Conference attendee.', category: 'Conference', displayOrder: 6 },
  { id: 7, title: 'Microsoft Cloud & AI Frontier Week', description: 'Transform Data Silos into AI Fuel: Build an End-to-End Data Foundation.', category: 'Conference', displayOrder: 7 },
  { id: 8, title: 'Humanity Workshop: Navigating Career Challenges Beyond University', description: 'Hosted and prepared as SRC Representative - a panel-style workshop connecting students with professionals on career awareness, job-market advice, networking, and community building beyond graduation.', category: 'Workshop', displayOrder: 8 }
];

export const FALLBACK_RESEARCH: ResearchProject[] = [
  {
    id: 1, slug: 'phishing-digital-era', title: 'Phishing in the Digital Era: Awareness and Attack Simulation',
    context: 'Final-Year Group Research Project (Group 2) - ITDMA3-22, BSc IT: Security & Network Engineering, Eduvos. Team: Joyce Koloando Coem, Nuhaa Dollie, Ethan Bright, Nikhil Patel.',
    supervisor: 'Wingsoflord Ngilazi',
    abstract: 'Phishing remains one of the most damaging cyber threats because it targets human behaviour rather than technical weaknesses. Standard awareness training struggles to create lasting change, with user vigilance typically decaying within four to six months, especially as AI-generated phishing becomes more convincing. This research uses Design-Based Research (DBR) to design, build, and iteratively improve a localised phishing simulator that gives users hands-on, experiential practice.',
    objectives: '1. Design a simulation framework that replicates modern phishing techniques for realistic awareness training. 2. Develop a working prototype that simulates phishing attacks and records how users respond. 3. Evaluate whether the simulation measurably improves users\' ability to identify and avoid phishing over time.',
    methodology: 'Pragmatist, Design-Based Research (DBR) approach - iterative build, test, and refine cycles with real users, combining behavioural data with qualitative feedback, analysed through mixed methods.',
    technologies: 'Design-Based Research, mixed-methods analysis',
    keyFindings: 'Pending - study in progress.',
    displayOrder: 1
  },
  {
    id: 2, slug: 'monolith-to-microservices-attack-surface', title: 'Attack Surface Expansion in Monolith-to-Microservices Migration: A Security Threat Analysis',
    context: 'Coursework Research Project - ITDMA3-22: Research Design and Methodology, Department of Security and Network Engineering, Eduvos.',
    supervisor: '',
    abstract: 'The transition from monolithic to microservices architecture is increasingly adopted by enterprises seeking scalability, agility, and independent deployability. However, this shift substantially expands the attack surface, multiplying exposed API endpoints, distributing trust boundaries across inter-service communication, and introducing container and orchestration vulnerabilities. This paper presents a systematic literature review of ten peer-reviewed sources (2020-2025), identifying five primary threat categories introduced during migration.',
    objectives: 'Identify and classify new attack surfaces introduced during monolith-to-microservices migration across five threat categories: inter-service communication, API exposure, container/orchestration misconfiguration, IAM failures, and hybrid migration-state risks.',
    methodology: 'Systematic literature review of 10 peer-reviewed sources published 2020-2025.',
    technologies: 'Literature review, security threat modelling',
    keyFindings: 'Zero Trust Architecture, the Strangler Fig migration pattern with security checkpoints, and DevSecOps integration are the most effective mitigations identified. A significant research gap exists: no existing study adequately models attack surface behaviour during the transitional hybrid state, when monolith and microservices components coexist.',
    displayOrder: 2
  }
];

export const FALLBACK_CERTIFICATIONS: Certification[] = [
  { id: 1, title: 'NextGen Mastery Programme - Understanding Plant Genetic Transformation and GMOs (Applied Science)', issuer: 'Eduvos', inProgress: false, displayOrder: 1 },
  { id: 2, title: 'SQL Certificate', issuer: 'Jobox', inProgress: false, displayOrder: 2 },
  { id: 3, title: 'Coding Fundamentals Certificate', issuer: 'Jobox', inProgress: false, displayOrder: 3 },
  { id: 4, title: 'Vue.js Certificate', issuer: 'Jobox', inProgress: false, displayOrder: 4 },
  { id: 5, title: 'Logical Reasoning Certificate', issuer: 'Jobox', inProgress: false, displayOrder: 5 }
];
