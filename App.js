import React, { useState } from 'react';
import { View } from 'react-native';
import ScrollTest from './ScrollTest';
import ReactMoE from 'react-native-moengage';


const App = () => {

    useState(() => {
        ReactMoE.initialize("YOUR_APP_ID")
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <ScrollTest />
        </View>
    );
};

export default App;