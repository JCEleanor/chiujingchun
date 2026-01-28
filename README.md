# Personal Website 2024

## Overview
My personal website where this is my first time using LLMs to do vibe coding.
I put all of my instructions as markdown files in a desginated folder, where I code as I refined my instructions. By the end of this project, I stopped writing those instructions on my own; instead, I co-created a template with Gemini CLI and used it to generate instructions. 

P.S. midway through the project I jumped ship from Cursor to Geminni CLI just because it integrate with my workflow better.


## Tech Stack

- Next.js for the framework
- Tailwind CSS for styling
- Framer Motion for animations

## Project Structure

```
src/
├── app/
│   ├── components/          # UI components
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectSection.tsx
│   │   ├── journal-section/ # Blog/journal components
│   │   │   ├── components/
│   │   │   │   ├── Date.tsx
│   │   │   │   ├── Error.tsx
│   │   │   │   ├── Loading.tsx
│   │   │   │   ├── Tags.tsx
│   │   │   │   └── Title.tsx
│   │   │   └── index.tsx
│   │   ├── Header.tsx
│   │   ├── Links.tsx
│   │   ├── Footer.tsx
│   │   └── PageTransitionLayout.tsx
│   ├── post/hackmd/        # Blog post pages
│   │   └── [noteId]/
│   │       ├── loading.tsx
│   │       └── page.tsx
│   ├── actions/            # Server actions
│   │   └── hackmd-actions.ts
│   ├── api/               # API routes
│   │   └── mock/
│   │       └── notes/
│   ├── hiking-journal/    # Hiking journal page
│   ├── constants/         # App constants
│   ├── fonts/            # Custom fonts
│   ├── interfaces/       # TypeScript definitions
│   ├── lib/             # Utility functions
│   │   ├── hackmd-api.ts
│   │   └── mock-data.ts
│   └── utils/           # Helper functions
├── public/              # Static assets
└── ai-instructions/     # Cursor development tasks
```

## Future Features & Improvements

### Technical Enhancements
- Dark/Light mode toggle
- Improve accessibility with ARIA labels
- Add i18n

### Content Enhancements
- Update blog content
- Manage blog posts with custom CMS and migrate from HackMD

