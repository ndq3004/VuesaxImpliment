import Vue from 'vue'
import './layout/index'
import vsInput from './components/vsInput/vsInput.vue'
import vsRow from './layout/vsRow/vsRow'
import './components/vsButton/index'
import './components/vsNavbar/index'
import vsSideBar from './components/vsSideBar/vsSidebar'
import vsAvatar from './components/vsAvatar/vsAvatar'
import vsSideBarItem from './components/vsSideBar/vsSidebarItem'
import vsDivider from './components/vsDivider/vsDivider'
import vsIcon from './components/vsIcon/vsIcon'
import vsSpacer from './components/vsSpacer/vsSpacer'
import './components/vsDropDown/index'
Vue.component(vsInput.name, vsInput)
Vue.component(vsRow.name, vsRow)
// Vue.component(vsButton.name, vsButton)
Vue.component(vsSideBar.name, vsSideBar)
Vue.component(vsAvatar.name, vsAvatar)

Vue.component(vsSideBarItem.name, vsSideBarItem)
Vue.component(vsDivider.name, vsDivider)
Vue.component(vsIcon.name, vsIcon)
Vue.component(vsSpacer.name, vsSpacer)
