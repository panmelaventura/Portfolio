import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import pan2 from './pan2.png';


class About extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={3}>
                        <div style={{ textAlign: 'center' }}>
                            <img src={pan2} alt={"pan"} style={{ height: '240px', paddingTop: '50px' }} />
                        </div>

                    </Cell>



                </Grid>
            </div>
        )
    }
}
export default About;