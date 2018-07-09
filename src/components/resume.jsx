import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import pan2 from './pan2.png'


class Resume extends Component {
    render(){
        return(
            <div>
                <Grid style={{ justifyContent: 'center'}}>
                     {/*<Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                       <img src={pan2} alt={"pan"} style={{height: '240px', paddingTop:'50px'}}> 
                        </div>
                        
                    </Cell>*/}/
                    
                    
                    <Cell className="resume-right-col" col={10}>
                        <h2 className="h2-style">Education</h2>
                        <Education 
                        startYear={2017} 
                        endYear={2019}
                        schoolName="Centennial College"
                        schoolDescription="Software Engineering" 
                        />

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

                        <h2 className="h2-style">Experience</h2>

                        <Experience
                        startYear={2015} 
                        endYear={2016}
                        jobName="Magna Systems"
                        schoolDescription="Web Designer" 
                        />

                        <Experience
                        startYear={2012} 
                        endYear={2015}
                        jobName="Tersel LTDA"
                        schoolDescription="Marketing Analist" 
                        />

                        <Experience
                        startYear={2012} 
                        endYear={2015}
                        jobName="Ricardo Electro LTDA"
                        schoolDescription="Customers Support Coordinator" 
                        />

                        <hr/>

                        <h2 className="h2-style">Skills</h2>

                        <Skills
                            skill="javascript"
                            progress={100}
                        />

                        <Skills
                            skill="HTML/CSS"
                            progress={100}
                        />

                        <Skills
                            skill="NodeJS"
                            progress={100}
                        />

                        <Skills
                            skill="javascript"
                            progress={100}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;