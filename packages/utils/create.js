/**
 * Create a component with common options
 */
import Icon from '../icon'
import install from './install'
import Loading from '../loading'

export default function(sfc) {
  sfc.components = sfc.components || {}
  sfc.install = sfc.install || install
  sfc.components.icon = Icon
  sfc.components.loading = Loading

  return sfc
}
