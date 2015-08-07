import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          Built by <a href="http://gillingh.am/?ref=mouthy">Gillinghammer</a>. <span>Let's grab a <i className="fa fa-beer"></i></span>
        </div>
        <strong>Copyright &copy; 2015 <a href="#">Mouthy Inc</a>.</strong> <span>All rights reserved.</span>
      </footer>
      )
  }
}