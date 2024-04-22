import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import image from "./mrin.jpeg";

const emojiMap = {
  Advanced: "💪🏻",
  Intermediate: "👍🏻",
  Beginner: "👶🏻",
};

const colorMap = {
  0:  ["#2662EA", "White"],
  1:  ["#EFD810", "Black"],
  2:  ["#C3DCAF", "Black"],
  3:  ["#E84F33", "White"],
}

const skills = [
  {
    skill: "HTML-CSS",
    level: "Advanced"
  },
  {
    skill: "JavaScript",
    level: "Advanced"
  },
  {
    skill: "Web Design",
    level: "Advanced"
  },
  {
    skill: "Git and GitHub",
    level: "Intermediate"
  },
  {
    skill: "React",
    level: "Intermediate"
  },
  {
    skill: "Pandas",
    level: "Intermediate"
  },
  {
    skill: "Node.js",
    level: "Beginner"
  },
  {
    skill: "MongoDB",
    level: "Beginner"
  },
  {
    skill: "Neo4j",
    level: "Beginner"
  },
  
];

function Avatar() {
  return <img width="100%" src={image} alt="Mrinmayee Rane" />;
}

function Intro() {
  return (
    <div>
      <h1>Mrinmayee Rane</h1>
      <p>
        Front-End web developer and Pursuing Masters in Computer Science with
        Advavnced Certification in Data Science.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill, i) => {
        return (
          <Skill
            name={skill.skill}
            emoji={emojiMap[skill.level]}
            color={colorMap[i % 4]}
          />
        );
      })}
    </div>
  );
}

function Skill({ name, color, emoji }) {
  return (
    <div className="skill" style={{ backgroundColor: color[0], color: color[1] }}>
      <span>{name}</span>
      <span>{emoji}</span>
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
