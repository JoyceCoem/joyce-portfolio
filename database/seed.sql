USE JoycePortfolioDb;
GO

-- ================= PROJECTS =================
INSERT INTO dbo.Projects (Slug, Title, Subtitle, Problem, Solution, Architecture, MyRole, Technologies, Outcome, LessonsLearned, GitHubUrl, DemoUrl, DisplayOrder)
VALUES
('phishing-simulation', 'Phishing Simulation',
 'Companion platform to final-year research',
 'Phishing remains one of the most effective attack vectors because it exploits human behaviour rather than technical vulnerabilities. Most awareness training is theoretical, so few people experience what a realistic phishing attempt actually looks like until it is too late.',
 'A web-based phishing simulation platform, built as a team, designed to safely expose users to realistic phishing scenarios and measure awareness in a controlled environment.',
 'Stack finalised soon - update pending once the team confirms the build.',
 'Led research and design of the phishing scenarios themselves - crafting realistic attack pretexts and identifying the psychological and technical patterns that make phishing effective.',
 'Team project, Design-Based Research',
 'Ongoing - part of final-year research project.',
 'Designing the attack scenarios required thinking like an attacker first: understanding urgency, authority, and trust cues before designing content that meaningfully tests them.',
 NULL, NULL, 1),

('nutritech', 'NutriTech',
 'TCS Sustainathon - Top 10 Finish',
 'Malnutrition and food access remain persistent challenges in under-resourced communities, especially where school nutrition programmes and local farming are not well connected.',
 'NutriTech connects farms to schools and tracks malnutrition, so interventions can be targeted where they are needed most - combining Farm2School sourcing with nutrition monitoring.',
 'React frontend, Node.js backend.',
 'Team Lead - coordinated the team under time pressure, kept scope realistic, and brought everyone''s work together into a coherent product by submission.',
 'React, Node.js',
 'Top 10 finish at the TCS Sustainathon, out of a competitive field tackling UN Sustainable Development Goals.',
 'The technical build was only half the challenge - pitching to judges taught me that a great solution means nothing if you cannot communicate the why clearly under time pressure.',
 NULL, NULL, 2),

('ai-mental-health-companion', 'AI Mental Health Companion',
 'TCS Sustainathon - Results Pending',
 'Mental health support is often reactive rather than proactive - people frequently do not recognise warning signs until a crisis point, especially where access to professional care is limited.',
 'An AI-powered mental health companion combining a predictive system with a conversational chatbot, designed to support users continuously while flagging concerning patterns early.',
 'To be finalised.',
 'Worked on the predictive model and AI logic - interpreting user input patterns to inform the system''s supportive responses.',
 'AI/ML, chatbot logic',
 'Results pending - ongoing TCS Sustainathon submission.',
 'Balancing predictive accuracy with sensitivity when working with mental health data responsibly.',
 NULL, NULL, 3),

('prashad-cafe', 'Prashad Cafe Website',
 'Freelance Client Project - Full Redesign',
 'Prashad Cafe''s old site was outdated and no longer reflected the business.',
 'Rebuilt the site from the ground up with a modern, clean design that better represents the brand and gives customers a smoother experience, including menu, gallery, catering and online ordering.',
 'Static multi-page site with client-side interactivity.',
 'Solo freelance build - full design and development.',
 'HTML, CSS, JavaScript',
 'Live production site for a real client.',
 'Managing a full freelance rebuild solo, from client requirements through to a live, responsive deployment.',
 NULL, 'https://prashadcafe.com', 4),

