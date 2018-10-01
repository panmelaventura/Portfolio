import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Projects from './components/projects';
import Contact from './components/contact';
import Resume from './components/resume';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor/lib';


class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout className="layout-background" >
                    <Header style={{backgroundColor:'#f9ecec'}} 
                        title={<Link style={{ textDecoration: 'none', color: 'black' }}
                        to="/"></Link>} scroll >
                        
                        <Navigation >
                            <a style={{color: '#cc6666'}} href='/'>Home</a>
                            <a style={{color: '#cc6666'}} href='#projects'>Projects</a>
                            <a style={{color: '#cc6666'}} href="#resume">Resume</a>
                            <a style={{color: '#cc6666'}} href="#contacts">Contact</a>

                        </Navigation>
                    </Header>
                    <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} 
            to="/"></Link>}>
                <Navigation>
                
                    <a href='/'>Home</a>
                    <a href='#projects'>Projects</a>
                    <a href='#resume'>Resume</a>
                    <a href='#contact'>Contact</a>
                </Navigation>
            </Drawer> 
                    <Content>
                        <div className="page-content" />
                        <Main />

                        <div id="projects">
                            <Projects />
                        </div>

                        <div id="resume">
                            <Resume />
                        </div>

                        <div id="contacts">
                            <Contact />
                        </div>

                        <Footer size="mini" >
                            <FooterSection style={{ margin: 'auto', padding: 'auto' }} >
                                <p>	&copy; copyright all rights reserved - panmelaventura</p>
                                <div className="social-links">
                                    <a href="https://www.linkedin.com/in/panmela-ventura-da-graca-de-morais-275878164/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin" aria-hidden="true" />
                                    </a>

                                    
                                    <a href="https://github.com/panmelaventura" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github" aria-hidden="true" />
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
