import React from "react";
import "./App.css";

// Icons are simple Unicode/ASCII symbols for lightweight design
const featureSections = [
  {
    key: "dashboard",
    label: "Digital Exposure",
    icon: "📊",
    tooltip: "Real-Time Digital Exposure Dashboard",
  },
  {
    key: "action-plan",
    label: "AI Action Plan",
    icon: "🤖",
    tooltip: "AI-Powered Privacy Action Plan",
  },
  {
    key: "digital-twin",
    label: "Digital Twin",
    icon: "🧬",
    tooltip: "Digital Twin Scanner",
  },
  {
    key: "app-risk",
    label: "App Risk",
    icon: "🔍",
    tooltip: "Third-Party App Risk Scanner",
  },
  {
    key: "leak-monitor",
    label: "Leak Monitor",
    icon: "💧",
    tooltip: "Dark Web Leak Monitor",
  },
  {
    key: "social-graph",
    label: "Social Graph",
    icon: "🕸️",
    tooltip: "Social Graph Risk Map",
  },
  {
    key: "disintegration",
    label: "Disintegration",
    icon: "🧹",
    tooltip: "Data Disintegration Scheduler",
  },
  {
    key: "badges",
    label: "Badges",
    icon: "🏅",
    tooltip: "Privacy Behavior Badge System",
  },
  {
    key: "manifesto",
    label: "Manifesto",
    icon: "✍️",
    tooltip: "Custom Privacy Manifesto Generator",
  },
  {
    key: "settings",
    label: "Settings",
    icon: "⚙️",
    tooltip: "Settings & Reports Section",
  },
];

// PUBLIC_INTERFACE
function Sidebar({ activeSection, setActiveSection }) {
  /** Sidebar navigation for PrivGuard AI features.
   * @param activeSection - string (currently active section key)
   * @param setActiveSection - function to update the active section
   */
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="logo-symbol">*</span>
        <span className="sidebar-title">PrivGuard AI</span>
      </div>
      <nav className="sidebar-nav" aria-label="Main Navigation">
        <ul>
          {featureSections.map((feat) => (
            <li key={feat.key}>
              <button
                className={`sidebar-link${activeSection === feat.key ? " active" : ""}`}
                title={feat.tooltip}
                aria-label={feat.tooltip}
                aria-current={activeSection === feat.key ? "page" : undefined}
                onClick={() => setActiveSection(feat.key)}
                tabIndex={0}
              >
                <span style={{ marginRight: 13, fontSize: "1.19em" }}>{feat.icon}</span>
                <span className="sidebar-link-label">{feat.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
