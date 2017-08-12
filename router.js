import { StackNavigator } from 'react-navigation';
import Settings from './components/settings';

export default (Navigation = StackNavigator(
  {
    Settings: { screen: Settings },
    // Tuning: { screen: Tunings }
    // Help: { screen: Help }
  }
));
