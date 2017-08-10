import rules from '../../utils/rules'

const plugin = {
  install (Vue) {
    if (!Vue.$drips) {
      Vue.$drips = {
        rules
      }
      return
    }

    Vue.$drips.rules = rules
  }
}

export default plugin
