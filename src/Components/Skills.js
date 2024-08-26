import React from "react";
import { SiC, SiCplusplus, SiSolidity } from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import "./Skills.css"
const Skills = () => {
    return (
        <div>
            <h1>My Skill Levels</h1>
            <h1>Programming Languages</h1>
            <div className='Programm_icons'>
                <div className="icon_with_progress">
                    <SiC title="C" />
                    <div className="progress_bar">
                        <div className="progress" style={{ width: '70%' }}></div>
                    </div>
                </div>
                <div className="icon_with_progress">
                    <SiCplusplus title="C++" />
                    <div className="progress_bar">
                        <div className="progress" style={{ width: '80%' }}></div>
                    </div>
                </div>
                <div className="icon_with_progress">
                    <FaJava title="Java" />
                    <div className="progress_bar">
                        <div className="progress" style={{ width: '90%' }}></div>
                    </div>
                </div>
                <div className="icon_with_progress">
                    <FaHtml5 title="HTML" />
                    <div className="progress_bar">
                        <div className="progress" style={{ width: '95%' }}></div>
                    </div>
                </div>
                <div className="icon_with_progress">
                    <FaCss3Alt title="CSS" />
                    <div className="progress_bar">
                        <div className="progress" style={{ width: '85%' }}></div>
                    </div>
                </div>
                <div className="icon_with_progress">
                    <FaReact title="React" />
                    <div className="progress_bar">
                        <div className="progress" style={{ width: '75%' }}></div>
                    </div>
                </div>
                <div className="icon_with_progress">
                    <SiSolidity title="Solidity" />
                    <div className="progress_bar">
                        <div className="progress" style={{ width: '65%' }}></div>
                    </div>
                </div>
                <div className="icon_with_progress">
                    <FaNodeJs title="Node.js" />
                    <div className="progress_bar">
                        <div className="progress" style={{ width: '80%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;