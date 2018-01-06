import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import shareStyles from '../styles/shared-styles';

class RunInfo extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[shareStyles.runInfoContainer, { flex: 1 }]}>
        <Text style={shareStyles.runInfoTitle}>
          {this.props.title.toUpperCase()}
        </Text>
        <Text style={shareStyles.runInfoValue}>{this.props.value}</Text>
      </View>
    );
  }
}

export default RunInfo;
