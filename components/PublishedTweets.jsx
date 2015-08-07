import API from '../API';
import React from 'react';
import PublishedStore from '../stores/PublishedTweetStore'
API.getPublishedTweets();
let getStateFromStore = () => {
  return { published_tweets: PublishedStore.getAll() };
};

export default class PublishedTweets extends React.Component {
  constructor(props) {
    super(props);
    this.state = getStateFromStore();
    this.onStoreChange = this.onStoreChange.bind(this);
  }
  onStoreChange() {
    this.setState(getStateFromStore());
  }
  componentDidMount() {
    PublishedStore.addChangeListener(this.onStoreChange);
  }
  componentWillUnmount() {
    PublishedStore.removeChangeListener(this.onStoreChange);
  }
  render() {
    let published = this.state.published_tweets.map(tweet => {
      return (
        <tr key={tweet.id}>
          <td><img src={tweet.avatar_url} className="avatar circle" /></td>
          <td>{tweet.twitter_handle}</td>
          <td>{tweet.location}</td>
          <td>{tweet.tweet_text}</td>
        </tr>
        )
    })
    return (
      <table className="striped hoverable">
      <tbody>
      <tr>
      <th>Avatar</th>
      <th>Screen Name</th>
      <th>Location</th>
      <th>Tweet Text</th>
      </tr>
        {published}
      </tbody>
      </table>
      )
  }
}