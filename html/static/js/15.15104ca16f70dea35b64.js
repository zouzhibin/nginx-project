(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"Q+x8":function(t,e,a){"use strict";var n=a("qetQ"),i=a("KWxs");n.b.install=function(t){t.use(i.a),t.component(n.b.name,n.b)},e.a=n.b},QoiM:function(t,e,a){"use strict";var n=a("6Ysy"),i=a("KWxs");n.a.install=function(t){t.use(i.a),t.component(n.a.name,n.a)},e.a=n.a},"Rs+T":function(t,e,a){"use strict";a.r(e);a("E1W7");function n(){return[{title:"微信号",key:"1",scopedSlots:{customRender:"info"},customCell:function(){return{on:{mouseenter:function(t){t.srcElement.getElementsByClassName("active-card")[0].style.display="block"},mouseleave:function(){event.srcElement.getElementsByClassName("active-card")[0].style.display="none"}}}}},{title:"性别",key:"2",dataIndex:"sex"},{title:"所属成员",key:"3",dataIndex:"member"},{title:"分组",key:"4",dataIndex:"group"},{title:"好友数",key:"number",dataIndex:"number",sorter:function(t,e){return t.number-e.number}},{title:"状态",key:"6",scopedSlots:{customRender:"status"}},{title:"导入方式",key:"7",dataIndex:"type"},{title:"所属终端",key:"8",dataIndex:"terminal"},{title:"操作任务",key:"10",scopedSlots:{customRender:"operate"}}]}var i=a("+GXS"),o=a("unDg"),s=a.n(o),l=(a("hGoy"),a("Ledl")),c=(a("5duJ"),a("YNV6")),r=(a("vgXN"),a("QoiM")),u=(a("kpaA"),a("Q+x8")),d=(a("zCMs"),a("EFZ+")),m=(a("gJGO"),a("iLNi")),p=(a("uErz"),a("ogYY")),v=(a("ul/Q"),a("8DuP")),f=(a("CqKt"),a("FLOZ")),h=(a("XkPB"),a("cpGq")),b=[{url:"http://wx.qlogo.cn/mmhead/ver_1/5sEXH0zuQATyiauwpC4sy7qQuoKY6ydEdDtcUvGsxDPI6eB9Ryt5zYZIravORhg1Kg5hxdKichSuZibToUFdHEMjTA86QEDryRGgFlAsq2fKRI/132",nickname:"微信昵称",id:"wx_678",sex:"男",member:"yui",group:"分组一",number:"100",status:0,type:"二维码",terminal:"终端一"},{url:"http://wx.qlogo.cn/mmhead/ver_1/8MufXlR73EcDhw7G8NZbtPbIvFic9uxlvU1mkxzAk9OKicZdY1q93ricibZnOBU0LApEE5Kkgfbz3dLYPWBd8Pfmv5TLZ9O2ibtPmjgqo5mC9d1A/132",nickname:"微信昵称",id:"wx_679",sex:"女",member:"ghk",group:"分组一",number:"101",status:1,type:"二维码",terminal:"终端一"},{url:"http://wx.qlogo.cn/mmhead/ver_1/8MufXlR73EcDhw7G8NZbtPbIvFic9uxlvU1mkxzAk9OKicZdY1q93ricibZnOBU0LApEE5Kkgfbz3dLYPWBd8Pfmv5TLZ9O2ibtPmjgqo5mC9d1A/132",nickname:"微信昵称",id:"wx_677",sex:"女",member:"ghk",group:"分组一",number:"99",status:2,type:"二维码",terminal:"终端一"}],g={name:"u-wechat-total",props:{},components:{ATable:h.a,ARangePicker:f.a.RangePicker,AButton:v.a,ATextarea:p.a.TextArea,AModal:m.a,AInput:p.a,AInputSearch:p.a.Search,ATooltip:d.a,ACol:u.a,ARow:r.a,ADropdown:c.a,ASelect:l.b,ASelectOption:l.b.Option},data:function(){return{wechatTotal:n,lineModal:{status:0},form:{name:"",isOnLine:void 0,acount:void 0,teminal:void 0,sex:void 0,loginType:void 0},data:b,rowSelection:{onChange:this.onChangeSelect,xonSelect:this.onSelect},lineStatusList:[{key:0,value:"上线"},{key:1,value:"离线"},{key:2,value:"异常"}],pagination:{current:1,defaultPageSize:10,pageSize:10,total:0,pageSizeOptions:["10","20","50","100"],showQuickJumper:!0,showSizeChanger:!0,showTotal:function(t){return"共 "+t+" 条记录"},onChange:this.changePage,loading:!1},selectedKeys:[]}},computed:{isDisabled:function(){return 0===this.selectedKeys.length}},watch:{},methods:{load:function(){},confirmLineModal:function(t){var e=this,a=(this.$createElement,0===(this.lineModal.status=t)?"一键下线":"一键上线"),n=0===t?"请确认是否有运营计划正在执行，下线微信号，将影响该计划无法正确完成":"请确认是否执行所有账号上线，上线后请勿进行解绑操作";this.$confirm({title:a,content:function(t){return t("div",{style:"color: #b7b3b3;"},[n])},onOk:function(){e.lineModalOk(t)},onCancel:function(){e.lineModalCancel(t)},class:"test"})},lineModalOk:function(){},lineModalCancel:function(){},formatStatus:function(e){return this.lineStatusList.find(function(t){return t.key===e}).value},onSearch:function(){},onChangeSelect:function(t){this.selectedKeys=[].concat(s()(t))},batchEditInfo:function(){},batchDivideGroup:function(){},batchBindTerminal:function(){},batchDelAccount:function(){},batchSubAcount:function(){},downloadTable:function(){},uploadTable:function(){this.$router.push({name:"wechat-import"})},showQrcode:function(){this.$store.commit("user/SET_QRCODE",{isShowQrcode:!0,url:"https://u.wechat.com/MJad_MULIfv_kP7dFTu5Dsc"})},changePage:function(t){this.pagination.current=t}},mounted:function(){}},k=(a("Z46D"),a("ZpG+")),w=Object(k.a)(g,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wechat-total"},[a("div",{staticClass:"overview"},[e._m(0),a("div",{staticClass:"overview-item"},[a("div",{staticClass:"title"},[e._v("在线数")]),a("span",[e._v("200")]),a("a-button",{on:{click:function(t){return e.confirmLineModal(0)}}},[e._v("一键下线")])],1),a("div",{staticClass:"overview-item"},[a("div",{staticClass:"title"},[e._v("离线数")]),a("span",[e._v("200")]),a("a-button",{attrs:{type:"primary",ghost:""},on:{click:function(t){return e.confirmLineModal(1)}}},[e._v("一键上线")])],1)]),a("div",{staticClass:"content"},[a("div",{staticClass:"filter"},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:6}},[a("a-input-search",{attrs:{placeholder:"搜索微信号或昵称"},on:{search:e.onSearch},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("a-col",{attrs:{span:6}},[a("a-select",{attrs:{placeholder:"选择微信号",allowClear:""},model:{value:e.form.isOnLine,callback:function(t){e.$set(e.form,"isOnLine",t)},expression:"form.isOnLine"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("在线微信号")]),a("a-select-option",{attrs:{value:"2"}},[e._v("离线微信号")])],1)],1),a("a-col",{attrs:{span:6}},[a("a-select",{attrs:{placeholder:"所属账号",allowClear:""},model:{value:e.form.acount,callback:function(t){e.$set(e.form,"acount",t)},expression:"form.acount"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("大牛")]),a("a-select-option",{attrs:{value:"2"}},[e._v("一枝花")])],1)],1)],1),a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:6}},[a("a-select",{attrs:{placeholder:"所属终端",allowClear:""},model:{value:e.form.teminal,callback:function(t){e.$set(e.form,"teminal",t)},expression:"form.teminal"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("终端一")]),a("a-select-option",{attrs:{value:"2"}},[e._v("终端二")])],1)],1),a("a-col",{attrs:{span:6}},[a("a-select",{attrs:{placeholder:"选择性别",allowClear:""},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("男")]),a("a-select-option",{attrs:{value:"2"}},[e._v("女")])],1)],1),a("a-col",{attrs:{span:6}},[a("a-select",{attrs:{placeholder:"选择登录方式",allowClear:""},model:{value:e.form.loginType,callback:function(t){e.$set(e.form,"loginType",t)},expression:"form.loginType"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("全部微信号")]),a("a-select-option",{attrs:{value:"2"}},[e._v("离线微信号")])],1)],1)],1)],1),a("div",{staticClass:"operate"},[a("div",{staticClass:"batch"},[a("a-button",{attrs:{disabled:e.isDisabled}},[e._v("批量上线")]),a("a-button",{attrs:{disabled:e.isDisabled}},[e._v("批量下线")]),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link",attrs:{href:"#"}},[e._v("更多批量"),a("a-icon",{staticClass:"icon-more-down",attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"item1",attrs:{disabled:e.isDisabled},on:{click:e.batchEditInfo}},[e._v("编辑信息")]),a("a-menu-item",{key:"item2",attrs:{disabled:e.isDisabled},on:{click:e.batchDivideGroup}},[e._v("修改分组")]),a("a-menu-item",{key:"item3",attrs:{disabled:e.isDisabled},on:{click:e.batchBindTerminal}},[e._v("绑定客户终端")]),a("a-menu-item",{key:"item4",attrs:{disabled:e.isDisabled},on:{click:e.batchBindTerminal}},[e._v("解除客户终端")]),a("a-menu-item",{key:"item5",attrs:{disabled:e.isDisabled},on:{click:e.batchDelAccount}},[e._v("删除微信号")]),a("a-menu-item",{key:"item6",attrs:{disabled:e.isDisabled},on:{click:e.batchSubAcount}},[e._v("分配使用权")])],1)],1)],1),a("div",{staticClass:"else"},[a("a-button",{attrs:{type:"primary"},on:{click:e.uploadTable}},[e._v("导入微信号")]),a("a-tooltip",[a("template",{slot:"title"},[e._v("刷新表单")]),a("a-icon",{staticClass:"second-icon",attrs:{type:"border"},on:{click:e.load}})],2),a("a-tooltip",[a("template",{slot:"title"},[e._v("导出报表")]),a("a-icon",{attrs:{type:"border"},on:{click:e.downloadTable}})],2)],1)]),a("a-table",{staticClass:"wechat-table",attrs:{columns:e.wechatTotal(this),rowKey:function(t){return t.id},rowClassName:function(t){return"custom-row"},dataSource:e.data,rowSelection:e.rowSelection,pagination:e.pagination,loading:e.pagination.loading},on:{change:e.load},scopedSlots:e._u([{key:"info",fn:function(t){return[a("div",{staticClass:"active-card"},[a("div",{staticClass:"info"},[a("div",{staticClass:"nickname"},[e._v(e._s(t.nickname))]),a("div",{staticClass:"id"},[e._v("微信号："+e._s(t.id))]),a("div",{staticClass:"avatar"},[a("img",{attrs:{src:t.url}})]),a("ul",[a("li",[a("label",[e._v("地区")]),a("span",[e._v("杭州市西湖区")])]),a("li",[a("label",[e._v("手机号")]),a("span",[e._v("15022223333")])]),a("li",[a("label",[e._v("签名")]),a("span",[e._v("此处显示签名，字数较多可以多行显示")])])]),a("a-tooltip",[a("template",{slot:"title"},[e._v("查看二维码")]),a("a-icon",{staticClass:"view-qrcode",attrs:{type:"border"},on:{click:e.showQrcode}})],2)],1)]),a("div",{staticClass:"avatar"},[a("img",{attrs:{src:t.url}})]),a("div",{staticClass:"info"},[a("div",{staticClass:"nickname"},[e._v(e._s(t.nickname))]),a("span",{staticClass:"id"},[e._v("微信号："+e._s(t.id))])])]}},{key:"status",fn:function(t){return[a("span",{staticClass:"status",class:{offline:1===t.status,err:2===t.status}},[e._v(e._s(e.formatStatus(t.status)))])]}},{key:"operate",fn:function(t){return[a("a",[e._v("上线")]),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link",attrs:{href:"#"}},[e._v("更多"),a("a-icon",{staticClass:"icon-more-down",attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"}},[e._v("编辑信息")])]),a("a-menu-item",[a("a",{attrs:{href:"javascript:;"}},[e._v("查看朋友圈")])])],1)],1)]}}])})],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overview-item"},[e("div",{staticClass:"title"},[this._v("微信号总数")]),e("span",[this._v("200")])])}],!1,null,"347535a5",null).exports,_=[{title:"分组名称",dataIndex:"name"},{title:"创建成员",dataIndex:"member"},{title:"创建时间",dataIndex:"time",sorter:function(t,e){return new Date(t.time).getTime()-new Date(e.time).getTime()},scopedSlots:{customRender:"time"}},{title:"微信号数",sorter:function(t,e){return t.number-e.number},dataIndex:"number"},{title:"操作任务",scopedSlots:{customRender:"operate"}}],y=[{id:1,name:"分组一",member:"yui",time:"2019-10-07 21:20:00",number:"90"},{id:2,name:"分组二",member:"yui",time:"2019-10-08 21:20:00",number:"100"},{id:3,name:"分组三",member:"yui",time:"2019-10-09 21:20:00",number:"60"}],C={name:"u-wechat-group",props:{},components:{ATable:h.a,ARangePicker:f.a.RangePicker,AButton:v.a,ATextarea:p.a.TextArea,AModal:m.a,AInput:p.a,AInputSearch:p.a.Search,ATooltip:d.a,ACol:u.a,ARow:r.a},data:function(){return{wechatGroup:_,form:{name:""},data:y,pagination:{current:1,defaultPageSize:10,pageSize:10,total:0,pageSizeOptions:["10","20","50","100"],showQuickJumper:!0,showSizeChanger:!0,showTotal:function(t){return"共 "+t+" 条记录"},onChange:this.changePage,loading:!1}}},computed:{},watch:{},methods:{load:function(){},onSearch:function(){},changePage:function(t){this.pagination.current=t}},mounted:function(){}},x=(a("lL+Z"),Object(k.a)(C,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wechat-group"},[a("div",{staticClass:"filter"},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:6}},[a("a-input-search",{attrs:{placeholder:"搜索微信号或昵称"},on:{search:e.onSearch},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1)],1),a("a-table",{staticClass:"wechat-table",attrs:{columns:e.wechatGroup,rowKey:function(t){return t.id},dataSource:e.data,pagination:e.pagination,loading:e.pagination.loading},on:{change:e.load},scopedSlots:e._u([{key:"operate",fn:function(t){return[a("a",{staticClass:"edit"},[e._v("编辑")]),a("a",[e._v("删除")])]}}])})],1)},[],!1,null,"226f920d",null).exports),A={name:"wechat",props:{},components:{ATabs:i.a,ATabPane:i.a.TabPane,UWechatTotal:w,UWechatGroup:x},data:function(){return{}},computed:{},watch:{},methods:{},mounted:function(){}},S=Object(k.a)(A,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wechat"},[e("h2",[this._v("微信号管理")]),e("a-tabs",{attrs:{defaultActiveKey:"1"}},[e("a-tab-pane",{key:"1",attrs:{tab:"全部"}},[e("u-wechat-total")],1),e("a-tab-pane",{key:"2",attrs:{tab:"分组"}},[e("u-wechat-group")],1)],1)],1)},[],!1,null,"bc96f8ee",null);e.default=S.exports},Z46D:function(t,e,a){"use strict";var n=a("zMF9");a.n(n).a},dA1z:function(t,e,a){},kpaA:function(t,e,a){"use strict";a("4nr5"),a("JkCk")},"lL+Z":function(t,e,a){"use strict";var n=a("dA1z");a.n(n).a},vgXN:function(t,e,a){"use strict";a("4nr5"),a("JkCk")},zMF9:function(t,e,a){}}]);