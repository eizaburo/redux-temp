import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { updateName } from '../actions/userAction';

class Detail extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Detail</Text>
                <Text>{this.props.state.appData.user.name}</Text>
                <Button
                    title='updateName@Detail'
                    onPress={() => this.props.updateName('baz@Detail')}
                />
            </View>
        );
    }
}

const mapStateToProps = state => (
    {
        state: state,
    }
);

const mapDispatchToProps = dispatch => {
    return {
        updateName: (name) => dispatch(updateName(name)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

// export default Detail;