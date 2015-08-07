import React from 'react';
export default class Sidebar extends React.Component {
  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel">
            <div className="pull-left image">
              <img src="https://logo.clearbit.com/slackhq.com" />
            </div>
            <div className="pull-left info">
              <p id="company_id"> Company Name</p>
            </div>
          </div>
          <ul className="sidebar-menu">
            <li className="header">MENU</li>
            <li className="active"><a href="#"><i className="fa fa-paper-plane"></i> <span>Manage Tweets</span></a></li>
            <li><a href="#"><i className="fa fa-building-o"></i> <span>Edit Company</span></a></li>
            <li className="header">ACCOUNT</li>
            <li><a href="#"><i className="fa fa-credit-card"></i> <span>Billing</span></a></li>
            <li><a href='http://localhost:3000/logout' data-method='delete'><i className="fa fa-sign-out text-red"></i> <span>Sign out</span></a></li>
          </ul>
        </section>
      </aside>
      )
  }
}