/* data.js - Central Source of Truth (CMS-ready structure) */

const PROFILE = {
    name: "Abhijay Salvi",
    role: "Computer Science Student @ Georgia Tech",
    taglines: ["Builder", "Creative", "Entrepreneur", "Visionary"],
    about: {
        intro: "I am a CS student at Georgia Tech with a minor in Math. I specialize in full-stack development, robotics, and AI/ML, aiming to build systems that bridge the gap between complex algorithms and human-centric design.",
        passions: ["AI/ML", "Startups", "Content Creation"],
        interests: ["Traveling", "Lifting", "Tennis", "Cooking & Eating"],
        clubs: ["Startup Exchange", "Big Data Big Impact", "FreShGA"],
        leadership: ["Advisor @ GT Startup Exchange", "Advisor @ GT Big Data Big Impact"],
        randomFacts: ["2nd degree black belt in Taekwondo", "I love to cook", "I can play the alto saxophone"]
    },
    skills: [
        "Python", "Java", "C++", "React", "Node.js", "PyTorch", "AWS", "OpenCV"
    ],
    education: {
        school: "Georgia Institute of Technology",
        degree: "B.S. Computer Science & Math Minor",
        gpa: "3.94/4.00",
        extracurriculars: "Grand Challenges, Startup Exchange, Student Government, Medical Robotics, Big Data Big Impact",
        relevantCoursework: "Object-Oriented Programming, Data Structures, AI, Algorithms, Computer Architecture and Organization, Robotics and Perception, Discrete Math, Linear Algebra",
        achievements: "Faculty and Dean's List"
    }
};

const EXPERIENCE = [
    {
        id: "waresport",
        title: "Chief Technology Officer",
        company: "Waresport",
        dates: "June 2025 - Present",
        summary: "Directed global cross-functional team in iterative product development leading to 0 to 100+ users.",
        details: [
            "Led design and implementation of LLM and AI-based scheduling, resulting in 90% decrease in management time.",
            "Architected full-stack systems and delivered a custom CMS for dynamic content publishing.",
            "Integrated CI/CD pipelines to streamline deployment."
        ],
        tech: ["React", "Node.js", "LLM Integration", "CI/CD"]
    },
    {
        id: "ups",
        title: "Robotics Software Engineering Intern",
        company: "United Parcel Service (UPS)",
        dates: "June 2025 - Aug 2025",
        summary: "Shipped low-latency robot control interfaces and real-time map streaming.",
        details: [
            "Built real-time AI models in Python to detect package overflow using computer vision (95% accuracy).",
            "Integrated scalable backend APIs for last-mile delivery robotics.",
            "Presented technical solutions to C-suite executives."
        ],
        tech: ["Python", "React.js", "Computer Vision", "Azure"]
    },
    {
        id: "performance",
        title: "Software Engineering Intern",
        company: "Performance Services Inc.",
        dates: "Mar 2024 - Aug 2024",
        summary: "Developed backend tooling and RESTful APIs to streamline workflows.",
        details: [
            "Prototyped GPT-based chatbot leveraging NLP techniques and prompt engineering.",
            "Boosted ML pipeline throughput by 150% via algorithmic optimization.",
            "Used FastAPI and Node.js for backend services."
        ],
        tech: ["FastAPI", "Node.js", "Scikit-Learn", "NLP", "Chatbots"]
    }
];

/**
 * Canonical projects list. To add a project: push an object with id, title, dateRange, org,
 * impactStatement, tech, highlights, links (devpost/github), categories, featured,
 * and for detail page: summary, problem, approach, results, outcomes, learnedNextSteps, media.
 * To set featured projects for homepage: set featured: true on up to ~4 projects.
 */
