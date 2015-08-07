import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import RightBar from './components/RightBar'
import Mentions from './components/Mentions'
class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
          <Mentions />
        </div>
        <Footer />
        <RightBar />
        <div className="control-sidebar-bg"></div>
      </div>
      );
  }
}

$(()=> {
  ReactDOM.render(
    <App />,
    $("#react")[0]
  )
});