import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends Component {
    render(){
        return(
           <Grid>
               <Cell col={4}>
                <p style={{fontSize: '18px'}}>{this.props.startYear} - {this.props.endYear}</p>
               </Cell>
               <Cell col={8}>
                <h4 style={{marginTop: '0px', fontFamily: 'Segoe UI', fontSize: '18px'}}>{this.props.schoolDescription}</h4>
                <p style={{marginTop: '-20px', fontFamily: 'Segoe UI', fontSize: '16spx'}}>{this.props.schoolName}</p>
               </Cell>
           </Grid>
        )
    }
}

export default Education;