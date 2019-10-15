import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

export default createAppContainer(
  createStackNavigator({
  Main,
  Product,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#DA552F",
    },
    headerTintColor: '#fff',
  }
}));