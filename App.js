import * as React from 'react';
import { Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './routes/home/Home';
import Pembatalan from './routes/Pembatalan';
import Pesanan from './routes/Pesanan';
import Lainnya from './routes/Lainnya';
import BuatTiket from './routes/home/BuatTiket';
import Submit from './routes/home/Submit';

import HomeIcon1 from './assets/Home1.png';
import PesananIcon1 from './assets/Pesanan1.png';
import PembatalanIcon1 from './assets/Pembatalan1.png';
import LainnyaIcon1 from './assets/Lainnya1.png';

import HomeIcon2 from './assets/Home2.png';
import PesananIcon2 from './assets/Pesanan2.png';
import PembatalanIcon2 from './assets/Pembatalan2.png';
import LainnyaIcon2 from './assets/Lainnya2.png';

const createTab = createBottomTabNavigator();
const navigateStack = createNativeStackNavigator();

const HomeStack = () => {
    return(
        <navigateStack.Navigator initialRouteName="Home">
            <navigateStack.Screen name = "Home" component = {Home} options={{headerShown: false,}}/>
            <navigateStack.Screen name = "BuatTiket" component = {BuatTiket} options={{headerShown: false,}}/>
            <navigateStack.Screen name = "Submit" component = {Submit} options={{headerShown: false,}}/>
        </navigateStack.Navigator>
    );
}

const App = () => {
    return(
        <NavigationContainer>
            <createTab.Navigator tabBarOptions={{activeTintColor: '#00579C',}}>
               
                <createTab.Screen name="HomeStack" component={HomeStack} options={{
                    title:"Home",
                    headerShown: false,
                    tabBarIcon: ({ focused,size }) => (
                        <Image source={
                            focused
                            ? HomeIcon1
                            : HomeIcon2} style={{width: size,height: size,}}/>
                    ),
                }}/>

             
                <createTab.Screen name="Pesanan Saya" component={Pesanan} options={{
                    title:"Daftar Pesanan",
                    headerStyle:{backgroundColor: '#00579C'},
                    headerTitleAlign: 'center',
                    headerTitleStyle: {color:'white'},
                    tabBarIcon: ({ focused,size }) => (
                        <Image source={ focused
                            ? PesananIcon1
                            : PesananIcon2} style={{width: size,height: size,}}/>
                    ),
                }}
                />
           
                <createTab.Screen name="Pembatalan" component={Pembatalan} options={{
                    title:"Daftar Pembatalan",
                    headerStyle:{backgroundColor: '#00579C'},
                    headerTitleAlign: 'center',
                    headerTitleStyle: {color:'white'},
                    tabBarIcon: ({ focused,size }) => (
                        <Image source={ focused
                            ? PembatalanIcon1
                            : PembatalanIcon2} style={{width: size,height: size,}}/>
                    ),
                }}
                />
                
            
                <createTab.Screen name="Lainnya" component={Lainnya} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused,size }) => (
                        <Image source={ focused
                            ? LainnyaIcon1
                            : LainnyaIcon2} style={{width: size,height: size,}}/>
                    ),
                }}     
                />
            </createTab.Navigator>
        </NavigationContainer>
    );
}

export default App;