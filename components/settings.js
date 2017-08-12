import React, { Component, Picker, Item } from 'react';
import { Text } from 'react-native';

class Settings extends Component {

  static propTypes = {
    // instrument: React.propTypes.string,
    // type: React.PropTypes.string,
    // fromString: React.PropTypes.number,
    // toString: React.PropTypes.number,
    // fromFret: React.PropTypes.number,
    // toFret: React.PropTypes.number,
    // gameType: React.PropTypes.string,
    // session: React.PropTypes.string,
    // handed: React.PropTypes.string,
    // notation: React.PropTypes.number,
    // pattern: React.PropTypes.string,
    // sound: React.PropTypes.bool,
  }

  // Routes
    // Enter session
    // Enter Tuning view
    // Enter Help/Readme view
    // Exit app

  render() {
    return (
      // <Picker
      //   selectedValue={this.props.instrument}
      //   onValueChange={(itemValue, itemIndex) => this.setState({ instrument: itemValue })}
      // >
      //   <Picker.Item label='Bass' value='bass' />
      //   <Picker.Item label='Guitar' value='guitar' />
      // </Picker>
      <Text>Steven</Text>
    );
  }
}

export default Settings;
