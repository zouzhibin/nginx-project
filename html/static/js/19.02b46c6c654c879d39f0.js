(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"8GsJ":function(t,e,a){},UBwg:function(t){t.exports=JSON.parse('[{"key":"module_name","title":"模块名","dataIndex":"module_name"},{"key":"action","title":"操作","dataIndex":"action","scopedSlots":{"customRender":"action"}}]')},kF53:function(t,e,a){"use strict";var n=a("8GsJ");a.n(n).a},v5N6:function(t,e,a){"use strict";a.r(e);var n=a("cLjf"),u=a.n(n),i=a("hDQ3"),o=a.n(i),c=(a("uErz"),a("ogYY")),s=(a("gJGO"),a("iLNi")),l=(a("ul/Q"),a("8DuP")),r=(a("XkPB"),a("cpGq")),d=a("UBwg"),p={labelCol:{span:6},wrapperCol:{span:16}},m={notNull:{required:!0,message:"请输入此项内容！"},isNumber:{pattern:/^\d*$/,message:"请输入合法数值！"},isLetterNumber:{pattern:/^[a-zA-Z0-9]*$/,message:"请输入字母数字组合！"}},_={name:"script-list",components:{ATable:r.a,AButton:l.a,AModal:s.a,AInput:c.a,AInputSearch:c.a.Search},data:function(){return{rules:m,formItemLayout:p,form:this.$form.createForm(this,{name:"coordinated"}),moduleManage:d,access_module_name:null,loading:!0,isEditUpLoadShow:!1,isAddUpLoadShow:!1,edit_access_module_name:"",isUpLoadShow:!1,isScriptContent:!1,editDescribe:null,describe:"",search_key:null,script_name:null,scriptData:[],linkScript:[],scriptDataList:[],pagination:{total:0,current:1,pageSize:10,onChange:this.pageChange},data:[]}},methods:{uploadEditScriptConfigAction:function(t){this.module_id=t.module_id,this.edit_access_module_name=t.module_name,this.isEditUpLoadShow=!0},uploadEditScriptCancelAction:function(){this.isEditUpLoadShow=!1,this.edit_access_module_name=""},uploadAddScriptCancelAction:function(){this.isAddUpLoadShow=!1,this.access_module_name=""},uploadEditcriptConfigAction:function(){var e=this;if(!this.edit_access_module_name)return this.$message.error("请输入模块名称"),!1;this.$fetch.add_module({module_id:this.module_id,module_name:this.edit_access_module_name}).then(function(t){e.isEditUpLoadShow=!1,e.getList()})},uploadAddcriptConfigAction:function(){var e=this;if(!this.access_module_name)return this.$message.error("请输入模块名称"),!1;this.$fetch.add_module({module_name:this.access_module_name}).then(function(t){e.isAddUpLoadShow=!1,e.access_module_name="",e.getList()})},uploadScriptCancelAction:function(){this.isUpLoadShow=!1},contentScriptCancelAction:function(){this.isScriptContent=!1},deleteScriptAction:function(t){var e=this;this.$confirm({title:"删除模块",okText:"确定",cancelText:"取消",content:"您确定要删除模块吗",onOk:function(){e.$fetch.delete_module({module_id:t.module_id}).then(function(t){e.getList()})},onCancel:function(){}})},onSearch:function(){this.getList()},pageChange:function(t){this.pagination.current=t,this.getList()},getList:function(){var d=this;return o()(u.a.mark(function t(){var e,a,n,i,o,c,s,l,r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d.loading=!0,e=d.pagination,a=e.current,n=e.pageSize,t.next=4,d.$storage.get("admin_user_info");case 4:return i=t.sent,o=i.user_id,c={user_id:o,page_no:a,length:n,module_name:d.search_key},t.next=9,d.$fetch.query_module(c).catch(function(){d.loading=!1});case 9:s=t.sent,l=s.data_0,r=s.data_1,d.data=l||[],d.pagination.total=r?r.count:0,d.loading=!1;case 15:case"end":return t.stop()}},t,d)}))()}},created:function(){this.getList()}},h=(a("kF53"),a("ZpG+")),f=Object(h.a)(_,function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"script-list-group"},[n("div",{staticClass:"script-list-header"},[n("a-input-search",{staticStyle:{width:"200px"},attrs:{placeholder:"搜索模块名"},on:{search:a.onSearch},model:{value:a.search_key,callback:function(t){a.search_key=t},expression:"search_key"}}),n("a-button",{attrs:{type:"primary"},on:{click:function(){a.isAddUpLoadShow=!0}}},[a._v("新增模块")])],1),n("div",{staticClass:"script-list-content"},[n("a-table",{attrs:{columns:a.moduleManage,rowKey:"module_id",dataSource:a.data,pagination:a.pagination,loading:a.loading},scopedSlots:a._u([{key:"action",fn:function(t,e){return[n("a-button",{staticClass:"script-btn",attrs:{type:"primary"},on:{click:function(){return a.uploadEditScriptConfigAction(e)}}},[a._v("编辑")]),n("a-button",{staticClass:"script-btn",attrs:{type:"danger"},on:{click:function(){return a.deleteScriptAction(e)}}},[a._v("删除")])]}}])})],1),n("a-modal",{attrs:{title:"新增模块",visible:a.isAddUpLoadShow},on:{cancel:a.uploadAddScriptCancelAction}},[n("template",{slot:"footer"},[n("a-button",{on:{click:a.uploadAddScriptCancelAction}},[a._v("取消")]),n("a-button",{attrs:{type:"primary"},on:{click:a.uploadAddcriptConfigAction}},[a._v("确定")])],1),n("a-form",{attrs:{form:a.form}},[n("div",{staticClass:"dialog-content"},[n("a-form-item",{attrs:{"label-col":a.formItemLayout.labelCol,"wrapper-col":a.formItemLayout.wrapperCol,label:"模块名称"}},[n("a-input",{attrs:{placeholder:"请输入模块名称"},model:{value:a.access_module_name,callback:function(t){a.access_module_name=t},expression:"access_module_name"}})],1)],1)])],2),n("a-modal",{attrs:{title:"编辑模块",visible:a.isEditUpLoadShow},on:{cancel:a.uploadEditScriptCancelAction}},[n("template",{slot:"footer"},[n("a-button",{on:{click:a.uploadEditScriptCancelAction}},[a._v("取消")]),n("a-button",{attrs:{type:"primary"},on:{click:a.uploadEditcriptConfigAction}},[a._v("确定")])],1),n("a-form",[n("div",{staticClass:"dialog-content"},[n("div",{staticClass:"content-inner"},[n("span",{staticClass:"label-inner label-inner-first label-inner-first-name"},[a._v("模块名称")]),n("a-input",{attrs:{placeholder:"模块名称"},model:{value:a.edit_access_module_name,callback:function(t){a.edit_access_module_name=t},expression:"edit_access_module_name"}})],1)])])],2)],1)},[],!1,null,null,null);e.default=f.exports}}]);