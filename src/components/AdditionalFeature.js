import React from 'react';

import { connect } from 'react-redux'

//import an addFeature action
import { addFeature } from '../actions/carActions'

const AdditionalFeature = props => {
  return (
    <li>
      <button className="button" onClick={() => {props.addFeature(props.feature)}}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
