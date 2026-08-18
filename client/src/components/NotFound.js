import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div style={{minHeight: "calc(100vh - 70px)", display: "flex", justifyContent: "center", alignItems: "center", background: "var(--bg-color)"}}>
            <div style={{textAlign: "center", padding: "40px", background: "var(--card-bg)", borderRadius: "16px", boxShadow: "var(--outer-shadow-0)", border: "1px solid var(--border-color)", maxWidth: "400px", width: "100%"}}>
                <i className="fas fa-search" style={{fontSize: "4rem", color: "var(--text-muted)", marginBottom: "20px"}}></i>
                <h2 style={{color: "var(--text-main)", fontWeight: "600", fontSize: "1.5rem", marginBottom: "10px"}}>
                    Page Not Found
                </h2>
                <p style={{color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "25px", lineHeight: "1.5"}}>
                    The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                </p>
                <Link to="/" style={{textDecoration: "none"}}>
                    <button className="btn-1" style={{width: "100%"}}>
                        Return Home
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound
