(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"3+OL":function(t,i,n){},jxGU:function(t,i,n){"use strict";var a=n("3+OL");n.n(a).a},ubJb:function(t,i,n){"use strict";n.r(i);var a=n("omC7"),r=n.n(a),e=n("cLjf"),d=n.n(e),c=n("hDQ3"),o=n.n(c),s=(n("uErz"),n("ogYY")),p=(n("aEPb"),n("jD4v")),u=(n("gJGO"),n("iLNi")),l=(n("pbqO"),n("P0vg")),_=(n("ul/Q"),n("8DuP")),g=(n("XkPB"),n("cpGq")),h=n("wfMy"),f={name:"script-list",components:{ATable:g.a,AButton:_.a,AUpload:l.a,AModal:u.a,ATransfer:p.a,AInputSearch:s.a.Search},data:function(){return{scripGroup:h,loading:!0,isEditUpLoadShow:!1,isAddUpLoadShow:!1,isUpLoadShow:!1,isScriptContent:!1,editDescribe:null,describe:"",search_key:null,script_name:null,scriptData:[],add_script_group_name:null,linkScript:[],script_group_name:null,scriptDataList:[],pagination:{total:0,current:1,pageSize:10,onChange:this.pageChange},data:[]}},methods:{handleChange:function(t,i,n){this.linkScript=t,"left"===i&&this.$fetch.delete_script_group_map({script_id_list:n.toString(),script_group_id:this.script_group_id}).then(function(t){})},getScriptList:function(){var r=this;return o()(d.a.mark(function t(){var i,n,a;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.scriptData=[],t.next=3,r.$storage.get("admin_user_info");case 3:i=t.sent,n=i.user_id,a={user_id:n,page_no:1,length:1e6},r.$fetch.query_script(a).then(function(t){t.data_0.forEach(function(t){r.scriptData.push({key:t.script_id.toString(),title:t.script_name})}),r.loading=!1}).then(function(){r.loading=!1});case 7:case"end":return t.stop()}},t,r)}))()},uploadEditScriptConfigAction:function(t){this.script_id=t.script_group_id,this.script_group_name=t.script_group_name,this.isEditUpLoadShow=!0},uploadEditScriptCancelAction:function(){this.isEditUpLoadShow=!1,this.script_group_name=""},uploadAddScriptCancelAction:function(){this.isAddUpLoadShow=!1,this.add_script_group_name=""},uploadEditcriptConfigAction:function(){var i=this;if(!this.script_group_name)return this.$message.error("请输入脚本组名称"),!1;this.$fetch.add_script_group({script_group_id:this.script_id,script_group_name:this.script_group_name}).then(function(t){i.isEditUpLoadShow=!1,i.getList()})},uploadAddcriptConfigAction:function(){var i=this;if(!this.add_script_group_name)return this.$message.error("请输入脚本组名称"),!1;this.$fetch.add_script_group({script_group_name:this.add_script_group_name}).then(function(t){i.isAddUpLoadShow=!1,i.add_script_group_name="",i.getList()})},uploadScriptCancelAction:function(){this.isUpLoadShow=!1},viewScriptContentAction:function(t){var i=this;this.linkScript=[],this.script_group_id=t.script_group_id,this.$fetch.get_script_by_group_id({script_group_id:t.script_group_id}).then(function(t){i.scriptDataList=JSON.parse(r()(i.scriptData)),i.linkScript=t.data.map(function(t){return t.script_id.toString()}),i.isScriptContent=!0}).catch(function(t){20===t.error_code?(i.scriptDataList=JSON.parse(r()(i.scriptData)),i.linkScript=[],i.isScriptContent=!0):i.$message.error(t.error_message)})},contentScriptCancelAction:function(){this.isScriptContent=!1},bindingScriptconfigAction:function(){var i=this;this.$fetch.add_script_group_map({script_group_id:this.script_group_id,script_id_list:this.linkScript.toString()}).then(function(t){i.isScriptContent=!1})},deleteScriptAction:function(t){var i=this;this.$confirm({title:"删除脚本组",okText:"确定",cancelText:"取消",content:"您确定要删除该脚本组吗",onOk:function(){i.$fetch.delete_script_group({script_group_id:t.script_group_id}).then(function(t){i.getList()})},onCancel:function(){}})},onSearch:function(t){this.getList()},pageChange:function(t){this.pagination.current=t,this.getList()},getList:function(){var u=this;return o()(d.a.mark(function t(){var i,n,a,r,e,c,o,s,p;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u.loading=!0,i=u.pagination,n=i.current,a=i.pageSize,t.next=4,u.$storage.get("admin_user_info");case 4:return r=t.sent,e=r.user_id,c={user_id:e,page_no:n,length:a,search_key:u.search_key},t.next=9,u.$fetch.query_script_group(c).catch(function(){u.loading=!1});case 9:o=t.sent,s=o.data_0,p=o.data_1,u.data=s||[],u.pagination.total=p?p.count:0,u.loading=!1;case 15:case"end":return t.stop()}},t,u)}))()}},created:function(){this.getList(),this.getScriptList()}},S=(n("jxGU"),n("ZpG+")),m=Object(S.a)(f,function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"script-list-group"},[a("div",{staticClass:"script-list-header"},[a("a-input-search",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入脚本名称/备注"},on:{search:n.onSearch},model:{value:n.search_key,callback:function(t){n.search_key=t},expression:"search_key"}}),a("a-button",{attrs:{type:"primary"},on:{click:function(){n.isAddUpLoadShow=!0}}},[n._v("新增")])],1),a("div",{staticClass:"script-list-content"},[a("a-table",{attrs:{columns:n.scripGroup,rowKey:"script_group_id",dataSource:n.data,pagination:n.pagination,loading:n.loading},scopedSlots:n._u([{key:"action",fn:function(t,i){return[a("a-button",{staticClass:"script-btn",on:{click:function(){return n.viewScriptContentAction(i)}}},[n._v("绑定脚本")]),a("a-button",{staticClass:"script-btn",attrs:{type:"primary"},on:{click:function(){return n.uploadEditScriptConfigAction(i)}}},[n._v("编辑")]),a("a-button",{staticClass:"script-btn",attrs:{type:"danger"},on:{click:function(){return n.deleteScriptAction(i)}}},[n._v("删除")])]}}])})],1),a("a-modal",{attrs:{title:"新增脚本",visible:n.isAddUpLoadShow},on:{cancel:n.uploadAddScriptCancelAction}},[a("template",{slot:"footer"},[a("a-button",{on:{click:n.uploadAddScriptCancelAction}},[n._v("取消")]),a("a-button",{attrs:{type:"primary"},on:{click:n.uploadAddcriptConfigAction}},[n._v("确定")])],1),a("a-form",[a("div",{staticClass:"dialog-content"},[a("div",{staticClass:"content-inner"},[a("span",{staticClass:"label-inner label-inner-first label-inner-first-name"},[n._v("脚本组名称")]),a("a-input",{attrs:{placeholder:"脚本名称"},model:{value:n.add_script_group_name,callback:function(t){n.add_script_group_name=t},expression:"add_script_group_name"}})],1)])])],2),a("a-modal",{attrs:{title:"编辑脚本",visible:n.isEditUpLoadShow},on:{cancel:n.uploadEditScriptCancelAction}},[a("template",{slot:"footer"},[a("a-button",{on:{click:n.uploadEditScriptCancelAction}},[n._v("取消")]),a("a-button",{attrs:{type:"primary"},on:{click:n.uploadEditcriptConfigAction}},[n._v("确定")])],1),a("a-form",[a("div",{staticClass:"dialog-content"},[a("div",{staticClass:"content-inner"},[a("span",{staticClass:"label-inner label-inner-first label-inner-first-name"},[n._v("脚本组名称")]),a("a-input",{attrs:{placeholder:"脚本名称"},model:{value:n.script_group_name,callback:function(t){n.script_group_name=t},expression:"script_group_name"}})],1)])])],2),a("a-modal",{attrs:{width:"700px",title:"绑定脚本",visible:n.isScriptContent},on:{cancel:n.contentScriptCancelAction}},[a("template",{slot:"footer"},[a("a-button",{on:{click:n.contentScriptCancelAction}},[n._v("取消")]),a("a-button",{attrs:{type:"primary"},on:{click:n.bindingScriptconfigAction}},[n._v("确定绑定")])],1),a("div",{staticClass:"dialog-content"},[a("a-transfer",{attrs:{dataSource:n.scriptDataList,locale:{itemUnit:"项",itemsUnit:"项"},titles:["未关联的","已关联的"],targetKeys:n.linkScript,render:function(t){return t.title},listStyle:{width:"300px",height:"300px"}},on:{change:n.handleChange}})],1)],2)],1)},[],!1,null,null,null);i.default=m.exports},wfMy:function(t){t.exports=JSON.parse('[{"key":"script_group_name","title":"脚本组名","dataIndex":"script_group_name"},{"key":"action","title":"操作","dataIndex":"action","scopedSlots":{"customRender":"action"}}]')}}]);