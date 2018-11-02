import {createBottomTabNavigator,createStackNavigator} from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import InfoScreen from '../screens/InfoScreen'

console.disableYellowBox=true

const BottomTab = createBottomTabNavigator({
  Home:{
    screen: HomeScreen
  },
  Favo:{
    screen:FavoritesScreen
  },

},{
  initialRouteName:"Home"
});

export default Stack = createStackNavigator({
  BottomTab:{
    screen:BottomTab
  },
  Info:{
    screen:InfoScreen
  }
},{
  headerMode:'none',
  initialRouteName:"BottomTab"
}
)

