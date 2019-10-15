// import vsComponent from './vsNavbar'
import Vue from 'vue'
import VsNavbarTitle from './vsNavbarTitle'
import vsNavbar from './vsNavbar'
import vsNavItem from './vsNavItem'
import vsNavGroup from './vsNavGroup'
import vsNavbarItems from './vsNavbarItems'

Vue.component(vsNavbar.name, vsNavbar)
Vue.component(VsNavbarTitle.name, VsNavbarTitle)
Vue.component(vsNavItem.name, vsNavItem)
Vue.component(vsNavGroup.name, vsNavGroup)
Vue.component(vsNavbarItems.name, vsNavbarItems)
// export default Vue => {
//   Vue.component(vsComponent.name, vsComponent)
//   Vue.component(vsComponent2.name, vsComponent2)
//   Vue.component(vsComponent3.name, vsComponent3)
//   Vue.component(VsNavbarTitle.name, VsNavbarTitle)
//   Vue.component(vsComponent5.name, vsComponent5)
// }
