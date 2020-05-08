import * as React from 'react';
import Header from 'common/Header';
import { Grid } from 'components/Grid';
import { Title } from 'components/Title';
import styled from 'styled-components';

const GridPage: React.FC<{}> = () => (
  <>
    <Header>Components</Header>
    <Title tag="h1" size="xlarge">
      Grid
    </Title>
    <Container>
      <Grid col={3} container>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Grid>
    </Container>

    <Container>
      <Grid col={2} container>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Grid>
    </Container>

    <Container>
      <Grid wrap="nowrap" container>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
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

export default GridPage;
