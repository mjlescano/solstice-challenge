import { StackNavigator } from 'react-navigation'
import Contacts from './Contacts'
import Contact from './Contact'

export default StackNavigator({
  Contacts: { screen: Contacts },
  Contact: { screen: Contact }
})
