import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, CardMenu, IconButton, Document, Page, pageNumber, } from 'react-mdl';
import snackbar from './snackbar.jpg';
import makeup from './makeup.jpg';
import arcomaquinas from './arcomaquinas.jpg';
import anchor from './anchor.jpg';
import bannerLi from './bannerLi.jpg';
import cartaoLi from './cartaoLi.jpg';
import cardapioLi from './cardapioLi.jpg';
import folder from './folder.jpg';
import catalogo from './catalogo.jpg';
import cartaoTersel from './cartaoTersel.jpg';
import manu from './manu.png';
import nana from './nana.jpg';
import festa from './festa.jpg';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }


    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                
        <div className="projects-grid">
            <Card shadow={0} style={{width: '270px', height: '380px', margin: 'auto', marginRight: '5px', marginBottom: '10px'}}>
            <img src={snackbar} alt={"snackbar"} style={{ height: '100%', padding:'0'}} />
            </Card>

            <Card shadow={0} style={{width: '270px', height: '380px', margin: 'auto', marginRight: '5px', marginBottom: '10px'}}>
            <img src={makeup} alt={"makeup"} style={{ height: '100%', padding:'0'}} />              
            </Card>

            <Card shadow={0} style={{width: '270px', height: '380px', margin: 'auto', marginRight: '5px', marginBottom: '10px'}}>
            <img src={arcomaquinas} alt={"arcomaquinas"} style={{ height: '100%', padding:'0'}} />                             
            </Card>

            {/*<Card shadow={0} style={{width: '270px', height: '380px', margin: 'auto', marginBottom: '10px',  marginRight:'370px'}}>
            <img src={anchor} alt={"anchor"} style={{ height: '100%', padding:'0'}} />           
            </Card>  */}       

            </div>
          )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                {/* <h3 className='h3-style' style={{ marginBottom:'500px'}}>Visual Identity</h3> */}

                    <Card shadow={0} style={{width: '270px', height: '380px', margin: 'auto', marginRight: '5px', marginBottom: '15px'}}>
                    <img src={folder} alt={"folder"} style={{ height: '100%', padding:'0'}} />
                    </Card>

                    <Card shadow={0} style={{width: '304px', height: '380px', margin: 'auto', marginRight: '5px', marginBottom: '15px'}}>
                    <img src={cartaoTersel} alt={"cartaoTersel"} style={{ height: '100%', padding:'0'}} />
                    </Card>

                    <Card shadow={0} style={{width: '270px', height: '380px', margin: 'auto', marginRight: '5px', marginBottom: '15px'}}>
                    <img src={catalogo} alt={"catalogo"} style={{ height: '100%', padding:'0'}} />
                    </Card>

                    


                    {/*<Card shadow={0} style={{width: '270px', height: '380px', margin: 'auto', marginRight: '5px', marginBottom: '15px'}}>
                    <img src={cardapioLi} style={{ height: '100%', padding:'0'}} />
                    </Card>

                    <Card shadow={0} style={{width: '304px', height: '380px', margin: 'auto', marginRight: '5px', marginBottom: '15px'}}>
                    <img src={cartaoLi} style={{ height: '100%', padding:'0'}} />
                    </Card>

                    <Card shadow={0} style={{width: '270px', height: '380px', margin: 'auto', marginRight: '5px',  marginBottom: '15px'}}>
                    <img src={bannerLi} alt={"bannerLi"} style={{ height: '100%', padding:'0'}} />
                    </Card>


                     <Card shadow={0} style={{width: '270px', height: '380px', margin: 'auto', marginRight: '5px', marginBottom: '15px'}}>
                    <img src={manu} style={{ height: '100%', padding:'0'}} />
                    </Card>

                    <Card shadow={0} style={{width: '304px', height: '380px', margin: 'auto', marginRight: '5px', marginBottom: '15px'}}>
                    <img src={festa} style={{ height: '100%', padding:'0'}} />
                    </Card>

                    <Card shadow={0} style={{width: '270px', height: '380px', margin: 'auto', marginRight: '5px', marginBottom: '15px'}}>
                    <img src={manu} style={{ height: '100%', padding:'0'}} />
                    </Card> */}

                   
                    



                    
                    
                </div>
            )
        
        }
    }

    render() {
        return (
            <div className="category-tabs" >
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab style={{fontFamily: 'Raleway', fontSize: '18px', fontWeight: 'normal'}}>OnLine Media</Tab>
                    <Tab style={{fontFamily: 'Raleway', fontSize: '18px', fontWeight: 'normal'}}>Printed Media</Tab>
                </Tabs>

                <Grid className="project-grid" >
                    <Cell col={12}>
                        <div className="content"> {this.toggleCategories()} </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Projects;