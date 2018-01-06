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

    this.state = {
      value: this.props.value,
    };
  }

  formatValue() {
    return this.state.value;
  }

  render() {
    const value = this.state.value ? this.formatValue() : '-';

    return (
      <View style={[shareStyles.runInfoContainer, { flex: 1 }]}>
        <Text style={shareStyles.runInfoTitle}>
          {this.props.title.toUpperCase()}
        </Text>
        <Text style={shareStyles.runInfoValue}>{value}</Text>
      </View>
    );
  }
}

export default RunInfo;
