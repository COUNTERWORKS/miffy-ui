import * as React from 'react';
import Header from 'common/Header';
import { Title } from 'components/Title';
import { Badge, AnchorBadge } from 'components/Badge';
import { Grid } from 'components/Grid';

export const BadgePage: React.FC<{}> = () => (
  <>
    <Header>Components</Header>
    <Title tag="h1" size="xlarge">
      Badges
    </Title>
    <Grid container>
      <Grid>
        <Badge color="info">Information</Badge>
      </Grid>
      <Grid>
        <Badge color="success">Success</Badge>
      </Grid>
      <Grid>
        <Badge color="caution">Caution</Badge>
      </Grid>
      <Grid>
        <Badge color="error">Error</Badge>
      </Grid>
      <Grid>
        <Badge color="primary">Priyary</Badge>
      </Grid>
      <Grid>
        <Badge color="secondary">Secondary</Badge>
      </Grid>
      <Grid>
        <Badge color="newtral">Newtral</Badge>
      </Grid>
      <Grid>
        <Badge color="light">Light</Badge>
      </Grid>
    </Grid>
    <Grid container>
      <Grid>
        <AnchorBadge color="info">Information</AnchorBadge>
      </Grid>
      <Grid>
        <AnchorBadge color="success">Success</AnchorBadge>
      </Grid>
      <Grid>
        <AnchorBadge color="caution">Caution</AnchorBadge>
      </Grid>
      <Grid>
        <AnchorBadge color="error">Error</AnchorBadge>
      </Grid>
      <Grid>
        <Badge color="primary">Priyary</Badge>
      </Grid>
      <Grid>
        <AnchorBadge color="secondary">Secondary</AnchorBadge>
      </Grid>
      <Grid>
        <AnchorBadge color="newtral">Newtral</AnchorBadge>
      </Grid>
      <Grid>
        <AnchorBadge color="light">Light</AnchorBadge>
      </Grid>
    </Grid>
  </>
);
