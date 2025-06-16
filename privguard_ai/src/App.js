import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";

// Top Navbar component
// PUBLIC_INTERFACE
function TopNavbar() {
  /** Renders the fixed top navigation bar */
  return (
    <nav className="navbar">
      <span className="topbar-logo">
        <span className="logo-symbol">*</span>
        <span>PrivGuard AI</span>
      </span>
      <button className="btn">Account</button>
    </nav>
  );
}

const sectionContentMap = {
  "dashboard": {
    subtitle: "Real-Time Digital Exposure Dashboard",
    title: "Exposure Dashboard",
    description: "See your exposure score, weekly trends, and get real-time digital privacy alerts here.",
    action: "View Details"
  },
  "action-plan": {
    subtitle: "AI-Powered Privacy Action Plan",
    title: "Your AI Privacy Plan",
    description: "Stepwise action items personalized to your digital footprint, tracked here.",
    action: "Start Plan"
  },
  "digital-twin": {
    subtitle: "Digital Twin Scanner",
    title: "Impersonation Detection",
    description: "Scan for clones or impersonations and take action if needed.",
    action: "Scan Twin"
  },
  "app-risk": {
    subtitle: "Third-Party App Risk Scanner",
    title: "App & Integration Risk",
    description: "Connected apps, permission reviews, trust scores, and revocation tools.",
    action: "Scan Apps"
  },
  "leak-monitor": {
    subtitle: "Dark Web Leak Monitor",
    title: "Leak Alerts",
    description: "Monitor leaked info, breach impact, and privacy mitigation steps.",
    action: "Review Alerts"
  },
  "social-graph": {
    subtitle: "Social Graph Risk Map",
    title: "Social Exposure Map",
    description: "Visualize your contact graph and surface high-risk digital connections.",
    action: "View Map"
  },
  "disintegration": {
    subtitle: "Data Disintegration Scheduler",
    title: "Data Disintegration",
    description: "Timeline and rules to safely schedule content deletion and erasure.",
    action: "Manage Data"
  },
  "badges": {
    subtitle: "Privacy Behavior Badge System",
    title: "Your Privacy Badges",
    description: "See your progress—earn badges and track XP in privacy best practices.",
    action: "View Badges"
  },
  "manifesto": {
    subtitle: "Privacy Manifesto Generator",
    title: "Custom Manifesto",
    description: "Generate your personal privacy policy—exportable and shareable.",
    action: "Create Manifesto"
  },
  "settings": {
    subtitle: "Settings & Reports",
    title: "Settings & Reports",
    description: "Adjust your AI preferences, manage reports, and review device sync.",
    action: "Open Settings"
  }
};

// PUBLIC_INTERFACE
function MainContentArea({ activeSection }) {
  /** Main content panel, placeholder for each feature */
  const { subtitle, title, description, action } = sectionContentMap[activeSection] || sectionContentMap["dashboard"];
  return (
    <main className="main-content">
      <section className="welcome">
        <div className="subtitle">{subtitle}</div>
        <h1 className="title">{title}</h1>
        <div className="description">
          {description}
        </div>
        <button className="btn btn-large" style={{ marginTop: "2rem" }}>{action}</button>
      </section>
    </main>
  );
}

// Root App Layout
// PUBLIC_INTERFACE
function App() {
  /** Renders the root layout with sidebar, top navbar, and main content area.
   * Manages sidebar state for active section navigation.
   */
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="app-grid">
      <TopNavbar />
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <MainContentArea activeSection={activeSection} />
    </div>
  );
}

export default App;
