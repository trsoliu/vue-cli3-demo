import Vue from "vue";
import "mint-ui/lib/style.css";
//import "iview/dist/styles/iview.css";
//https://github.com/ElemeFE/mint-ui/blob/master/src/index.js
import {
  Cell,
  Switch,
  Badge,
  Checklist,
  MessageBox,
  Toast,
  Indicator
} from "mint-ui";

//iview基础模块
const components = {
  Cell,
  Badge,
  Switch,
  Checklist
  //	MessageBox,
  //	Toast,
  //	Indicator
};

//locale.use(opts.locale);
//locale.i18n(opts.i18n);
const mintuiModule = {
  ...components
  //不能和html标签重复的组件，添加别名(除了Switch、Circle在使用中必须是iCircle,其他都可以不加"i")
  //iButton: Button,
  //iCircle: Circle,
  //iCol: Col,
  //iContent: Content,
  //iForm: Form,
  //iFooter: Footer,
  //iHeader: Header,
  //iInput: Input,
  //iMenu: Menu,
  //iOption: Option,
  //iProgress: Progress,
  //iSelect: Select,
  //iSwitch: Switch,
  //iTable: Table
};
//循环注册全局组件
Object.keys(mintuiModule).forEach(key => {
  Vue.component(mintuiModule[key].name, mintuiModule[key]);
});

//将mintui模块挂载到vue对象上去
Vue.$messagebox = Vue.prototype.$messagebox = MessageBox;
Vue.$toast = Vue.prototype.$toast = Toast;
Vue.$indicator = Vue.prototype.$indicator = Indicator;
