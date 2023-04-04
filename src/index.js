const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

// Fetch Data
const ProjectList = require("./data/ProjectList.json");
const Skills = require("./data/skills.json");

app.get("/", (req, res) => {
    const filters = req.query;
    const FilteredData = ProjectList.filter(data => {
        let isValid = true;
        for (key in filters) {
            isValid = isValid && data[key] == filters[key];
        }
        return isValid;
    });
    res.send(FilteredData);
});

app.get("/skills", (req, res) => {
    res.send(Skills);
});

app.listen(port, () => {
    console.log("Successfully deploy API.");
});