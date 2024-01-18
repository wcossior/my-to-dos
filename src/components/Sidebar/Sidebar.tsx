import React, { Component } from 'react';
import "./Sidebar.css";
import UserSection from '../UserSection/UserSection';
import GroupSection from '../GroupSection/GroupSection';
import SignOutSection from '../SignOutSection/SignOutSection';

export default class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <UserSection></UserSection>
        <GroupSection></GroupSection>
        <SignOutSection></SignOutSection>
      </div>
    )
  }
}
