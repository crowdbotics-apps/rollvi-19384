import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial87559Navigator from '../features/Tutorial87559/navigator';
import NotificationList87531Navigator from '../features/NotificationList87531/navigator';
import Settings87530Navigator from '../features/Settings87530/navigator';
import Settings87522Navigator from '../features/Settings87522/navigator';
import UserProfile87520Navigator from '../features/UserProfile87520/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial87559: { screen: Tutorial87559Navigator },
NotificationList87531: { screen: NotificationList87531Navigator },
Settings87530: { screen: Settings87530Navigator },
Settings87522: { screen: Settings87522Navigator },
UserProfile87520: { screen: UserProfile87520Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
