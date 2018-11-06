import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { updateName, getHelloThunk, getHelloSaga } from '../actions/userAction';

class Home extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home</Text>
                <Button
                    title='Link to Detail'
                    onPress={()=>this.props.navigation.navigate('Detail')}
                />
                <Text>{this.props.state.appData.user.name}</Text>
                <Button
                    title='updateName@Home'
                    onPress={() => this.props.updateName('foo@Home')}
                />
                <Button
                    title='updateName@Thunk'
                    onPress={() => this.props.getHelloThunk()}
                />
                <Button
                    title='updateName@Saga'
                    onPress={() => this.props.getHelloSaga()}
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
        getHelloThunk: () => dispatch(getHelloThunk()),
        getHelloSaga: () => dispatch(getHelloSaga()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;