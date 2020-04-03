import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Alert from './Alert';
import styled from 'styled-components';

storiesOf('Alert', module).add('all', () => (
  <Container>
    <Item>
      <Alert color={'info'}>
        Infomation Color <a href="">インフォメーション</a>だよ
      </Alert>
    </Item>
    <Item>
      <Alert color={'success'}>
        Success Color <a href="">サクセス</a>だよ
      </Alert>
    </Item>
    <Item>
      <Alert color={'caution'}>
        Caution Color <a href="">コーション</a>だよ
      </Alert>
    </Item>
    <Item>
      <Alert color={'error'}>
        Error Color <a href="">エラー</a>だよ
      </Alert>
    </Item>
  </Container>
));

const Container = styled.div`
  max-width: 740px;
`;

const Item = styled.div`
  margin-bottom: 12px;
`;
