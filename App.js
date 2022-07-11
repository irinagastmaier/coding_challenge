import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';

const Stack = createNativeStackNavigator();

const WelcomeScreen = () => {
  return <View>Welcome Screen</View>;
};

const ProfileInfoScreen = () => {
  return <View>Profi lInfo Screen</View>;
};

const ProfileInfoLipoScreen = () => {
  return <View>Profil Info Lipo Screen</View>;
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Profile" component={ProfileInfoScreen} />
        <Stack.Screen name="ProfileLipo" component={ProfileInfoLipoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //    position: relative,
    width: '375px',
    height: '812px',
    backgroundColor: '#F3F5F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
