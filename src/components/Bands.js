import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  render() {
    const bandList = this.props.store.getState().bands.map((band) => {
      return <Band band={band} key={band.id} store={this.props.store}/>
    })

    return(
      <ul>
        {bandList}
      </ul>
    );
  }
};

export default Bands;
