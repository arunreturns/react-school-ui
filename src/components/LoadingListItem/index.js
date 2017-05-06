import React, { Component } from 'react';
import './styles.css';

class LoadingListItem extends Component {
  render() {
    return (
      <li className="list-group-item" key={'loadingListItem'}>
        <div className="loading">
          <div className="loader"></div>
        </div>
      </li>
    );
  }
}

export default LoadingListItem;
