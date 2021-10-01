import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import './Images/AJ.jpg';

const GridColumnWidth = () => (
    <Grid>
        <Grid.Column width={4}>
            <Image src="./Images/AJ.jpg" />
        </Grid.Column>
        <Grid.Column width={9}>
            <Image src="./Images/AJ.jpg" />
        </Grid.Column>
        <Grid.Column width={3}>
            <Image src="./Images/AJ.jpg" />
        </Grid.Column>
    </Grid>
)

export default GridColumnWidth
