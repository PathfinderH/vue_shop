import Vue from 'vue'

import {
    Button,
    Form,
    FormItem,
    Input,
    Message,
    Container,
    Header,
    Aside,
    Main,
    Menu,
    Submenu,
    MenuItem,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Row,
    Col,
    Table,
    TableColumn,
    Switch,
    Tooltip,
    Pagination,
    Dialog,
    MessageBox,
    Tag,
    Tree,
    Select,
    Cascader,
    Alert,
    Tabs,
    TabPane,
    Steps,
    Step,
    CheckboxGroup,
    Checkbox,
    Upload
} from 'element-ui'

import Timeline from './timeline/index.js'
import TimelineItem from './timeline-item/index.js'

Vue.use(Timeline)
Vue.use(TimelineItem)

Vue.use(Upload)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Step)
Vue.use(Steps)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Alert)
Vue.use(Cascader)
Vue.use(Select)
Vue.use(Tree)
Vue.use(Tag)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.use(Tooltip)
Vue.use(Switch)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Main)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Form)
Vue.use(Button)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm