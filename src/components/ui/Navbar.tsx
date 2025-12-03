import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

type NavPage = "study" | "garden";

interface NavbarProps {
  onNavigate?: (page: NavPage) => void;
  coins?: number;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, coins = 0 }) => {
  const handleLeftClick = (e: React.MouseEvent) => {
    // if you want to call onNavigate in addition to navigating via Link
    onNavigate?.("study");
  };

  const handleRightClick = (e: React.MouseEvent) => {
    onNavigate?.("garden");
  };

  return (
    <header className="main-header">
      <div className="left-section">
        <div className="logo-wrapper" aria-hidden={false}>
          <img src="/assets/ui/logo.png" alt="Study Garden logo" className="navbar-logo-img" />

          {/* Left clickable area -> Study */}
          <Link
            to="/study"
            className="logo-overlay left"
            aria-label="Go to Study section"
            title="Study"
            onClick={handleLeftClick}
          />

          {/* Center area (pig) - intentionally non-clickable */}
          <div className="logo-center" aria-hidden="true" />

          {/* Right clickable area -> Garden */}
          <Link
            to="/garden"
            className="logo-overlay right"
            aria-label="Go to Garden section"
            title="Garden"
            onClick={handleRightClick}
          />
        </div>

        <nav className="nav-options" aria-label="Main navigation">
          <Link to="/profile" className="nav-link">Profile</Link>
        </nav>
      </div>

      <div className="right-section">
        <div className="piggy-bank" title="Coins">
          <img src="/icons/piggy.svg" className="piggy-icon" alt="" />
          <span className="coin-count">{coins}</span>
        </div>
        <button className="profile-btn">Sign In</button>
      </div>
    </header>
  );
};

export default Navbar;