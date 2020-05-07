import * as React from 'react';
import Header from 'common/Header';
import { Title } from 'components/Title';

const TitlePage: React.FC<{}> = () => (
  <>
    <Header>Components</Header>
    <Title tag="h1" size="xlarge">
      Title
    </Title>
    <Title tag="h1" size="xlarge">
      xlarge
    </Title>
    <Title tag="h2" size="large">
      large
    </Title>
    <Title tag="h3" size="regular">
      regular
    </Title>
    <Title tag="h4" size="small">
      small
    </Title>
  </>
);

export default TitlePage;
