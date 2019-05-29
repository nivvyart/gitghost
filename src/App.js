import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { Grid, GridItem, Button } from '@patternfly/react-core';
// import ItemControl from './ItemControl';



function App() {
  return (
    <Grid>
      <GridItem span={8}>span = 8</GridItem>
      <GridItem span={4} rowSpan={2}>
        span = 4, rowSpan = 2
      </GridItem>
      <GridItem span={2} rowSpan={3}>
        span = 2, rowSpan = 3
      </GridItem>
      <GridItem span={2}>span = 2</GridItem>
      <GridItem span={4}>span = 4</GridItem>
      <GridItem span={2}>span = 2</GridItem>
      <GridItem span={2}>span = 2</GridItem>
      <GridItem span={2}>span = 2</GridItem>
      <GridItem span={4}>span = 4</GridItem>
      <GridItem span={2}>span = 2</GridItem>
      <GridItem span={4}>span = 4</GridItem>
      <GridItem span={4}>span = 4</GridItem>
    </Grid>
  );
}

export default App;
