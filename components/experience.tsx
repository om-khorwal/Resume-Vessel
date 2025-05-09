import React from "react";
import Title from "../assets/Title"

import ExperienceItem from "../assets/Experiencitem";

const experiences = [
  {
    title: "Engineering Manager - Machine Learning",
    company: "PAR Technology",
    date: "Mar 2021 - Jun 2024",
    location: "Jaipur, India",
    points: [
      "Led a global team of 6 engineers to deliver ML features in campaign workflows, aligning development with business goals.",
      "Optimized Spark pipelines in Databricks Lakehouse, reducing job cost and runtime by 90% across 10+ TB datasets.",
      "Built a Generative AI autoresponder for customer engagement and developed KPI dashboards in Tableau with real-time alerts.",
      "TCertified in Databricks Spark and AWS CCP with hands-on experience building scalable, production-grade data pipelines."
    ],
  },
  {
    title: "Machine Learning Engineer",
    company: "Cruise",
    date: "Jul 2017 – Nov 2019",
    location: "San Francisco, CA",
    points: [
      "Developed a temporal CNN model for agent motion prediction, improving performance by 30% over heuristic systems.",
      "Led continuous improvement of ML prediction systems through architecture tuning and data-driven experimentation. ",
      "Mentored 4+ interns and junior engineers, promoting ML best practices and delivering on strategic AV projects.",
      " Designed a scalable, real-time prediction pipeline by integrating research insights and cross-team collaboration."
    ],
  },
  {
    title: "Machine Learning Engineer",
    company: "Reflektion",
    date: "Feb 2016 – Jul 2017",
    location: "San Francisco, CA",
    points: [
      "Developed a visual search application for image-based product discovery, creating a new revenue channel for e-commerce clients.",
      "Optimized Spark-Cassandra pipelines for co-viewed recommendations,reducing processing time by 40% and improving feed delivery. ",
      "Deployed and scaled the ELK stack and New Relic for centralized logging, monitoring, and alerting, enhancing system reliability.",
    ],
  },
  {
    title: "Quantitative Researcher",
    company: "WorldQuant",
    date: "Jul 2012 – Nov 2015",
    location: "Mumbai, India",
    points: [
      "Developed alpha-generating trading strategies, contributing to multimillion dollar profits by exploiting market inefficiencies.",
      "Built a sentiment analysis model using structured and unstructured data to enhance signal diversity and trading performance. ",
      "Mentored 4+ interns and junior engineers, promoting ML best practices and delivering on strategic AV projects.",
      "Created custom backtesting and visualization tools, improving strategy validation, risk analysis, and research communication."
    ],
  },
  // ...add more
];

export default function ExperienceSection() {
  return (
    <div className="w-full">
     <Title label="EXPERIENCE"/>
      {experiences.map((item, index) => (
        <ExperienceItem key={index} {...item} />
      ))}
    </div>
  );
}
