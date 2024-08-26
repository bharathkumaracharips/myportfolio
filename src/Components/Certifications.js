import React from "react";
import "./Certifications.css";

const Certifications = () => {
    return (
        <section id='Certifications'>
            <h1 className="title">My Certifications</h1>
            <div className="certification-container">
                <div className="certification-grid">
                    <div className="certification-item">
                        <img className="logo" src="/certifications/infosys_logo.png" alt="infosys_logo" />
                        <img className="certificate" src="/certifications/infosys.png" alt="infosys_certi" />
                    </div>
                    <div className="certification-item">
                        <img className="logo" src="/certifications/codetantra_logo.png" alt="codetantra_logo" />
                        <img className="certificate" src="/certifications/codetantra.png" alt="codetantra_certi" />
                    </div>
                    <div className="certification-item">
                        <img className="logo" src="/certifications/alchemy_logo.png" alt="alchemy_logo" />
                        <img className="certificate" src="/certifications/alchemy certificate.png" alt="alchemy_cert" />
                    </div>
                    <div className="certification-item">
                        <img className="logo" src="/certifications/azure_logo.png" alt="azure_logo" />
                        <img className="certificate" src="/certifications/azure.png" alt="azure_cert" />
                    </div>
                    {/* Add more certification items as needed */}
                </div>
            </div>
        </section>
    );
};

export default Certifications;