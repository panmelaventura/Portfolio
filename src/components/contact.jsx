import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';


class Contact extends Component {
    render(){
        return(
             <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                    <h2 className="h2-style">Contact Me</h2>
                    <hr/>
                    <div className="contact-list" style={{textAlign: 'center'}}> 
                    <List>
                    <ListItem> 
                        <ListItemContent style={{fontSize:'20px'}}>
                            <i className="fa fa-phone" aria-hidden="true"/>
                            (416) 938 6402
                        </ListItemContent>
                    </ListItem>

                    <ListItem>
                        <ListItemContent style={{fontSize:'20px'}}>
                            <i className="fa fa-fax" aria-hidden="true"/>
                            (416) 938 6402
                        </ListItemContent>
                     </ListItem>

                     <ListItem>
                        <ListItemContent style={{fontSize:'20px'}}>
                            <i className="fa fa-envelope" aria-hidden="true"/>
                            panmelaventura@gmail.com
                        </ListItemContent>
                    </ListItem>

                     <ListItem>
                        <ListItemContent style={{fontSize:'20px'}}>
                            <i className="fa fa-skype" aria-hidden="true"/>
                            MySkypeID
                        </ListItemContent>
                    </ListItem>

                     <ListItem>
                        <ListItemContent style={{fontSize:'20px'}}>
                            <i className="fa fa-github" aria-hidden="true"/>
                            GitHub
                        </ListItemContent>
                    </ListItem>

                     <ListItem>
                        <ListItemContent style={{fontSize:'20px'}}>
                            <i className="fa fa-facebook" aria-hidden="true"/>
                            Facebook
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