import React, { Component } from 'react';
import "./Sidebar.css";
import UserSection from '../UserSection/UserSection';
import GroupSection from '../GroupSection/GroupSection';
import SignOutSection from '../SignOutSection/SignOutSection';
import logo from "../../assets/logo.svg";

export default class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <div className='header-sidebar'>
          <img className='logo' src={logo} alt="logo" />
          <h1>To-dos</h1>
        </div>
        <UserSection></UserSection>
        <GroupSection></GroupSection>
        <SignOutSection></SignOutSection>
      </div>
    )
  }
}
