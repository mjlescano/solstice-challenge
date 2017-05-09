import { StackNavigator } from 'react-navigation'
import Contacts from './Contacts'
import Contact from './Contact'

export default StackNavigator({
  Contacts: {
    path: 'contacts',
    screen: Contacts
  },
  Contact: {
    path: 'contacts/:contact',
    screen: Contact
  }
})
