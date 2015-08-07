// import API from '../API';
import React from 'react';
// import MentionsStore from '../stores/MentionsStore';
// API.getMentions();
// let getStateFromStore = () => {
//   return { mentions: MentionsStore.getAll() };
// };

export default class Mentions extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = getStateFromStore();
  //   this.onStoreChange = this.onStoreChange.bind(this);
  // }
  // onStoreChange() {
  //   this.setState(getStateFromStore());
  // }
  // componentDidMount() {
  //   MentionsStore.addChangeListener(this.onStoreChange);
  // }
  // componentWillUnmount() {
  //   MentionsStore.removeChangeListener(this.onStoreChange);
  // }
  render() {
    // let recent = this.state.mentions.map(tweet => {
    //   return (
    //     <tr key={tweet.id}>
    //     <td><img src={tweet.user.profile_image_url} className="img-circle" /></td>
    //     <td>{ tweet.user.screen_name}</td>
    //     <td><span className="badge bg-blue">{ tweet.user.location || "Unknown"}</span></td>
    //     <td>{ tweet.text}</td>
    //     <td><a className="btn btn-app text-yellow"><i className="fa fa-star"></i> Publish</a></td>
    //     <td><a className="btn btn-app text-red"><i className="fa fa-trash"></i> Remove</a></td>
    //     </tr>
    //     )
    // })
    return (
      <section className="content">
      <div className="box">
      <div className="box-header">
      <h3 className="box-title">Recent Mentions on Twitter</h3>
      <div className="box-tools pull-right">
      <button className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
      </div>
      </div>
      <div className="box-body no-padding">
      <table className="table">
      <tbody>
      <tr>
      <th>Avatar</th>
      <th>Twitter Handle</th>
      <th>Location</th>
      <th>Tweet</th>
      <th></th>
      <th></th>
      </tr>
      
      </tbody>
      </table>
      </div>
      <div className="box-footer text-center">
        footer here
      </div>
      </div>
      </section>
      )
  }
}