const PROJECTS = [
    {
        id: "project-limbo",
        title: "Project Limbo",
        dateRange: "Feb 2025 – Present",
        org: "Medical Robotics @ Georgia Tech",
        role: "Research Team Member",
        impactStatement: "Responsible AI for user safety; real-time feedback control for improved prosthetic responsiveness.",
        blurb: "Responsible AI for user safety; real-time feedback control for improved prosthetic responsiveness.",
        summary: "Medical robotics research applying responsible AI principles to user safety and real-time feedback control loops for prosthetics.",
        tech: ["Python", "ML", "Embedded Systems", "Simulations", "Real-time Control"],
        highlights: [
            "Responsible AI principles for user safety; real-time feedback control loops.",
            "Real-time Python ML models for EMG classification; improved prosthetic responsiveness.",
            "Agile research team; embedded control systems; simulations."
        ],
        links: { devpost: null, github: null },
        categories: ["Research", "Robotics", "ML/AI"],
        featured: true,
        icon: "🦾",
        description: "Medical robotics research at GT applying responsible AI principles to user safety and real-time feedback control. Built real-time Python ML models for EMG classification to improve prosthetic responsiveness. Work includes embedded control systems and simulations in an agile research team.",
        problem: "Prosthetic devices need safe, responsive control that respects user intent and avoids harmful behaviors.",
        approach: "Apply responsible AI principles and real-time feedback control loops; train ML models for EMG classification and integrate with embedded control systems and simulations.",
        results: "Improved prosthetic responsiveness via real-time EMG classification; rigorous safety-oriented design.",
        outcomes: "Real-time control pipelines; EMG-based classification integrated into feedback loop.",
        learnedNextSteps: "Deepened experience in real-time ML and safety-critical systems. Next: expand to more users and longer-term studies.",
        // media: [],
        sortDate: "2025-02-01"
    },
    {
        id: "ag-forecast",
        title: "Agricultural Predictivity Forecast",
        dateRange: "Sep 2024 – Jan 2025",
        org: "Big Data Big Impact @ Georgia Tech",
        role: "Team Member",
        impactStatement: "Large-scale crop forecasting pipeline; improved yield prediction accuracy by 18%.",
        blurb: "Large-scale crop forecasting pipeline; improved yield prediction accuracy by 18%.",
        summary: "Large-scale pipeline for crop forecasting using satellite time-series and ML classification, improving yield prediction accuracy by 18%.",
        tech: ["Python", "ML", "Satellite Data", "Time-Series", "Feature Engineering"],
        highlights: [
            "Large-scale pipeline for crop forecasting using satellite time-series + ML classification.",
            "Improved yield prediction accuracy by 18% via tuning and feature optimization."
        ],
        links: { devpost: null, github: null },
        categories: ["Research", "Data", "ML/AI"],
        featured: false,
        icon: "🌾",
        description: "Built a large-scale pipeline for crop forecasting using satellite time-series and ML classification. Tuned models and feature optimization led to 18% improvement in yield prediction accuracy.",
        problem: "Accurate, scalable crop yield prediction is critical for food security and supply chain planning.",
        approach: "Ingest satellite time-series data, design ML classification and regression pipelines, and optimize features and hyperparameters.",
        results: "Production-ready forecasting pipeline with 18% improvement in yield prediction accuracy.",
        outcomes: "+18% yield prediction accuracy; scalable pipeline for satellite + ML.",
        learnedNextSteps: "Hands-on with large-scale geospatial ML. Next: integrate more data sources and deploy for stakeholders.",
        // media: [],
        sortDate: "2024-09-01"
    },
    {
        id: "perfectpunch",
        title: "PerfectPunch",
        dateRange: "Feb 2025",
        org: "Hacklytics (2nd Place)",
        role: "Team Lead / Builder",
        impactStatement: "Real-time boxing analysis using computer vision and LLM coaching; hardware-free injury risk insights.",
        blurb: "Real-time boxing analysis using Object Detection and LLM coaching.",
        summary: "AI-driven boxing training system using computer vision and ML for real-time punch analysis, injury risk metrics, and LLM-powered coaching—no wearables required.",
        tech: ["Python", "Django", "OpenCV", "MediaPipe", "PyTorch", "Gemini API", "Taipy", "NumPy", "Pandas"],
        highlights: [
            "Real-time motion tracking with OpenCV and MediaPipe; custom PyTorch model for punch classification.",
            "Injury prevention insights and concussion risk metrics; LLM-powered personalized coaching.",
            "Hardware-free solution—accessible, data-driven training for all fighters."
        ],
        links: { devpost: "https://devpost.com/software/perfectpunch", github: null },
        categories: ["Hackathons", "Computer Vision", "ML/AI"],
        featured: true,
        icon: "🥊",
        description: "PerfectPunch is an AI-driven boxing training system that uses computer vision and machine learning to analyze punch form, speed, accuracy, and injury risk in real-time. We built a custom PyTorch model for punch detection, integrated MediaPipe/OpenCV for motion tracking, and used the Gemini API for RAG-based coaching insights. The Taipy dashboard visualizes reaction time, accuracy, and defensive metrics.",
        problem: "Traditional boxing training relies on subjective coaching; concussions and TBIs are widespread, with high medical costs.",
        approach: "Use OpenCV and MediaPipe for real-time biomechanics, train a custom PyTorch model for punch classification, and add LLM-powered feedback and an interactive Taipy dashboard.",
        results: "Hardware-free, real-time punch analysis and injury risk insights; 2nd place at Hacklytics.",
        outcomes: "Real-time analytics; injury risk metrics; personalized LLM coaching.",
        learnedNextSteps: "Optimizing AI for real-time motion analysis and building custom risk metrics. Next: expand to footwork and multiplayer benchmarks.",
        // media: [],
        sortDate: "2025-02-01"
    },
    {
        id: "surgevue",
        title: "SurgeVue",
        dateRange: "PennApps",
        org: "PennApps (1st Place AR/VR)",
        role: "Team Member",
        impactStatement: "AR overlay for MRI tumor detection; real-time CV and iOS companion.",
        blurb: "AR overlay for MRI tumor detection (PennApps 1st Place AR/VR).",
        summary: "AR overlay for MRI tumor detection with real-time computer vision pipelines and an iOS companion app.",
        tech: ["AR/VR", "Flask", "Computer Vision", "iOS", "Python"],
        highlights: [
            "Real-time CV pipelines for continuous MRI frame analysis.",
            "Flask backend for image streaming; iOS companion app.",
            "1st Place AR/VR track at PennApps."
        ],
        links: { devpost: "https://devpost.com/software/surgikalai", github: null }, // SurgeVue
        categories: ["Hackathons", "AR/VR", "Computer Vision"],
        featured: true,
        icon: "🩺",
        description: "Engineered real-time computer vision pipelines for continuous MRI frame analysis. Created Flask backend for image streaming and an iOS companion app. Won 1st Place in AR/VR at PennApps.",
        problem: "Surgeons need intuitive, real-time visualization of MRI-derived tumor data in the operating context.",
        approach: "Build real-time CV pipelines for MRI frames, Flask backend for streaming, and AR overlay with iOS app.",
        results: "AR overlay that surfaces tumor detection in real time; 1st Place AR/VR.",
        outcomes: "Real-time MRI analysis in AR; iOS app for clinical workflow.",
        learnedNextSteps: "Shipping AR + CV under time pressure. Next: clinical validation and accuracy studies.",
        // media: [],
        sortDate: "2024-01-01"
    },
    {
        id: "haven",
        title: "HAVEN",
        dateRange: "Hackathon",
        org: "Hazard Alert & Visual Emergency Network",
        role: "Team Member",
        impactStatement: "AI-powered hazard platform with verified incidents and safe-zone routing.",
        blurb: "AI-powered hazard platform with 95% accurate vision transformer classification.",
        summary: "HAVEN converts crowdsourced images into AI-verified incidents on a live map and routes people to safe zones during disasters.",
        tech: ["Next.js", "Flask", "Roboflow", "SQLite", "Google Maps", "JavaScript", "Python"],
        highlights: [
            "AI hazard classification (Roboflow); multi-source verification for incidents.",
            "Safe-zone navigation and impact radius mapping; stress-resilient UI.",
            "End-to-end pipeline: upload → AI detection → verified incident → evacuation route."
        ],
        links: { devpost: "https://devpost.com/software/haven-rub6ed", github: null },
        categories: ["Hackathons", "ML/AI", "Computer Vision", "Mobile"],
        featured: false,
        icon: "🚨",
        description: "HAVEN is an AI-powered hazard intelligence and evacuation platform. Citizens upload photos; AI classifies hazards; multiple reports verify incidents; users get routes to safe zones. Built with Next.js, Flask, Roboflow disaster models, and SQLite.",
        problem: "During disasters, people need verified, real-time hazard info and clear routes to safety—not scattered, unverified social posts.",
        approach: "Crowdsource images, run AI classification, group and verify incidents spatially, and compute routes to designated safe zones.",
        results: "Working prototype: verified incidents on a map, AI classification, and evacuation routing in 24 hours.",
        outcomes: "Multi-source verification; AI-driven hazard mapping; minimalist emergency UI.",
        learnedNextSteps: "Simple infrastructure can tell a powerful story; minimalism in emergencies saves lives. Next: push alerts, risk-aware routing, city analytics.",
        // media: [],
        sortDate: "2024-01-01"
    },
    {
        id: "facecard",
        title: "FaceCard",
        dateRange: "Hackathon",
        org: "Devpost",
        role: "Team Member",
        impactStatement: "Secure digital identity platform focused on privacy and ease of use.",
        blurb: "Innovative identity verification solution.",
        summary: "A secure digital identity platform focused on privacy and ease of use for verification and access.",
        tech: ["React", "Azure", "Node.js", "Firebase"],
        highlights: [
            "Secure digital identity with privacy-first design.",
            "Integration with Azure and Firebase for auth and storage."
        ],
        links: { devpost: "https://devpost.com/software/facecard-kcqdgo", github: null },
        categories: ["Hackathons", "Mobile"],
        featured: false,
        icon: "🪪",
        description: "FaceCard is a secure digital identity platform focused on privacy and ease of use. (Description from Devpost; consider updating with more detail from the project page.)",
        problem: "Identity verification should be secure, private, and user-friendly.",
        approach: "Build a web/mobile identity platform with Azure and Firebase for auth and data.",
        results: "Functional identity verification prototype with modern stack.",
        outcomes: "Privacy-focused identity flow; Azure + Firebase integration.",
        learnedNextSteps: "Balancing security and UX in identity. Next: add more verification methods and compliance checks.",
        // media: [],
        sortDate: "2023-01-01"
    },
    {
        id: "storyquest",
        title: "StoryQuest",
        dateRange: "Hackathon",
        org: "Devpost",
        role: "Team Member",
        impactStatement: "Interactive storytelling engine driven by generative AI and user choices.",
        blurb: "Interactive storytelling engine driven by AI.",
        summary: "A dynamic platform where stories evolve based on user choices and generative AI inputs.",
        tech: ["GenAI", "Google Vertex AI", "NLP", "Web"],
        highlights: [
            "Stories evolve from user choices and generative AI.",
            "Built with Google Vertex AI and NLP for narrative generation."
        ],
        links: { devpost: "https://devpost.com/software/storyquest-u63rnd", github: null },
        categories: ["Hackathons", "ML/AI"],
        featured: false,
        icon: "📖",
        description: "StoryQuest is an interactive storytelling platform where narratives evolve from user choices and generative AI. Built with Google Vertex AI and NLP. (Consider adding more detail from Devpost.)",
        problem: "Readers want agency in stories without losing coherent narrative quality.",
        approach: "Use GenAI and NLP to generate branches and maintain story coherence based on choices.",
        results: "Working interactive storytelling demo with AI-driven narrative.",
        outcomes: "Choice-driven narratives; Vertex AI integration.",
        learnedNextSteps: "Keeping AI-generated stories coherent and engaging. Next: longer arcs and better memory of past choices.",
        // media: [],
        sortDate: "2023-01-01"
    },
    {
        id: "rekindlear",
        title: "RekindleAR",
        dateRange: "Hackathon",
        org: "Devpost",
        role: "Team Member",
        impactStatement: "Augmented reality for memory preservation and reconnection.",
        blurb: "Augmented reality for memory preservation.",
        summary: "Using AR to help users reconnect with past memories in an immersive 3D environment.",
        tech: ["SnapAR", "Unity", "Python"],
        highlights: [
            "AR experiences for memory preservation and reconnection.",
            "Built with SnapAR, Unity, and Python backend."
        ],
        links: { devpost: "https://devpost.com/software/rekindlear", github: null },
        categories: ["Hackathons", "AR/VR"],
        featured: false,
        icon: "💭",
        description: "RekindleAR uses augmented reality to help users reconnect with past memories in an immersive 3D environment. Built with SnapAR, Unity, and Python.",
        problem: "People want to revisit and share meaningful places and moments in an immersive way.",
        approach: "Use AR (SnapAR/Unity) to overlay memories and narratives in physical space.",
        results: "AR prototype for memory-based experiences.",
        outcomes: "Immersive memory experiences; SnapAR + Unity pipeline.",
        learnedNextSteps: "Designing AR for emotional context. Next: richer media and sharing features.",
        // media: [],
        sortDate: "2023-01-01"
    },
    {
        id: "ml-drought",
        title: "Machine Learning Drought Prediction Algorithm",
        dateRange: "Jul 2023",
        org: "Independent Research",
        role: "Researcher",
        impactStatement: "Predict droughts locally and globally with ~95% accuracy using multiple ML models.",
        blurb: "Predict droughts locally/globally with ~95% accuracy using RF, SVM, KNN, neural nets.",
        summary: "Independent research building a drought prediction algorithm using random forest, nonlinear regression, SVM, KNN, and neural networks—achieving ~95% accuracy at local and global scales.",
        tech: ["Python", "Scikit-Learn", "Random Forest", "SVM", "KNN", "Neural Networks", "Pandas", "NumPy"],
        highlights: [
            "Predict droughts locally and globally with ~95% accuracy.",
            "Compared RF, nonlinear regression, SVM, KNN, and neural networks.",
            "Designed for interpretability and deployment in climate tools."
        ],
        links: { devpost: null, github: null },
        categories: ["Research", "ML/AI", "Data"],
        featured: false,
        icon: "🌵",
        description: "Built a drought prediction algorithm using multiple ML approaches—random forest, nonlinear regression, SVM, KNN, and neural networks—achieving approximately 95% accuracy for local and global drought prediction.",
        problem: "Drought prediction is critical for agriculture and water management; existing tools vary in accuracy and scale.",
        approach: "Collect and preprocess climate/drought indices; train and compare RF, SVM, KNN, and neural nets; validate at local and global scales.",
        results: "Single pipeline with ~95% accuracy; comparable performance across model types with different tradeoffs.",
        outcomes: "~95% accuracy; multi-model comparison; local and global applicability.",
        learnedNextSteps: "Tradeoffs between interpretability (RF) and capacity (neural nets). Next: real-time deployment and integration with existing climate platforms.",
        // media: [],
        sortDate: "2023-07-01"
    },
    {
        id: "plan",
        title: "P.L.A.N. (Parking Lot App Navigator)",
        dateRange: "Jan 2023",
        org: "NextTech CSforGood — Statewide Winner",
        role: "Team Member",
        impactStatement: "OpenCV detects open parking spots; mobile app reduces tardiness from parking search.",
        blurb: "OpenCV detects open parking spots + mobile app; reduced tardiness problem.",
        summary: "Statewide-winning project: OpenCV-based detection of open parking spots with a mobile app to reduce time spent searching for parking and associated tardiness.",
        tech: ["OpenCV", "Python", "Mobile", "Computer Vision"],
        highlights: [
            "OpenCV-based detection of open parking spots in lot imagery.",
            "Mobile app for drivers to see availability; reduced tardiness from parking search.",
            "Statewide winner, NextTech CSforGood."
        ],
        links: { devpost: null, github: null },
        categories: ["Computer Vision", "Mobile"],
        featured: false,
        icon: "🅿️",
        description: "P.L.A.N. uses OpenCV to detect open parking spots from camera or imagery and a mobile app to show drivers where to park, reducing time spent circling and tardiness. Won statewide at NextTech CSforGood.",
        problem: "Finding parking causes delay and stress; lots are often underutilized because drivers don't know where spots are free.",
        approach: "Use OpenCV for spot detection from video or images; expose results via a mobile app.",
        results: "Working detection pipeline and app; statewide win at NextTech CSforGood.",
        outcomes: "Faster parking search; reduced tardiness; open-source-style pipeline.",
        learnedNextSteps: "Computer vision in real-world lighting and angles. Next: scale to more lots and real-time feeds.",
        // media: [],
        sortDate: "2023-01-01"
    },
    {
        id: "summer-research",
        title: "Summer Research Academy — Soft Robotics",
        dateRange: "Jun – Jul 2022",
        org: "UC Santa Barbara",
        role: "Research Participant",
        impactStatement: "Novel soft robot to cleanse coral reefs of microplastics; programmed SPAMs with Arduino.",
        blurb: "Soft robot for coral reef microplastics cleansing; Arduino C, Series Pneumatic Artificial Muscles.",
        summary: "Soft Robotics track at UC Santa Barbara: built a novel soft robot to cleanse coral reefs of microplastics; programmed Series Pneumatic Artificial Muscles with Arduino C; presented at research seminar.",
        tech: ["Arduino", "C", "Soft Robotics", "SPAMs", "Pneumatics"],
        highlights: [
            "Novel soft robot design to cleanse coral reefs of microplastics.",
            "Programmed Series Pneumatic Artificial Muscles (SPAMs) with Arduino C.",
            "Presented at research seminar at UC Santa Barbara."
        ],
        links: { devpost: null, github: null },
        categories: ["Research", "Robotics"],
        featured: false,
        icon: "🪸",
        description: "At UC Santa Barbara's Summer Research Academy (Soft Robotics track), I designed a novel soft robot to help cleanse coral reefs of microplastics. I programmed Series Pneumatic Artificial Muscles with Arduino C and presented the work at a research seminar.",
        problem: "Coral reefs are threatened by microplastics; traditional robots are too rigid for delicate reef environments.",
        approach: "Design a soft robot using pneumatic artificial muscles (SPAMs), control with Arduino C, and validate for microplastic removal in reef-like conditions.",
        results: "Functional soft robot prototype; seminar presentation; groundwork for reef-cleaning application.",
        outcomes: "Soft robot prototype; SPAM control pipeline; research presentation.",
        learnedNextSteps: "Soft robotics and bio-inspired design. Next: in-water trials and collaboration with marine researchers.",
        // media: [],
        sortDate: "2022-06-01"
    },
    {
        id: "gt-europe",
        title: "Research at GT-Europe",
        dateRange: "Jan 2026 – Present",
        org: "Georgia Tech Europe",
        role: "Research Team Member",
        impactStatement: "Deep learning to improve hearing aids via phoneme substitution for hard-to-hear sounds.",
        blurb: "Deep learning to improve hearing aids by replacing hard-to-hear phonemes (phoneme substitution).",
        summary: "Research on using deep learning to improve hearing aids by substituting hard-to-hear phonemes with clearer alternatives, improving comprehension for users.",
        tech: ["Deep Learning", "Python", "Speech", "Phonetics", "PyTorch"],
        highlights: [
            "Deep learning for phoneme substitution to improve hearing aid output.",
            "Focus on replacing hard-to-hear phonemes for better comprehension.",
            "Ongoing research at GT-Europe."
        ],
        links: { devpost: null, github: null },
        categories: ["Research", "ML/AI"],
        featured: true,
        icon: "👂",
        description: "Research at Georgia Tech Europe on using deep learning to improve hearing aids. The work focuses on phoneme substitution—replacing phonemes that are hard for users to hear with alternatives that improve comprehension.",
        problem: "Hearing aid users still struggle with certain phonemes; improving clarity can improve quality of life.",
        approach: "Use deep learning to model which phonemes are confusable or hard to hear and generate substitution strategies that preserve meaning while improving intelligibility.",
        results: "Ongoing: models and substitution strategies for hearing aid enhancement.",
        outcomes: "Phoneme-level modeling; integration path with hearing aid pipelines.",
        learnedNextSteps: "Speech and hearing science meets deep learning. Next: user studies and deployment considerations.",
        // media: [],
        sortDate: "2026-01-01"
    }
];

/* Backward compatibility: ensure every project has link + blurb + description for binary selector and old detail page */
PROJECTS.forEach(p => {
    if (!p.link) p.link = (p.links && p.links.devpost) ? p.links.devpost : "#";
    if (!p.blurb) p.blurb = p.impactStatement || p.summary || "";
    if (!p.description) p.description = p.summary || p.blurb || "";
    if (!p.image) p.image = ""; /* placeholder handled in UI */
});
