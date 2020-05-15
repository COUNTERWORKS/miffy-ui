import * as React from 'react';
import Header from 'common/Header';
import { Grid } from 'components/Grid';
import { Title } from 'components/Title';
import { Button, OutlineButton } from 'components/Button';
import styled from 'styled-components';

export const ButtonPage: React.FC<{}> = () => (
  <>
    <Header>Components</Header>
    <Title tag="h1" size="xlarge">
      Buttons
    </Title>
    <Container>
      <Grid col={4} container>
        <Grid>
          <Button size="normal">Primary Button</Button>
        </Grid>
        <Grid>
          <Button color="secondary" size="normal">
            Secondary Button
          </Button>
        </Grid>
        <Grid>
          <Button color="newtral" size="normal">
            Newtral Button
          </Button>
        </Grid>
        <Grid>
          <Button color="light" size="normal">
            light
          </Button>
        </Grid>
      </Grid>
    </Container>

    <Container>
      <Grid col={4} container>
        <Grid>
          <OutlineButton size="normal">Primary Button</OutlineButton>
        </Grid>
        <Grid>
          <OutlineButton color="secondary" size="normal">
            Secondary Button
          </OutlineButton>
        </Grid>
        <Grid>
          <OutlineButton color="newtral" size="normal">
            Newtral Button
          </OutlineButton>
        </Grid>
      </Grid>
    </Container>
  </>
);

const Item = styled(Grid)`
  background: ${({ theme }): string => theme.palette.colorCode.gray[200]};
  height: 36px;
  width: 100px;
`;

const Container = styled.div`
  margin-bottom: 32px;
`;

export default ButtonPage;
