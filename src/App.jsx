import React from 'react';
import { Button } from 'antd';
import MainLayout from 'components/MainLayout';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 2,
    };
  }

  render() {
    return <MainLayout/>;
  }
}
