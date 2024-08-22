import React from "react";
import { Link } from "react-router-dom";
import "./Certifications.css";

const Certifications = () => {
    return (
        <section id='Certifications'>
            <Link to="/">Back</Link>
            <div className="certification-grid">
                <h1>My certifications</h1>

                <div className="certification-item">
                    <img className="logo" src="/certifications/infosys_logo.png" alt="infosys_logo" />
                    <img className="certificate" src="/certifications/infosys.png" alt="infosys_certi" />
                </div>

                <h1>Java Course For Placement</h1>
                <div className="certification-item">
                    <img className="logo" src="/certifications/codetantra_logo.png" alt="codetantra_logo" />
                    <img className="certificate" src="/certifications/codetantra.png" alt="codetantra_certi" />
                </div>

                <h1>EVM Chain Certification</h1>
                <div className="certification-item">
                    <img className="logo" src="/certifications/alchemy_logo.png" alt="alchemy_logo" />
                    <img className="certificate" src="/certifications/alchemy certificate.png" alt="alchemy_cert" />
                </div>

                <h1>Azure Fundamentals</h1>
                <div className="certification-item">
                    <img className="logo" src="/certifications/azure_logo.png" alt="azure_logo" />
                    <img className="certificate" src="/certifications/azure.png" alt="azure_cert" />
                </div>
                
                {/* Uncomment and add more certification items as needed */}
                {/* <div className="certification-item">
                    <img className="logo" src="" alt="nptel_logo" />
                    <img className="certificate" src="" alt="nptel_certi" />
                </div> */}
            </div>
        </section>
    );
};

export default Certifications;
