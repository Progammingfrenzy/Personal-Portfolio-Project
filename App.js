// ==============================
// SKILLS
// ==============================
const skills = {
    "languages-grid": [
        { name: "Java", icon: "devicon-java-plain" },
        { name: "Python", icon: "devicon-python-plain" },
        { name: "HTML", icon: "devicon-html5-plain" },
        { name: "CSS", icon: "devicon-css3-plain" },
        { name: "JavaScript", icon: "devicon-javascript-plain" },
        { name: "MySQL", icon: "devicon-mysql-plain" },
        { name: "Bash", icon: "devicon-bash-plain" },
    ],
    "tools-grid": [
        { name: "Scikit-Learn", icon: "devicon-scikitlearn-plain" },
        { name: "Pandas", icon: "devicon-pandas-plain" },
        { name: "NumPy", icon: "devicon-numpy-plain" },
        { name: "Git", icon: "devicon-git-plain" },
        { name: "GitHub", icon: "devicon-github-original" },
        { name: "React", icon: "devicon-react-original" },
        { name: "Redux", icon: "devicon-redux-original" },
    ],
    "engines-grid": []
};

for (const gridId in skills) {
    const grid = document.getElementById(gridId);
    const items = skills[gridId];

    if (items.length === 0) {
        grid.innerHTML = `<div class="skill-card coming-soon"><span>Coming Soon</span></div>`;
    } else {
        items.forEach(skill => {
            grid.innerHTML += `
                <div class="skill-card">
                    <i class="${skill.icon} colored"></i>
                    <span>${skill.name}</span>
                </div>`;
        });
    }
}

// ==============================
// PROJECTS
// ==============================
const projects = {
    "academic-grid": [
        {
            title: "NF1 Familial vs. Sporadic Case Classification",
            tech: "Python | Scikit-Learn | Pandas",
            description: "Studied whether machine learning can distinguish familial and sporadic NF1 cases using clinical symptom data. Compared three baseline models (Logistic Regression, Random Forest, SVM) against TabPFN, with biological interpretation via ANOVA feature ranking and permutation importance analysis.",
            image: "assets/images/nf1-preview.png",
            link: "https://github.com/Progammingfrenzy/nf1-final-project"
        },
        {
            title: "Continue Watching Feature Implementation",
            tech: "JavaScript | React | Redux | Git / GitHub",
            description: "Personal portfolio copy of a completed course project. My main contributions focused on frontend feature integration in a React-based streaming app, including implementing and debugging a Continue Watching feature, working with Redux actions, reducers, selectors, and persisted state.",
            image: "assets/images/fakeflix-preview.png",
            link: "https://github.com/Progammingfrenzy/fakeflix-personal"
        },
        {
            title: "RepGen Reliability Improvements Project",
            tech: "Python | Bash | Git / GitHub",
            description: "Personal portfolio copy of a completed course project based on an existing research codebase. My main contributions focused on improving backend and pipeline failure reporting, adding clearer status handling for refinement, planning, and code generation stages.",
            image: "assets/images/repgen-preview.png",
            link: "https://github.com/Progammingfrenzy/RepGen-personal"
        }
    ],
    "personal-grid": [
        {
            title: "Personal Portfolio Project",
            tech: "HTML | CSS | JavaScript",
            description: "This site you are in right now is my Personal Portfolio project. Feel free to look around!",
            image: "assets/images/portfolio-preview.png",
            link: null
        }
    ]
};

for (const gridId in projects) {
    const grid = document.getElementById(gridId);
    projects[gridId].forEach(project => {
        grid.innerHTML += `
            <article class="project-card">
                <div class="card-preview">
                    <h4>${project.title}</h4>
                    <p class="tech-stack">${project.tech}</p>
                    <button class="details-btn">View Details</button>
                </div>
                <div class="card-detail hidden">
                    <img src="${project.image}" alt="${project.title} preview">
                    <p>${project.description}</p>
                    ${project.link ? `<a href="${project.link}" target="_blank">View Code</a>` : ''}
                </div>
            </article>`;
    });
}

// ==============================
// DARK / LIGHT TOGGLE
// ==============================
const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        toggle.textContent = '🌙';
    } else {
        toggle.textContent = '☀️';
    }
});

// ==============================
// VIEW DETAILS TOGGLE
// ==============================
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('details-btn')) {
        const detail = e.target.closest('.project-card').querySelector('.card-detail');
        detail.classList.toggle('hidden');
        e.target.textContent = detail.classList.contains('hidden') ? 'View Details' : 'Close Details';
    }
});