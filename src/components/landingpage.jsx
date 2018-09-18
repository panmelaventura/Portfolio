import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import pan2 from './pan2.png';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="banner-text">
                            <img src={pan2} alt={"pan"} style={{ height: '240px', paddingTop: '50px' }} />

                            {/*<h1 style={{fontFamily:'Raleway ExtraLight', fontSize:'70px'}}>PANMELA <br/>VENTURA</h1>*/}
                            <br clear="all" />
                            <br />
                            <hr />
                            <p>HTML | CSS | JavaScript | Photoshop | Illustrator | CorelDRAW </p>


                        <div className="landing-text">
                            Graduated in Marketing, I have 5 years of experience in
                            Marketing, Web Design, Printed Media and related fields. I’m a professional 
                            with strategic vision, which values the good relationship and the organizational 
                            climate of the company. I´m an effective and proactive professional who is
                            able to work well and contribute within any existing team.

                        </div>
                        </div>
                        <br />
                        
                        
                    </Cell>

                </Grid>
                
                <br />
                <br />

            </div>
        )
    }
}
export default Landing;