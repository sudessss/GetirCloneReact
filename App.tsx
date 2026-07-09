import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./src/components/screens/HomeScreen"
import { NavigationContainer } from '@react-navigation/native';
import RootNavigators from './src/navigators/RootNavigators';
import 'react-native-gesture-handler'

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigators/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: '15%'
  },
});
