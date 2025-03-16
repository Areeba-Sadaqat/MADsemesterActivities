import { useState } from "react";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

export default function counter(){
    const [count, setCounb] = useState(0);

    const incr = () => setCount(count + 2);
    const decr = () => setCount(count - 2);
    const reset = () => setCount(0);
    const bgcolor = () => (count<5 ? 'red' : 'purple');

    return(
        <View style = {StyleSheet.container}>
            <Text style= {{color : bgcolor()}}>counter :</Text>
            <Button title="Increment" onPress={incr}></Button>
            <Button title="Decrement" onPress={decr}></Button>
            <Button title="Reset" onPress={reset}></Button>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroudColor: 'white'
    },
});