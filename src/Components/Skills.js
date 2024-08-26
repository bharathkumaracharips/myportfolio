import React, { useEffect, useRef } from "react";
import { SiC, SiCplusplus, SiSolidity } from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import "./Skills.css";

const Skills = () => {
    const progressBars = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate progress bars when section comes into view
                    animateProgressBars();
                } else {
                    // Reset progress bars when section goes out of view
                    resetProgressBars();
                }
            });
        }, { threshold: 0.1 });

        progressBars.current.forEach(bar => observer.observe(bar));

        return () => {
            observer.disconnect();
        };
    }, []);

    const animateProgressBars = () => {
        progressBars.current.forEach(bar => {
            const progressBar = bar.querySelector('.progress');
            const targetWidth = progressBar.getAttribute('data-target-width');
            setTimeout(() => {
                progressBar.style.width = targetWidth;
            }, 100); // Delay for smooth animation
        });
    };

    const resetProgressBars = () => {
        progressBars.current.forEach(bar => {
            const progressBar = bar.querySelector('.progress');
            progressBar.style.width = '0'; // Reset to 0 when out of view
        });
    };

    return (
        <div>
            <h1>My Skill Levels</h1>
            <div className="procontainer">
                <h1>Programming Languages</h1>
                <div className='Programm_icons'>
                    <div className="icon_with_progress" ref={el => progressBars.current[0] = el}>
                        <SiC title="C" />
                        <div className="progress_bar">
                            <div className="progress" data-target-width='70%'></div>
                        </div>
                    </div>
                    <div className="icon_with_progress" ref={el => progressBars.current[1] = el}>
                        <SiCplusplus title="C++" />
                        <div className="progress_bar">
                            <div className="progress" data-target-width='80%'></div>
                        </div>
                    </div>
                    <div className="icon_with_progress" ref={el => progressBars.current[2] = el}>
                        <FaJava title="Java" />
                        <div className="progress_bar">
                            <div className="progress" data-target-width='90%'></div>
                        </div>
                    </div>
                    <div className="icon_with_progress" ref={el => progressBars.current[3] = el}>
                        <FaHtml5 title="HTML" />
                        <div className="progress_bar">
                            <div className="progress" data-target-width='95%'></div>
                        </div>
                    </div>
                    <div className="icon_with_progress" ref={el => progressBars.current[4] = el}>
                        <FaCss3Alt title="CSS" />
                        <div className="progress_bar">
                            <div className="progress" data-target-width='85%'></div>
                        </div>
                    </div>
                    <div className="icon_with_progress" ref={el => progressBars.current[5] = el}>
                        <FaReact title="React" />
                        <div className="progress_bar">
                            <div className="progress" data-target-width='75%'></div>
                        </div>
                    </div>
                    <div className="icon_with_progress" ref={el => progressBars.current[6] = el}>
                        <SiSolidity title="Solidity" />
                        <div className="progress_bar">
                            <div className="progress" data-target-width='65%'></div>
                        </div>
                    </div>
                    <div className="icon_with_progress" ref={el => progressBars.current[7] = el}>
                        <FaNodeJs title="Node.js" />
                        <div className="progress_bar">
                            <div className="progress" data-target-width='80%'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;