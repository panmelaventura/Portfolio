import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import resume2 from './resume2.png';


class Resume extends Component {
    render(){
        return(
            <div>
                <Grid style={{ justifyContent: 'center', backgroundColor: '#f9ecec'}}>
                     {/*<Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                       <img src={pan2} alt={"pan"} style={{height: '240px', paddingTop:'50px'}}> 
                        </div>
                        
                    </Cell>*/}
                    
                    
                    <Cell className="resume-right-col" col={10}>
                    <img src={resume2} alt={"icon"} style={{ height: '180px', marginLeft:'850px', position:'absolute'}}/> 
                    <h2 className="h2-style">Resume</h2>
                        <h3 className="h3-style">Education</h3>
                        <Education 
                        startYear={2012} 
                        endYear={2014}
                        schoolName="FIAP - Faculty of Informatics and Management Paul – Brazil"
                        schoolDescription="MBA Business Process Management BPM emphasis on SOA" 
                        />

                        <Education 
                        startYear={2009} 
                        endYear={2011}
                        schoolName="University Center UNA - Brazil"
                        schoolDescription="BA in Marketing" 
                        />

                        <hr/>

                        <h3 className="h3-style">Experience</h3>

                        <Experience
                        startYear={2015} 
                        endYear={2016}
                        jobName="Magna Systems"
                        jobDescription="Web Designer" 
                        />

                        <Experience
                        startYear={2012} 
                        endYear={2015}
                        jobName="Tersel LTDA"
                        jobDescription="Marketing Analist" 
                        />

                        <Experience
                        startYear={2008} 
                        endYear={2012}
                        jobName="Ricardo Electro LTDA"
                        jobDescription="Customers Support Coordinator" 
                        />

                        <Experience
                        startYear={2002} 
                        endYear={2008}
                        jobName="Ibi Bank"
                        jobDescription="Sales Supervisor" 
                        />

                        <hr/>

                        <h3 className="h3-style">Skills</h3>

                        <Skills
                            skill="HTML"
                            progress={98}
                        />

                        <Skills
                            skill="CSS"
                            progress={98}
                        />

                        <Skills
                            skill="JavaScript"
                            progress={60}
                        />

                        <Skills
                            skill="ReactJS"
                            progress={40}
                        />

                        <Skills
                            skill="CorelDRAW"
                            progress={98}
                        />

                        <Skills
                            skill="Photoshop"
                            progress={98}
                        />

                        <Skills
                            skill="Illustrator"
                            progress={97}
                        />

                        
                        <Skills
                            skill="Bootstrap"
                            progress={80}
                        />



                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;