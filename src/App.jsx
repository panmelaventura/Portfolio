import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Projects from './components/projects';
import Contact from './components/contact';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor/lib';


class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout className="layout-background" >
                    <Header transparent title={<Link style={{ textDecoration: 'none', color: 'black' }}
                        to="/"></Link>} scroll >
                        {/* <Navigation>
                    
                    <Link style={{color: 'black'}} to="/">HOME</Link>
                    <Link style={{color: 'black'}} to="aboutme">ABOUT ME</Link>
                    <Link style={{color: 'black'}} to="projects">PROJECTS</Link>
                    <Link style={{color: 'black'}} to="resume">RESUME</Link>
                    <Link style={{color: 'black'}} to="contact">CONTACT</Link>
                </Navigation> */}
                        <a href='#section1'>Projects</a>
                        <a href="#contacts">Contacts</a>
                    </Header>
                    {/* <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} 
            to="/"></Link>}>
                <Navigation>
                    <Link to="resume">Resume</Link>
                    <Link to="/">Home</Link>                    
                    <Link to="projects">Projects</Link>
                    <Link to="resume">Resume</Link>
                    <Link to="contact">Contact</Link>
                </Navigation>
            </Drawer> */}
                    <Content>
                        <div className="page-content" />
                        <Main />

                            <ScrollableAnchor key={'section1'} id={'section1'}>
                                <Projects />
                            </ScrollableAnchor>

                        <div id="contacts">
                            <Contact />
                        </div>

                        <Footer size="mini" >
                            <FooterSection style={{ margin: 'auto', padding: 'auto' }} >
                                <p>	&copy; copyright all rights reserved - panmelaventura</p>
                                <div className="social-links">
                                    {/*LinkedIn*/}
                                    <a href="https://www.linkedin.com/in/panmela-ventura-da-graca-de-morais-275878164/" rel="noopener noreferrer" targe="_blank">
                                        <i className="fa fa-linkedin" aria-hidden="true" />
                                    </a>

                                    {/*Github*/}
                                    <a href="https://github.com/panmelaventura" rel="noopener noreferrer" targe="_blank">
                                        <i className="fa fa-github" aria-hidden="true" />
                                    </a>


                                    {/*Insta*/}
                                    <a href="https://www.instagram.com/panmelaventura/" rel="noopener noreferrer" targe="_blank">
                                        <i className="fa fa-instagram" aria-hidden="true" />
                                    </a>

                                    {/*Face*/}
                                    <a href="https://www.facebook.com/panmela.ventura" rel="noopener noreferrer" targe="_blank">
                                        <i className="fa fa-facebook" aria-hidden="true" />
                                    </a>

                                </div>
                            </FooterSection>
                        </Footer>

                    </Content>



                </Layout>



            </div>

        );
    }
}

export default App;
