import { createStackNavigator } from 'react-navigation'

import Home from '../screens/home/Home'
import Setting from '../screens/setting/Setting'

const SNavigation = createStackNavigator({
      Home: Home,
      Setting: Setting
}, {
      initialRouteName: 'Home',
      headerMode: 'none',
})

export default SNavigation;