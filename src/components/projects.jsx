import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, CardMenu, IconButton, Document, Page, pageNumber, } from 'react-mdl';
import snackbar from './snackbar.jpg';
import makeup from './makeup.jpg';
import arcomaquinas from './arcomaquinas.jpg';
import anchor from './anchor.jpg';
import bannerLi from './bannerLi.jpg';
import cartaoLi from './cartaoLi.jpg';
import cardapioLi from './cardapioLi.jpg';
// import folder from './folder.jpg';
// import catalogo from './catalogo.jpg';
// import novo from './cartaoTersel.jpg';
// import manu from './manu.jpg';
// import nana from './nana.jpg';
// import festa from './festa.jpg';



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

            <Card shadow={0} style={{width: '270px', height: '380px', margin: 'auto', marginBottom: '10px',  marginRight:'370px'}}>
            <img src={anchor} alt={"anchor"} style={{ height: '100%', padding:'0'}} />           
            </Card>         

            </div>
          )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                {/* <h3 className='h3-style' style={{ marginBottom:'500px'}}>Visual Identity</h3> */}
                    <Card shadow={0} style={{width: '270px', height: '380px', margin: 'auto', marginRight: '20px', marginBottom: '10px'}}>
                    <img src={bannerLi} style={{ height: '100%', padding:'0'}} />
                    </Card>

                    <Card shadow={0} style={{width: '304', height: '346', margin: 'auto', marginRight: '20px', marginBottom: '10px'}}>
                    <img src={cartaoLi} style={{ height: '100%', padding:'0'}} />
                    </Card>

                    <Card shadow={0} style={{width: '270px', height: '380px', margin: 'auto', marginRight: '20px', marginBottom: '10px'}}>
                    <img src={cardapioLi} style={{ height: '100%', padding:'0'}} />
                    </Card>



                    <Card shadow={0} style={{width: '270', height: '380px', margin: 'auto', marginRight: '20px', marginBottom: '10px'}}>
                    <a href="components/catalogo.pdf" download style={{ height: '100%', padding:'0'}}><img src={cardapioLi}  /></a>
                    </Card>

                    <Card shadow={0} style={{width: '270px', height: '380px', margin: 'auto', marginRight: '20px', marginBottom: '10px'}}>
                    <img src={cardapioLi} style={{ height: '100%', padding:'0'}} />
                    </Card>

                    <Card shadow={0} style={{width: '270px', height: '380px', margin: 'auto', marginRight: '20px', marginBottom: '10px'}}>
                    <img src={cardapioLi} style={{ height: '100%', padding:'0'}} />
                    </Card>




                    <Card shadow={0} style={{width: '270px', height: '380px', margin: 'auto', marginRight: '20px', marginBottom: '10px'}}>
                    <img src={cardapioLi} style={{ height: '100%', padding:'0'}} />
                    </Card>

                    <Card shadow={0} style={{width: '270px', height: '380px', margin: 'auto', marginRight: '20px', marginBottom: '10px'}}>
                    <img src={cardapioLi} style={{ height: '100%', padding:'0'}} />
                    </Card>

                    <Card shadow={0} style={{width: '256px', height: '256px', background: 'url(components/manu.jpg) center / cover', margin: 'auto'}}>
                        <CardTitle expand />
                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                            <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                manu.jpg
                            </span>
                        </CardActions>
                    </Card>

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