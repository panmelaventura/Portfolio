import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';


class Contact extends Component {
    render(){
        return(
             <div className="contact-body" style={{backgroundColor:'#f1f1f1'}}>
                <Grid className="contact-grid">
                    <Cell col={6}>
                    <h2 className="h2-style">Contact Me</h2>
                    <hr/>
                    <div className="contact-list" style={{textAlign: 'center'}}> 
                    <List>
                    <ListItem> 
                        <ListItemContent style={{fontSize:'18px'}}>
                            <i className="fa fa-phone" aria-hidden="true"/>
                            (416) 938 6402
                        </ListItemContent>
                    </ListItem>

                    <ListItem>
                        <ListItemContent style={{fontSize:'18px'}}>
                            <i className="fa fa-envelope" aria-hidden="true"/>
                            panmelaventura@gmail.com
                        </ListItemContent>
                    </ListItem>

                     <ListItem>
                        <ListItemContent style={{fontSize:'18px'}}>
                            <i className="fa fa-skype" aria-hidden="true"/>
                            live:panmelaventura
                        </ListItemContent>
                    </ListItem>

                     <ListItem>
                        <ListItemContent style={{fontSize:'18px'}}>
                            <i className="fa fa-github" aria-hidden="true"/>
                            <a href="https://www.github.com/panmelaventura" target="_blank" style={{textDecoration: 'none', color:'black'}} >GitHub</a>
                        </ListItemContent>
                     </ListItem>

                     <ListItem>
                        <ListItemContent style={{fontSize:'18px'}}>
                            <i className="fa fa-linkedin" aria-hidden="true"/>
                            <a href="https://www.linkedin.com/in/panmela-ventura-da-graca-de-morais-275878164/" target="_blank" style={{textDecoration: 'none', color:'black'}} >Panmela Morais</a>
                        </ListItemContent> 
                    </ListItem>
                    </List>
                    
                    </div>
                   
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}
export default Contact;