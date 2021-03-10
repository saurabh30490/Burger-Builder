import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux1';

const sideDrawer = (props) =>{
    let attachedClasses = [Classes.SideDrawer, Classes.Close];
    if(props.open)
      attachedClasses = [Classes.SideDrawer, Classes.Open];
    return (
        <Aux>
          <Backdrop show={props.open} clicked={props.closed}/>
          <div className={attachedClasses.join(' ')}>
              <div className={Classes.Logo}>
              <Logo />
              </div>
              <nav>
                  <NavigationItems />
              </nav>
          </div>
        </Aux>
    );
};


export default sideDrawer;