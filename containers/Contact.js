import { connect } from 'react-redux'
import { getContact } from '../reducers'
import ContactView from '../components/ContactView'

export default connect((state, props) => ({
  ...getContact(state, state.id)
}))(ContactView)
