import React from 'react';
import Education from './education';
import Skills from './skills';
import Experience from './experience';
import { Grid, Cell } from 'react-mdl';
class Resume extends React.Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: "center" }}>
                            <img
                                // src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"
                                src ="https://storage.cloud.google.com/cloudbucket-1/Vivek%20Photo.jpg?authuser=1"
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Vivek Agarwal <a href="https://drive.google.com/file/d/1Py9BzQH6GjKT_nNOS6qGPamzhtYy8rtZ/view?usp=sharing">Resume</a> </h2>
                        <h4 style={{ color: 'grey' }}>Application Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>I am a Masters in Computer Science student at Arizona State University. I am passionate about problem solving, programming, data structures and algorithms. Cloud Computing and Distriuted systems fascinates me. I have experience in Full Stack web development and building REST APIs. I am committed towards building robust, scalable and highly available software products.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>1701 E 8th St, Tempe Arizona 85281</p>
                        <h5>Phone</h5>
                        <p>(480) 544-4170</p>
                        <h5>Email</h5>
                        <p>agarwal.vivek101@gmail.com</p>
                        {/* <h5>Web</h5>
                        <p>mywebsite.com</p> */}
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education
                            startYear={2018}
                            endYear={2020}
                            schoolName="Arizona State University"
                            schoolDescription="Masters in Computer Science"
                        />

                        <Education
                            startYear={2009}
                            endYear={2013}
                            schoolName="Indian Institute of Information Technology Allahabad (India)"
                            schoolDescription="Bachelor's in Information Technology"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2>
                        
                        <Experience
                            startYear={2019}
                            endYear={`Current`}
                            jobName="Research Aide at WP Carey School of Business"
                            jobDescription="Assisting in Machine Learning research projects at ASU Business School. Building applications for data collection and processing"
                        />
                        <Experience
                            startYear={2019}
                            endYear={2019}
                            jobName="Full Stack Web developer at ASU School of Mathematics/Statistics"
                            jobDescription="Developed a Python Flask based Full stack web app for class enrollment system using Moodle API"
                        />  

                        <Experience
                            startYear={2013}
                            endYear={2018}
                            jobName="Software Engineer at Accenture"
                            jobDescription="SAP Techno-Functional Developer: Designed and developed applications using SAP Supply Chain Suite"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill="Python"
                            progress={80}
                        />
                        <Skills
                            skill="Java"
                            progress={80}
                        />
                        <Skills
                            skill="Javascript/Node.js"
                            progress={60}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={60}
                        />
                        <Skills
                            skill="React"
                            progress={40}
                        />
                        <Skills
                            skill="AWS"
                            progress={50}
                        />
                        <Skills
                            skill="Hadoop"
                            progress={25}
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;