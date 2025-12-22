# Projects Data

This folder contains all project data for the portfolio website.

## Structure

```
data/
├── projects/              # Individual project files
│   ├── gpt2-inference.js
│   ├── ooo-riscv.js
│   ├── mrnav.js
│   ├── uscc.js
│   ├── sleep-right.js
│   ├── sudoku.js
│   ├── wizards-chess.js
│   ├── schedule-gurus.js
│   └── qd-marl.js
└── projectsData.js        # Index file that exports all projects
```

## Adding a New Project

1. **Create a new file** in `projects/` folder (e.g., `my-new-project.js`)
2. **Export the project object:**
   ```javascript
   const myNewProject = {
     id: 14, // Unique ID
     title: "My New Project",
     image: "/images/my-project.png",
     date: "Spring 2026",
     slug: "my-new-project", // URL slug
     tags: ["React", "Python"],
     description: "Short description",
     overview: "Longer overview...",
     // ... other fields
   };
   
   export default myNewProject;
   ```

3. **Import and add to `projectsData.js`:**
   ```javascript
   import myNewProject from "./projects/my-new-project";
   
   const projectsData = {
     // ... existing projects
     "my-new-project": myNewProject,
   };
   ```

That's it! The project will automatically appear on your projects page.

## Project Fields

- **Required:**
  - `id`: Unique identifier
  - `title`: Project name
  - `slug`: URL slug (e.g., "my-project")
  - `image`: Path to project image
  - `tags`: Array of tags
  - `description`: Brief description

- **Optional:**
  - `date`: When the project was completed
  - `overview`: Short overview text
  - `detailedOverview`: Long detailed description (can be JSX)
  - `techStack`: Array of technologies
  - `optimizationsContent`: JSX content for optimizations section
  - `courseLink`, `videoLink`, `githubLink`, `reportLink`, etc.
  - `imageClass`: Custom CSS class for image sizing
  - `imagePosition`: Image positioning class