('health-connect-mozambique', 'Health Connect Mozambique',
 'A project by Africa, for Africa - 2nd Place, AMECCTECH Hackathon',
 'Mozambique''s health system faces fragmented patient data across multiple systems (SIS-H, SIS-MA, Upscalo), doctors lacking full patient history at the point of care, and a severe health worker shortage (fewer than 1 doctor per 10,000 people).',
 'A centralised health platform built around a unique Central Patient ID linking records across every facility. Combines data integration, a mobile/web digital platform, and a USSD system for areas without internet, so a rural nurse can retrieve results like HIV status by dialing a USSD code on a basic phone.',
 'Central Patient ID; mobile & web app for urban facilities; USSD gateway with mesh-network syncing for rural clinics; satellite internet for remote clinics.',
 'Designed the AI/ML components: smart triage recommendations, predictive stock and supply alerts, maternal and child health reminders, and patient risk analytics.',
 'Python (AI/ML), mobile & web app, USSD gateway integration',
 '2nd Place - AMECCTECH Hackathon.',
 'Designing AI systems for equity - ensuring the smart features still worked for low-connectivity, low-literacy, and non-smartphone users.',
 NULL, NULL, 5),

('cisco-packet-tracer-enterprise-network', 'Cisco Packet Tracer - Enterprise Network',
 'Multi-site enterprise network design',
 'Enterprise networks spanning multiple sites need reliable routing, redundancy, and secured wireless access without single points of failure.',
 'Designed a multi-site enterprise network spanning Johannesburg and Luanda with inter-VLAN routing, OSPF dynamic routing, DHCP failover, HSRP redundancy, and WPA2-secured wireless.',
 'Cisco IOS, VLANs, OSPF, DHCP, HSRP, WPA2.',
 'Solo design and implementation, validated end-to-end using diagnostic commands.',
 'Cisco IOS, VLANs, OSPF, DHCP, WPA2',
 'Fully validated, functioning simulated enterprise network.',
 'Hands-on reinforcement of how routing, redundancy, and security layer together in real enterprise topologies.',
 'https://github.com/JoyceCoem/cisco-packet-tracer', NULL, 6),

('python-http-requests-practice', 'Python HTTP Requests Practice',
 'Backend & API fundamentals',
 'Understanding how HTTP methods, status codes, and headers behave in practice is core to backend and support engineering work.',
 'A hands-on exploration of HTTP methods (GET, POST, PUT, DELETE) using Python''s requests library, covering status codes, headers, and JSON parsing through real API interaction.',
 'Python scripts calling REST APIs.',
 'Solo practice project.',
 'Python, HTTP, REST API, JSON',
 'Practical fluency with real API interaction patterns.',
 'Built groundwork directly applicable to technical support and backend engineering roles.',
 'https://github.com/JoyceCoem/python-http-requests-practice', NULL, 7),

('devconnect', 'DevConnect',
 'Academic Social Platform (formerly Richfield Connect)',
 'Students often lack a simple, centralised place to see academic events, connect with peers, and share updates.',
 'A multi-page academic social platform featuring user profiles, a content feed, and event listings, with client-side persistence.',
 'Client-side data persistence via localStorage; modular JavaScript/jQuery structure.',
 'Solo academic project.',
 'HTML, CSS, JavaScript, jQuery, localStorage',
 'Fully functioning multi-page prototype.',
 'Applied modular JavaScript/jQuery and iterative testing practices to a multi-page application.',
 'https://github.com/JoyceCoem/DevConnect', NULL, 8);
GO

-- ================= ACHIEVEMENTS =================
INSERT INTO dbo.Achievements (Title, Description, Category, DateLabel, DisplayOrder)
VALUES
('2nd Place - AMECCTECH Hackathon', 'Health Connect Mozambique - an AI-integrated health platform for fragmented healthcare systems.', 'Hackathon', NULL, 1),
('Top 10 - TCS Sustainathon', 'NutriTech - Farm2School and malnutrition tracking. Served as Team Lead.', 'Hackathon', NULL, 2),
('TCS Sustainathon (ongoing)', 'AI Mental Health Companion - Predictive Model / AI Logic.', 'Hackathon', NULL, 3),
('SRC Representative', 'Employability & Academics Member, Eduvos SRC.', 'Leadership', 'Dec 2024 - Present', 4),
('Korbistat Job Shadow', 'Shadowed professionals across Agile delivery, DevOps, QA, Mapping, Innovation, and Content Quality teams.', 'Experience', '1-2 July 2026', 5),
('YES Summit', 'Conference attendee.', 'Conference', NULL, 6),
('Microsoft Cloud & AI Frontier Week', 'Transform Data Silos into AI Fuel: Build an End-to-End Data Foundation.', 'Conference', NULL, 7),
('Humanity Workshop: Navigating Career Challenges Beyond University', 'Hosted and prepared as SRC Representative - a panel-style workshop connecting students with professionals on career awareness, job-market advice, networking, and community building beyond graduation.', 'Workshop', NULL, 8);
GO

