/* data.js - Central Source of Truth */

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

const PROJECTS = [
    {
        id: "haven",
        title: "HAVEN",
        blurb: "AI-powered hazard platform with 95% accurate vision transformer classification.",
        description: "Constructed an AI-powered hazard platform using Next.js, Flask, and Roboflow. Integrated SQLite-backed incident storage and real-time A*-based routing to safe zones.",
        tech: ["Next.js", "Flask", "Roboflow", "Vision Transformer", "SQLite", "A*"],
        image: "../assets/projects/placeholder.jpg",
        link: "https://devpost.com/software/haven-rub6ed"
    },
    {
        id: "perfectpunch",
        title: "Perfect Punch",
        blurb: "Real-time boxing analysis using Object Detection and LLM coaching.",
        description: "Designed end-to-end backend pipeline for Hacklytics (2nd place). Utilized OpenCV for real-time punch classification and Gemini API for RAG-based coaching insights.",
        tech: ["Python", "OpenCV", "Gemini API", "RAG", "Object Detection", "LLM"],
        image: "../assets/projects/placeholder.jpg",
        link: "https://devpost.com/software/perfectpunch"
    },
    {
        id: "surgevue",
        title: "SurgeVue",
        blurb: "AR overlay for MRI tumor detection (PennApps 1st Place AR/VR).",
        description: "Engineered real-time CV pipelines for continuous MRI frame analysis. Created Flask backend for image streaming and an iOS companion app.",
        tech: ["AR/VR", "Flask", "Computer Vision", "iOS"],
        image: "../assets/projects/placeholder.jpg",
        link: "https://devpost.com/software/surgikalai"
    },
    {
        id: "facecard",
        title: "FaceCard",
        blurb: "Innovative identity verification solution.",
        description: "A secure digital identity platform focused on privacy and ease of use. (Description inferred from title).",
        tech: ["React", "Azure Foundry", "Node.js", "Firebase"],
        image: "../assets/projects/placeholder.jpg",
        link: "https://devpost.com/software/facecard-kcqdgo"
    },
    {
        id: "rekindlar",
        title: "RekindlAR",
        blurb: "Augmented reality for memory preservation.",
        description: "Using AR to help users reconnect with past memories in an immersive 3D environment.",
        tech: ["SnapAR", "Unity", "Python"],
        image: "../assets/projects/placeholder.jpg",
        link: "https://devpost.com/software/rekindlear"
    },
    {
        id: "storyquest",
        title: "StoryQuest",
        blurb: "Interactive storytelling engine driven by AI.",
        description: "A dynamic platform where stories evolve based on user choices and generative AI inputs.",
        tech: ["GenAI", "Web Dev", "NLP", "Google Vertex AI"],
        image: "../assets/projects/placeholder.jpg",
        link: "https://devpost.com/software/storyquest-u63rnd"
    }
];