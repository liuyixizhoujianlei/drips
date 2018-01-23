import docConfig from './doc.config'
import DemoList from './components/DemoList'
import componentDocs from '../markdown'
import componentDemos from '../examples'
import './utils/iframe-router'

const registerRoute = (isExample) => {
  const route = [{
    path: '*',
    redirect: to => `/zh-CN/`
  }]

  Object.keys(docConfig).forEach((lang, index) => {
    if (isExample) {
      route.push({
        path: `/${lang}`,
        component: DemoList,
        meta: { lang }
      })
    } else {
      route.push({
        path: `/${lang}`,
        redirect: `/${lang}/component/intro`
      })
    }

    const navs = docConfig[lang].nav || []
    navs.forEach(nav => {
      if (isExample && !nav.showInMobile) {
        return
      }

      if (nav.groups) {
        nav.groups.forEach(group => {
          group.list.forEach(page => addRoute(page, lang))
        })
      } else if (nav.children) {
        nav.children.forEach(page => addRoute(page, lang))
      } else {
        addRoute(nav, lang)
      }
    })
  })

  return route

  function addRoute(page, lang) {
    const { path } = page
    if (path) {
      const name = lang + '/' + path.replace('/', '')
      let component

      component = isExample ? componentDemos[path.replace('/', '')] : componentDocs[name]

      route.push({
        name,
        component,
        path: `/${lang}/component${path}`,
        meta: { lang }
      })
    }
  }
}

export default registerRoute