-- ================= RESEARCH =================
INSERT INTO dbo.ResearchProjects (Slug, Title, Context, Supervisor, [Abstract], Objectives, Methodology, Technologies, KeyFindings, DisplayOrder)
VALUES
('phishing-digital-era', 'Phishing in the Digital Era: Awareness and Attack Simulation',
 'Final-Year Group Research Project (Group 2) - ITDMA3-22, BSc IT: Security & Network Engineering, Eduvos. Team: Joyce Koloando Coem, Nuhaa Dollie, Ethan Bright, Nikhil Patel.',
 'Wingsoflord Ngilazi',
 'Phishing remains one of the most damaging cyber threats because it targets human behaviour rather than technical weaknesses. Standard awareness training struggles to create lasting change, with user vigilance typically decaying within four to six months, especially as AI-generated phishing becomes more convincing. This research uses Design-Based Research (DBR) to design, build, and iteratively improve a localised phishing simulator that gives users hands-on, experiential practice.',
 '1. Design a simulation framework that replicates modern phishing techniques for realistic awareness training. 2. Develop a working prototype that simulates phishing attacks and records how users respond. 3. Evaluate whether the simulation measurably improves users'' ability to identify and avoid phishing over time.',
 'Pragmatist, Design-Based Research (DBR) approach - iterative build, test, and refine cycles with real users, combining behavioural data with qualitative feedback, analysed through mixed methods.',
 'Design-Based Research, mixed-methods analysis',
 'Pending - study in progress.',
 1),

('monolith-to-microservices-attack-surface', 'Attack Surface Expansion in Monolith-to-Microservices Migration: A Security Threat Analysis',
 'Coursework Research Project - ITDMA3-22: Research Design and Methodology, Department of Security and Network Engineering, Eduvos.',
 NULL,
 'The transition from monolithic to microservices architecture is increasingly adopted by enterprises seeking scalability, agility, and independent deployability. However, this shift substantially expands the attack surface, multiplying exposed API endpoints, distributing trust boundaries across inter-service communication, and introducing container and orchestration vulnerabilities. This paper presents a systematic literature review of ten peer-reviewed sources (2020-2025), identifying five primary threat categories introduced during migration.',
 'Identify and classify new attack surfaces introduced during monolith-to-microservices migration across five threat categories: inter-service communication, API exposure, container/orchestration misconfiguration, IAM failures, and hybrid migration-state risks.',
 'Systematic literature review of 10 peer-reviewed sources published 2020-2025.',
 'Literature review, security threat modelling',
 'Zero Trust Architecture, the Strangler Fig migration pattern with security checkpoints, and DevSecOps integration are the most effective mitigations identified. A significant research gap exists: no existing study adequately models attack surface behaviour during the transitional hybrid state, when monolith and microservices components coexist.',
 2);
GO

-- ================= CERTIFICATIONS =================
INSERT INTO dbo.Certifications (Title, Issuer, CredentialUrl, InProgress, DisplayOrder)
VALUES
('NextGen Mastery Programme - Understanding Plant Genetic Transformation and GMOs (Applied Science)', 'Eduvos', NULL, 0, 1),
('SQL Certificate', 'Jobox', NULL, 0, 2),
('Coding Fundamentals Certificate', 'Jobox', NULL, 0, 3),
('Vue.js Certificate', 'Jobox', NULL, 0, 4),
('Logical Reasoning Certificate', 'Jobox', NULL, 0, 5);
GO
