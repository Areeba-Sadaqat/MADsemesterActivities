import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text>Hey, its header file!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
