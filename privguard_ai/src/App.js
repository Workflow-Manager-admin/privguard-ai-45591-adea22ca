import React from 'react';
import './App.css';

// Sidebar component
// PUBLIC_INTERFACE
function Sidebar() {
  /** Renders the sidebar navigation for the main layout */
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="logo-symbol">*</span>
        <span className="sidebar-title">PrivGuard AI</span>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><button className="sidebar-link active">Dashboard</button></li>
          <li><button className="sidebar-link">AI Action Plan</button></li>
          <li><button className="sidebar-link">Digital Twin</button></li>
          <li><button className="sidebar-link">App Risk</button></li>
          <li><button className="sidebar-link">Leak Monitor</button></li>
          <li><button className="sidebar-link">Social Graph</button></li>
          <li><button className="sidebar-link">Badges</button></li>
          <li><button className="sidebar-link">Settings</button></li>
        </ul>
      </nav>
    </aside>
  );
}

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

// Main content skeleton
// PUBLIC_INTERFACE
function MainContentArea() {
  /** Main content panel placeholder */
  return (
    <main className="main-content">
      <section className="welcome">
        <div className="subtitle">AI Workflow Manager Template</div>
        <h1 className="title">privguard_ai</h1>
        <div className="description">
          Start building your application.
        </div>
        <button className="btn btn-large" style={{marginTop: '2rem'}}>Get Started</button>
      </section>
    </main>
  );
}

// Root App Layout
// PUBLIC_INTERFACE
function App() {
  /** Renders the root layout with sidebar, top navbar, and main content area */
  return (
    <div className="app-grid">
      <TopNavbar />
      <Sidebar />
      <MainContentArea />
    </div>
  );
}

export default App;
