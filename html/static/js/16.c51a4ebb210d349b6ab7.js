(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{CBTR:function(e){e.exports=JSON.parse('[{"key":"user_name","title":"成员名称","dataIndex":"user_name"},{"key":"user_name1","title":"用户名","dataIndex":"user_name1"},{"key":"user_role_name_list","title":"角色","dataIndex":"user_role_name_list"},{"key":"created_time","title":"添加时间","dataIndex":"created_time","scopedSlots":{"customRender":"created_time"}},{"key":"updated_time","title":"更新时间","dataIndex":"updated_time","scopedSlots":{"customRender":"updated_time"}},{"key":"user_state","title":"状态","dataIndex":"user_state","scopedSlots":{"customRender":"user_state"}},{"key":"action","title":"操作","dataIndex":"action","scopedSlots":{"customRender":"action"}}]')},CbU6:function(e,t,r){},"Q+x8":function(e,t,r){"use strict";var a=r("qetQ"),n=r("KWxs");a.b.install=function(e){e.use(n.a),e.component(a.b.name,a.b)},t.a=a.b},QoiM:function(e,t,r){"use strict";var a=r("6Ysy"),n=r("KWxs");a.a.install=function(e){e.use(n.a),e.component(a.a.name,a.a)},t.a=a.a},TM6N:function(e,t,r){"use strict";var a=r("CbU6");r.n(a).a},kpaA:function(e,t,r){"use strict";r("4nr5"),r("JkCk")},pFpk:function(e,t,r){"use strict";r.r(t);var a=r("cLjf"),d=r.n(a),n=r("hDQ3"),p=r.n(n),s=r("bS4n"),o=r.n(s),i=(r("hGoy"),r("Ledl")),c=(r("vgXN"),r("QoiM")),l=(r("kpaA"),r("Q+x8")),u=(r("gJGO"),r("iLNi")),f=(r("uErz"),r("ogYY")),m=(r("ul/Q"),r("8DuP")),_=(r("CqKt"),r("FLOZ")),h=(r("XkPB"),r("cpGq")),v=r("CBTR"),w=r("WRrH"),b={labelCol:{span:6},wrapperCol:{span:16}},g={notNull:{required:!0,message:"请输入此项内容！"},isNumber:{pattern:/^\d*$/,message:"请输入合法数值！"},isLetterNumber:{pattern:/^[a-zA-Z0-9]*$/,message:"请输入字母数字组合！"}},C={name:"script-list",components:{ATable:h.a,ARangePicker:_.a.RangePicker,AButton:m.a,ATextarea:f.a.TextArea,AModal:u.a,AInput:f.a,AInputSearch:f.a.Search,ACol:l.a,ARow:c.a,ASelect:i.b,ASelectOption:i.b.Option},data:function(){return{selecttValue:0,rules:g,formItemLayout:b,form:this.$form.createForm(this,{name:"coordinated"}),userManage:v,loading:!0,isEditUpLoadShow:!1,isAddUpLoadShow:!1,isUpLoadShow:!1,isScriptContent:!1,editDescribe:null,describe:"",user_id:null,getSelectIndex:null,search_key:null,linkScript:[],pagination:{total:0,current:1,pageSize:10,onChange:this.pageChange},dataList:[]}},computed:o()({},Object(w.mapGetters)(["userInfo"])),filters:{fitlerUserState:function(e){switch(e){case 1:return"禁用";case 2:return"启用"}}},methods:{onSelectAction:function(e,t,r){switch(this.getSelectIndex=r,e){case 1:this.uploadEditScriptConfigAction(t);break;case 2:this.resetPasswordAction(t);break;case 3:this.deleteScriptAction(t);break;case 4:this.enableDisableAction(t)}},resetPasswordAction:function(n){var s=this;return p()(d.a.mark(function e(){var t,r,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.$storage.get("admin_user_info");case 2:t=e.sent,r=t.user_id,(a=s).$confirm({title:"您确定要重置密码，恢复使用默认密码？",okText:"确定",cancelText:"取消",content:"原密码将失效，成员需使用默认密码登录",onOk:function(){a.$fetch.reset_user_password({parent_user_id:r,user_id:n.recode,password:"123456"}).then(function(e){a.getList()})},onCancel:function(){}});case 6:case"end":return e.stop()}},e,s)}))()},enableDisableAction:function(l){var u=this;return p()(d.a.mark(function e(){var t,r,a,n,s,o,i,c;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.$createElement,r=l.user_state,n=(a=1)===r?"您确定要启用当前成员帐号吗？":"您确定要禁用当前成员帐号吗？",s=u,o=null,o=1===r?(a=2,t("div",["启用后账号可正常登录"])):(a=1,t("div",[t("div",["禁用账号将无法登录平台"]),t("div",["账号信息仍保留，可恢复启用账号"])])),e.next=9,u.$storage.get("admin_user_info");case 9:i=e.sent,c=i.user_id,u.$confirm({title:n,okText:"确定",cancelText:"取消",content:o,onOk:function(){s.$fetch.update_user_state({parent_user_id:c,user_id:l.user_id,user_state:a}).then(function(e){s.getList()})},onCancel:function(){}});case 12:case"end":return e.stop()}},e,u)}))()},accountLoginAction:function(s){var o=this;return p()(d.a.mark(function e(){var t,r,a,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.$storage.get("admin_user_info");case 2:t=e.sent,r=t.user_id,a=location.origin+"/#",n="parent_user_id="+r+"&user_role="+s.user_role_name_list+"&user_id="+s.user_id,window.open(a+"/account/account?"+n,"_blank");case 7:case"end":return e.stop()}},e,o)}))()},handleChange:function(e,t,r){this.linkScript=e,this.$fetch.delete_script_group_map({script_id_list:r.toString(),script_group_id:this.script_group_id}).then(function(e){})},uploadEditScriptConfigAction:function(e){var t=this;this.user_id=e.user_id,this.isEditUpLoadShow=!0,this.$nextTick(function(){t.$refs.editForm.form.setFieldsValue({roleMember:"团对成员"}),t.$refs.editForm.form.setFieldsValue({user_name:e.user_name})})},uploadEditScriptCancelAction:function(){this.selecttValue=0,this.isEditUpLoadShow=!1,this.$refs.editForm.form.resetFields()},addNewMemberAction:function(){var e=this;this.isAddUpLoadShow=!0,this.$nextTick(function(){e.$refs.form.form.setFieldsValue({roleMember:"团对成员"})})},uploadAddScriptCancelAction:function(){this.$refs.form.form.resetFields(),this.isAddUpLoadShow=!1},uploadEditcriptConfigAction:function(){var r,i=this;this.$refs.editForm.form.validateFields((r=p()(d.a.mark(function e(t,r){var a,n,s,o;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=10;break}return e.next=3,i.$storage.get("admin_user_info");case 3:if(a=e.sent,n=a.user_id,s=r.password,o=r.configPassword,s!==o)return i.$message.error("密码输入相同的密码"),e.abrupt("return",!1);e.next=9;break;case 9:i.$fetch.reset_user_password({parent_user_id:n,user_id:i.user_id,password:s}).then(function(e){i.$refs.editForm.form.resetFields(),i.isEditUpLoadShow=!1,i.getList()});case 10:case"end":return e.stop()}},e,i)})),function(e,t){return r.apply(this,arguments)}))},addMemberConfigAction:function(){var r,c=this;this.$refs.form.form.validateFields((r=p()(d.a.mark(function e(t,r){var a,n,s,o,i;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=10;break}return e.next=3,c.$storage.get("admin_user_info");case 3:if(a=e.sent,n=a.user_id,s=r.user_name,o=r.password,i=r.configPassword,o!==i)return c.$message.error("密码输入相同的密码"),e.abrupt("return",!1);e.next=9;break;case 9:c.$fetch.insert_children_user({parent_user_id:n,user_name:s,password:o}).then(function(e){c.$refs.form.form.resetFields(),c.isAddUpLoadShow=!1,c.getList()});case 10:case"end":return e.stop()}},e,c)})),function(e,t){return r.apply(this,arguments)}))},uploadScriptCancelAction:function(){this.isUpLoadShow=!1},contentScriptCancelAction:function(){this.isScriptContent=!1},deleteScriptAction:function(s){var o=this;return p()(d.a.mark(function e(){var t,r,a,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.$createElement,e.next=3,o.$storage.get("admin_user_info");case 3:r=e.sent,a=r.user_id,(n=o).$confirm({width:"450px",title:"您确定要删除当前成员帐号吗？",okText:"确定",cancelText:"取消",content:t("div",["删除账号将无法登录平台",t("br"),"删除前需转移该成员所拥有的微信号资产至其他成员",t("br"),"账号信息历史记录仍保留，方便工作交接管理",t("br"),"不支持账号恢复"]),onOk:function(){n.$fetch.delete_user({parent_user_id:a,user_id:s.user_id}).then(function(e){n.getList()})},onCancel:function(){}});case 7:case"end":return e.stop()}},e,o)}))()},onSearch:function(e){this.getList()},pageChange:function(e){this.pagination.current=e,this.getList()},getList:function(){var u=this;return p()(d.a.mark(function e(){var t,r,a,n,s,o,i,c,l;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u.loading=!0,t=u.pagination,r=t.current,a=t.pageSize,e.next=4,u.$storage.get("admin_user_info");case 4:return n=e.sent,s=n.user_id,o={user_id:s,user_name:u.search_key,page_no:r,length:a},e.next=9,u.$fetch.query_child_user(o).catch(function(){u.loading=!1});case 9:i=e.sent,c=i.data_0,l=i.data_1,c.forEach(function(e){u.$set(e,"defaultValue","更多")}),u.dataList=c||[],u.pagination.total=l?l.count:0,u.loading=!1;case 16:case"end":return e.stop()}},e,u)}))()}},created:function(){this.getList()}},k=(r("TM6N"),r("ZpG+")),x=Object(k.a)(C,function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"script-list-group"},[n("div",{staticClass:"script-list-header"},[n("a-input-search",{staticStyle:{width:"200px"},attrs:{placeholder:"搜索用户名或成员名称"},on:{search:a.onSearch},model:{value:a.search_key,callback:function(e){a.search_key=e},expression:"search_key"}}),n("a-button",{attrs:{type:"primary"},on:{click:a.addNewMemberAction}},[a._v("新增成员")])],1),n("div",{staticClass:"script-list-content"},[n("a-table",{attrs:{columns:a.userManage,rowKey:"user_id",dataSource:a.dataList,pagination:a.pagination,loading:a.loading},scopedSlots:a._u([{key:"user_state",fn:function(e){return n("span",{},[a._v(a._s(a._f("fitlerUserState")(e)))])}},{key:"created_time",fn:function(e){return n("span",{},[a._v(a._s(a._f("formatDate")(e)))])}},{key:"updated_time",fn:function(e){return n("span",{},[a._v(a._s(a._f("formatDate")(e)))])}},{key:"action",fn:function(e,t,r){return[a.userInfo.user_id!==t.user_id&&1!==t.user_state?n("a-button",{staticClass:"script-btn",attrs:{type:"danger"},on:{click:function(){return a.accountLoginAction(t)}}},[a._v("账号登录")]):a._e(),n("a-select",{staticStyle:{width:"90px"},attrs:{value:t.defaultValue},on:{select:function(e){return a.onSelectAction(e,t,r)}}},[n("a-select-option",{attrs:{value:1}},[a._v("修改账户")]),n("a-select-option",{attrs:{value:3}},[a._v("删除")]),n("a-select-option",{attrs:{value:4}},[a._v(a._s(1===t.user_state?"启用":"禁用"))])],1)]}}])})],1),n("a-modal",{staticClass:"add-dialog-member",attrs:{title:"新增成员",visible:a.isAddUpLoadShow},on:{cancel:a.uploadAddScriptCancelAction}},[n("template",{slot:"footer"},[n("a-button",{on:{click:a.uploadAddScriptCancelAction}},[a._v("取消")]),n("a-button",{attrs:{type:"primary"},on:{click:a.addMemberConfigAction}},[a._v("确定")])],1),n("a-form",{ref:"form",attrs:{form:a.form}},[n("div",{staticClass:"dialog-content"},[n("a-form-item",{staticClass:"add_user_name",attrs:{"label-col":a.formItemLayout.labelCol,"wrapper-col":a.formItemLayout.wrapperCol,label:"用户名："}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["user_name",{rules:[a.rules.notNull]}],expression:"['user_name', {rules: [rules.notNull]}]"}],attrs:{placeholder:"用户名："}})],1),n("div",{staticClass:"label-info"},[a._v("员工可以用该用户名作为帐号登录平台")]),n("a-form-item",{attrs:{"label-col":a.formItemLayout.labelCol,"wrapper-col":a.formItemLayout.wrapperCol,label:"新密码："}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[a.rules.notNull]}],expression:"['password', {rules: [rules.notNull]}]"}],attrs:{type:"password",placeholder:"新密码"}})],1),n("a-form-item",{attrs:{"label-col":a.formItemLayout.labelCol,"wrapper-col":a.formItemLayout.wrapperCol,label:"确认密码"}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["configPassword",{rules:[a.rules.notNull]}],expression:"['configPassword', {rules: [rules.notNull]}]"}],attrs:{type:"password",placeholder:"确认密码："}})],1),n("a-form-item",{attrs:{"label-col":a.formItemLayout.labelCol,"wrapper-col":a.formItemLayout.wrapperCol,label:"角色："}},[n("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["roleMember",{rules:[a.rules.notNull]}],expression:"['roleMember', {rules: [rules.notNull]}]"}],attrs:{placeholder:"角色："}},[n("a-select-option",{attrs:{value:"团队成员"}},[a._v("团队成员")])],1)],1)],1)])],2),n("a-modal",{staticClass:"add-dialog-member",attrs:{title:"修改账户",visible:a.isEditUpLoadShow},on:{cancel:a.uploadEditScriptCancelAction}},[n("template",{slot:"footer"},[n("a-button",{on:{click:a.uploadEditScriptCancelAction}},[a._v("取消")]),n("a-button",{attrs:{type:"primary"},on:{click:a.uploadEditcriptConfigAction}},[a._v("确定")])],1),n("a-form",{ref:"editForm",attrs:{form:a.form}},[n("div",{staticClass:"dialog-content"},[n("a-form-item",{staticClass:"add_user_name",attrs:{"label-col":a.formItemLayout.labelCol,"wrapper-col":a.formItemLayout.wrapperCol,label:"用户名："}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["user_name",{rules:[a.rules.notNull]}],expression:"['user_name', {rules: [rules.notNull]}]"}],attrs:{placeholder:"用户名：",disabled:""}})],1),n("div",{staticClass:"label-info"},[a._v("员工可以用该用户名登录平台，设置后不可修改")]),n("a-form-item",{attrs:{"label-col":a.formItemLayout.labelCol,"wrapper-col":a.formItemLayout.wrapperCol,label:"新密码"}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[a.rules.notNull]}],expression:"['password', {rules: [rules.notNull]}]"}],attrs:{type:"password",placeholder:"新密码："}})],1),n("a-form-item",{attrs:{"label-col":a.formItemLayout.labelCol,"wrapper-col":a.formItemLayout.wrapperCol,label:"确认密码"}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["configPassword",{rules:[a.rules.notNull]}],expression:"['configPassword', {rules: [rules.notNull]}]"}],attrs:{type:"password",placeholder:"确认密码："}})],1),n("a-form-item",{attrs:{"label-col":a.formItemLayout.labelCol,"wrapper-col":a.formItemLayout.wrapperCol,label:"角色："}},[n("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["roleMember",{rules:[a.rules.notNull]}],expression:"['roleMember', {rules: [rules.notNull]}]"}],attrs:{disabled:""}},[n("a-select-option",{attrs:{value:"团队成员"}},[a._v("团队成员")])],1)],1)],1)])],2)],1)},[],!1,null,null,null);t.default=x.exports},vgXN:function(e,t,r){"use strict";r("4nr5"),r("JkCk")}}]);