import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {Login} from './src/screen/Login/Login'
import {Banco} from "./src/screen/Banco/Banco";
import {Registro} from './src/screen/Registro/Registro'
import {RegistroCompl} from './src/screen/Registro-Complementar/RegistroCompl'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown:false
                }}
            />
          <Stack.Screen
              name="Banco"
              component={Banco}
              options={{
                  headerShown: false
              }}
          />
            <Stack.Screen
                name="Registro"
                component={Registro}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="RegistroComplementar"
                component={RegistroCompl}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

