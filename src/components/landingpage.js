import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import pan2 from './pan2.png';

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="banner-text" center>
                        <img src={pan2} alt={"pan"} style={{height: '240px', paddingTop:'50px'}}/> 
                       
                        {/*<h1 style={{fontFamily:'Raleway ExtraLight', fontSize:'70px'}}>PANMELA <br/>VENTURA</h1>*/}
                        <br clear="all"/>
                        <br/>
                            <hr/>
                            <p>HTML/CSS | Bootstrap | Javascript | React JS | Node JS </p>
                            
                        
                        <div className="landing-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>
            </div>  
                    <br/>                    
                    </Cell> 
                     
                </Grid>
                
            </div>
        )
    }
}
export default Landing;