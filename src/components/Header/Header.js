import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = () => ({
  appHeader: {
    backgroundColor: '#001D29',
    color: 'white',
    minHeight: '70px',
    padding: '.5rem',
    marginBottom: '2.5rem'
  }
})
class Header extends Component {
  render() {
    return (
      <header className={this.props.classes.appHeader}>
        <h1>Feedback!</h1>
      </header>
    )
  }
}

export default withStyles(styles)(Header);
