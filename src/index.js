const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

// Fetch Data
const ProjectList = require("./data/ProjectList.json");
const Skills = require("./data/skills.json");

app.get('/projects/:tech', (req, res) => {
    const tech = req.params.tech.toLowerCase();
    const FilteredProjects = ProjectList.filter(project => project.techstack.includes(tech));
    res.send(FilteredProjects);
});

app.get("/projects", (req, res) => {
    res.send(ProjectList);
});

app.get("/skills", (req, res) => {
    res.send(Skills);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
