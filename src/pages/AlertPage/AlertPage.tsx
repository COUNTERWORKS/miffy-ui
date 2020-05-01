import * as React from 'react';
import Header from 'common/Header';
import { Alert } from 'components/Alert';
import { Title } from 'components/Title';

const AlertPage: React.FC<{}> = () => (
  <>
    <Header>Components</Header>
    <Title tag="h1" size="xlarge">
      Alerts
    </Title>
    <Alert color="info">
      Infomation Color <a href="#">インフォメーション</a>だよ
    </Alert>
    <Alert color="success">
      Success Color <a href="#">サクセス</a>だよ
    </Alert>

    <Alert color="caution">
      Caution Color <a href="#">コーション</a>だよ
    </Alert>
    <Alert color="error">
      Error Color <a href="#">エラー</a>だよ
    </Alert>

    <Alert color="info" closeIcon>
      Infomation Color <a href="#">インフォメーション</a>だよ
    </Alert>
    <Alert color="success" closeIcon>
      Success Color <a href="#">サクセス</a>だよ
    </Alert>

    <Alert color="caution" closeIcon>
      Caution Color <a href="#">コーション</a>だよ
    </Alert>
    <Alert color="error" closeIcon>
      Error Color <a href="#">エラー</a>だよ
    </Alert>
  </>
);

export default AlertPage;
