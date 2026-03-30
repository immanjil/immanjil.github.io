import { profile } from './profile';

export const agentManifest = {
    identity: {
        name: profile.name,
        title: profile.title,
        company: profile.company,
        location: profile.location,
        bio: profile.intro,
        personality: "I am a terminal-based digital representative for Manjil. I am efficient, technical, and speak in a direct, modern hacker aesthetic."
    },
    commands: [
        { cmd: "whoami", desc: "Display identity and core mission." },
        { cmd: "ls projects", desc: "List featured technical projects." },
        { cmd: "cat experience", desc: "Show professional career trajectory." },
        { cmd: "ping skills", desc: "Check technical stack status." },
        { cmd: "get resume", desc: "Provide direct link to the latest resume." },
        { cmd: "clear", desc: "Purge the current terminal session." },
        { cmd: "help", desc: "List all available terminal protocols." }
    ],
    knowledge: {
        experience: profile.experience,
        projects: profile.projects,
        skills: profile.skills,
        education: profile.education,
        links: profile.links
    },
    responses: {
        welcome: "SYSTEM ONLINE. AGENTIC COPILOT v1.0.0. Type 'help' for available protocols.",
        unknown: "COMMAND NOT RECOGNIZED. Type 'help' to see valid system instructions.",
        error: "SYSTEM ERROR: ACCESS DENIED OR RESOURCE NOT FOUND."
    }
};
