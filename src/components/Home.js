import React from 'react';
import { Tabs, Button, Spin } from 'antd';
import {GEO_OPTIONS} from '../constants';

const TabPane = Tabs.TabPane;

export class Home extends React.Component {

  state = {
    isLoadingGeoLocation: true,
    error: '',
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      this.setState({ isLoadingGeoLocation: true, error: '' });
      navigator.geolocation.getCurrentPosition(
        this.onSuccessLoadGeoLocation,
        this.onFailedLoadGeoLocation,
        GEO_OPTIONS);
    } else {
      this.setState({ error: 'Geolocation is not supported.'});
    }
  }

  onSuccessLoadGeoLocation = (position) => {
    console.log(position);
    this.setState({ isLoadingGeoLocation: false });
  }

  onFailedLoadGeoLocation = () => {
    console.log("Failed to load geo location");
    this.setState({ isLoadingGeoLocation: false, error: 'Failed to load geolocation.' });
  }

  getImagePosts = () => {
    const {error, isLoadingGeoLocation } = this.state;
    if (error) {
      return <div>{error}</div>;
    } else if (isLoadingGeoLocation) {
      return <Spin tip="Loading geo location..."/>;
    } else {
      return 'content of tab 1';
    }
  }

  render() {
    const operations = <Button type="primary">Create New Post</Button>;
    return (
      <Tabs tabBarExtraContent={operations} className="main-tabs">
        <TabPane tab="Image Posts" key="1">{this.getImagePosts()}</TabPane>
        <TabPane tab="Video Posts" key="2">Content of tab 2</TabPane>
        <TabPane tab="Map" key="3">Content of tab 3</TabPane>
      </Tabs>
    );
  }

}