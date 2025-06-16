import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";

// Import skeleton feature components
import ExposureDashboard from "./components/ExposureDashboard";
import AIActionPlan from "./components/AIActionPlan";
import DigitalTwinScanner from "./components/DigitalTwinScanner";
import AppRiskScanner from "./components/AppRiskScanner";
import DarkWebLeakMonitor from "./components/DarkWebLeakMonitor";
import SocialGraphRiskMap from "./components/SocialGraphRiskMap";
import DataDisintegrationScheduler from "./components/DataDisintegrationScheduler";
import BadgeSystem from "./components/BadgeSystem";
import PrivacyManifestoGenerator from "./components/PrivacyManifestoGenerator";
import SettingsReports from "./components/SettingsReports";

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

// Returns the matching feature skeleton for the current section
// PUBLIC_INTERFACE
function MainContentArea({ activeSection }) {
  /** Main content panel, displays the correct skeleton for each feature */
  return (
    <main className="main-content">
      {activeSection === "dashboard" && <ExposureDashboard />}
      {activeSection === "action-plan" && <AIActionPlan />}
      {activeSection === "digital-twin" && <DigitalTwinScanner />}
      {activeSection === "app-risk" && <AppRiskScanner />}
      {activeSection === "leak-monitor" && <DarkWebLeakMonitor />}
      {activeSection === "social-graph" && <SocialGraphRiskMap />}
      {activeSection === "disintegration" && <DataDisintegrationScheduler />}
      {activeSection === "badges" && <BadgeSystem />}
      {activeSection === "manifesto" && <PrivacyManifestoGenerator />}
      {activeSection === "settings" && <SettingsReports />}
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
