(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"0myp":function(e,t,n){},"3SfF":function(e,t,n){"use strict";var a=n("0myp");n.n(a).a},L4h3:function(e,t,n){"use strict";n.r(t);var a=n("cLjf"),c=n.n(a),i=n("hDQ3"),r=n.n(i),s=n("Asgo"),l=n.n(s),o=(n("gJGO"),n("iLNi")),u=(n("uErz"),n("ogYY")),d=(n("pbqO"),n("P0vg")),p=(n("ul/Q"),n("8DuP")),g=(n("XkPB"),n("cpGq")),f=n("mjNE"),h=n.n(f);n("a0YD");h.a.registerLanguage("lua",n("VclK"));var _={directives:{highlight:{inserted:function(e){e.querySelectorAll("pre code").forEach(function(e){h.a.highlightBlock(e)})},componentUpdated:function(e){e.querySelectorAll("pre code").forEach(function(e){h.a.highlightBlock(e)})}}},updated:function(){}},m=n("YicM"),v={mixins:[_],name:"script-list",components:{ATable:g.a,AButton:p.a,AUpload:d.a,ATextarea:u.a.TextArea,AInputSearch:u.a.Search,AModal:o.a},data:function(){return{scriptList:m,loading:!0,isEditUpLoadShow:!1,isUpLoadShow:!1,isScriptContent:!1,scriptContent:"",editDescribe:null,describe:"",search_key:null,editFile:null,file:null,edit_script_name:null,script_name:null,pagination:{total:0,current:1,pageSize:10,onChange:this.pageChange},selectedRowKeys:[],data:[],visible:!0,confirmLoading:!1}},methods:{uploadEditScriptConfigAction:function(e){var t=this;this.script_id=e.script_id,this.$fetch.get_script_by_id({script_id:e.script_id}).then(function(e){t.editDescribe=e.describe,t.edit_script_name=e.script_name,t.isEditUpLoadShow=!0})},uploadEditScriptCancelAction:function(){this.isEditUpLoadShow=!1,this.edit_script_name="",this.editFile="",this.editDescribe=""},uploadEditcriptConfigAction:function(){var t=this;if(!this.edit_script_name)return this.$message.error("请上传脚本");this.$fetch.add_script({content:this.editFile,script_id:this.script_id,script_name:this.edit_script_name,describe:this.editDescribe}).then(function(e){t.edit_script_name="",t.editFile="",t.editDescribe="",t.isEditUpLoadShow=!1,t.getList()})},uploadScriptAction:function(){this.isUpLoadShow=!0},uploadScriptCancelAction:function(){this.script_name="",this.file="",this.describe="",this.isUpLoadShow=!1},viewScriptContentAction:function(e){var n=this;this.$fetch.get_script_content({script_id_list:e.script_id.toString()}).then(function(e){n.isScriptContent=!0;var t=e.data;n.scriptContent="<pre><code>"+decodeURIComponent(window.atob(t[0].content))+"<pre><code>"})},editBeforeUpload:function(s){var o=this;return new l.a(function(e,t){var n=s.name,a=s.size;if(n.indexOf(".lua")<0)return o.$message.error("请上传lua文件"),void t();if(!(a/1024/1024<10))return o.$message.error("上传文件不能超过10M"),t();o.edit_script_name=n;var i=new FileReader,r=o;i.onload=function(){i.result&&(r.editFile=i.result)},i.readAsText(s),e()})},beforeUpload:function(s){var o=this;return new l.a(function(e,t){var n=s.name,a=s.size;if(n.indexOf(".lua")<0)return o.$message.error("请上传lua文件"),t();if(!(a/1024/1024<10))return o.$message.error("上传文件不能超过10M"),t();o.script_name=n;var i=new FileReader,r=o;i.onload=function(){i.result&&(r.file=window.btoa(encodeURIComponent(i.result)))},i.readAsText(s),e()})},uploadScriptConfigAction:function(){var t=this;if(!this.script_name)return this.$message.error("请上传脚本");this.isUpLoadShow=!1,this.$fetch.add_script({content:this.file,script_name:this.script_name,describe:this.describe}).then(function(e){t.script_name="",t.file="",t.describe="",t.getList()})},contentScriptCancelAction:function(){this.isScriptContent=!1,this.scriptContent=""},deleteScriptAction:function(e){var t=this;this.$confirm({title:"删除脚本",okText:"确定",cancelText:"取消",content:"您确定要删除该脚本吗",onOk:function(){t.$fetch.delete_script({script_id:e.script_id}).then(function(e){t.getList()})},onCancel:function(){}})},onSearch:function(){this.getList()},pageChange:function(e){this.pagination.current=e,this.getList()},getList:function(){var o=this;return r()(c.a.mark(function e(){var t,n,a,i,r,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o.loading=!0,t=o.pagination,n=t.current,a=t.pageSize,e.next=4,o.$storage.get("admin_user_info");case 4:i=e.sent,r=i.user_id,s={user_id:r,page_no:n,length:a,search_key:o.search_key},o.$fetch.query_script(s).then(function(e){var t=e.data_0,n=e.data_1;o.data=t||[],o.pagination.total=n?n.count:0,o.loading=!1}).catch(function(){o.loading=!1});case 8:case"end":return e.stop()}},e,o)}))()},onSelectChange:function(e){this.selectedRowKeys=e}},created:function(){this.getList()}},b=(n("3SfF"),n("ZpG+")),E=Object(b.a)(v,function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",{staticClass:"script-list"},[a("div",{staticClass:"script-list-header"},[a("a-input-search",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入脚本名称/备注"},on:{search:n.onSearch},model:{value:n.search_key,callback:function(e){n.search_key=e},expression:"search_key"}}),a("a-button",{attrs:{type:"primary"},on:{click:n.uploadScriptAction}},[n._v("上传脚本")])],1),a("div",{staticClass:"script-list-content"},[a("a-table",{attrs:{columns:n.scriptList,rowKey:"script_id",dataSource:n.data,pagination:n.pagination,loading:n.loading},scopedSlots:n._u([{key:"action",fn:function(e,t){return[a("a-button",{on:{click:function(){return n.viewScriptContentAction(t)}}},[n._v("查看")]),a("a-button",{attrs:{type:"primary"},on:{click:function(){return n.uploadEditScriptConfigAction(t)}}},[n._v("编辑")]),a("a-button",{attrs:{type:"danger"},on:{click:function(){return n.deleteScriptAction(t)}}},[n._v("删除")])]}}])})],1),a("a-modal",{staticClass:"script-list-dialog",attrs:{title:"上传脚本",visible:n.isUpLoadShow},on:{cancel:n.uploadScriptCancelAction}},[a("template",{slot:"footer"},[a("a-button",{on:{click:n.uploadScriptCancelAction}},[n._v("取消")]),a("a-button",{attrs:{type:"primary"},on:{click:n.uploadScriptConfigAction}},[n._v("确定")])],1),a("a-form",[a("div",{staticClass:"dialog-content"},[a("div",{staticClass:"content-inner"},[a("span",{staticClass:"label-inner label-inner-first"},[n._v("内容")]),a("a-upload",{ref:"uploads",attrs:{name:"file",action:"123",showUploadList:!1,beforeUpload:n.beforeUpload}},[a("a-button",{attrs:{type:"primary"}},[n._v("上传脚本代码")])],1)],1),n.script_name?a("a-alert",{staticClass:"a-alert-add",attrs:{message:n.script_name,type:"success",showIcon:!0}}):n._e(),a("div",{staticClass:"content-inner content-inner-top"},[a("span",{staticClass:"label-inner"},[n._v("备注")]),a("a-textarea",{staticClass:"e-textarea",attrs:{placeholder:"请输入备注",rows:4},model:{value:n.describe,callback:function(e){n.describe=e},expression:"describe"}})],1)],1)])],2),a("a-modal",{staticClass:"script-list-dialog",attrs:{title:"编辑脚本",visible:n.isEditUpLoadShow},on:{cancel:n.uploadEditScriptCancelAction}},[a("template",{slot:"footer"},[a("a-button",{on:{click:n.uploadEditScriptCancelAction}},[n._v("取消")]),a("a-button",{attrs:{type:"primary"},on:{click:n.uploadEditcriptConfigAction}},[n._v("确定")])],1),a("a-form",[a("div",{staticClass:"dialog-content"},[a("div",{staticClass:"content-inner"},[a("span",{staticClass:"label-inner label-inner-first"},[n._v("内容")]),a("a-upload",{ref:"uploads",attrs:{name:"file",action:"123",showUploadList:!1,beforeUpload:n.editBeforeUpload}},[a("a-button",{attrs:{type:"primary"}},[n._v("脚本代码")])],1)],1),n.edit_script_name?a("a-alert",{staticClass:"a-alert-add",attrs:{message:n.edit_script_name,type:"success",showIcon:!0}}):n._e(),a("div",{staticClass:"content-inner content-inner-top"},[a("span",{staticClass:"label-inner"},[n._v("备注")]),a("a-textarea",{staticClass:"e-textarea",attrs:{placeholder:"请输入备注信息",rows:4},model:{value:n.editDescribe,callback:function(e){n.editDescribe=e},expression:"editDescribe"}})],1)],1)])],2),a("a-modal",{attrs:{title:"脚本内容",width:"70%",visible:n.isScriptContent},on:{cancel:n.contentScriptCancelAction}},[a("template",{slot:"footer"},[a("a-button",{on:{click:n.contentScriptCancelAction}},[n._v("取消")])],1),a("div",{staticClass:"dialog-content dialog-content-hight"},[a("div",{directives:[{name:"highlight",rawName:"v-highlight",value:!0,expression:"true"}],domProps:{innerHTML:n._s(n.scriptContent)}})])],2)],1)},[],!1,null,null,null);t.default=E.exports},VclK:function(e,t){e.exports=function(e){var t="\\[=*\\[",n="\\]=*\\]",a={begin:t,end:n,contains:["self"]},i=[e.COMMENT("--(?!"+t+")","$"),e.COMMENT("--"+t,n,{contains:[a],relevance:10})];return{lexemes:e.UNDERSCORE_IDENT_RE,keywords:{literal:"true false nil",keyword:"and break do else elseif end for goto if in local not or repeat return then until while",built_in:"_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstringmodule next pairs pcall print rawequal rawget rawset require select setfenvsetmetatable tonumber tostring type unpack xpcall arg selfcoroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"},contains:i.concat([{className:"function",beginKeywords:"function",end:"\\)",contains:[e.inherit(e.TITLE_MODE,{begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{className:"params",begin:"\\(",endsWithParent:!0,contains:i}].concat(i)},e.C_NUMBER_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",begin:t,end:n,contains:[a],relevance:5}])}}},YicM:function(e){e.exports=JSON.parse('[{"key":"script_name","title":"脚本名称","dataIndex":"script_name"},{"key":"length","title":"长度","dataIndex":"length"},{"key":"md5","title":"md5","dataIndex":"md5"},{"key":"updated_time","title":"修改时间","dataIndex":"updated_time"},{"key":"describe","title":"备注","dataIndex":"describe"},{"key":"action","title":"操作","dataIndex":"action","scopedSlots":{"customRender":"action"}}]')},a0YD:function(e,t,n){},mjNE:function(e,t,n){var a,i,r;i=function(i){var n,d=[],c=Object.keys,v={},o={},t=/^(no-?highlight|plain|text)$/i,l=/\blang(?:uage)?-([\w-]+)\b/i,a=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,b="</span>",E={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function w(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function p(e){return e.nodeName.toLowerCase()}function S(e,t){var n=e&&e.exec(t);return n&&0===n.index}function u(e){return t.test(e)}function g(e){var t,n={},a=Array.prototype.slice.call(arguments,1);for(t in e)n[t]=e[t];return a.forEach(function(e){for(t in e)n[t]=e[t]}),n}function f(e){var i=[];return function e(t,n){for(var a=t.firstChild;a;a=a.nextSibling)3===a.nodeType?n+=a.nodeValue.length:1===a.nodeType&&(i.push({event:"start",offset:n,node:a}),n=e(a,n),p(a).match(/br|hr|img|input/)||i.push({event:"stop",offset:n,node:a}));return n}(e,0),i}function h(e,t,n){var a=0,i="",r=[];function s(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function o(e){i+="<"+p(e)+d.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+w(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function c(e){i+="</"+p(e)+">"}function l(e){("start"===e.event?o:c)(e.node)}for(;e.length||t.length;){var u=s();if(i+=w(n.substring(a,u[0].offset)),a=u[0].offset,u===e){for(r.reverse().forEach(c);l(u.splice(0,1)[0]),(u=s())===e&&u.length&&u[0].offset===a;);r.reverse().forEach(o)}else"start"===u[0].event?r.push(u[0].node):r.pop(),l(u.splice(0,1)[0])}return i+w(n.substr(a))}function r(e){if(n&&!e.langApiRestored){for(var t in e.langApiRestored=!0,n)e[t]&&(e[n[t]]=e[t]);(e.contains||[]).concat(e.variants||[]).forEach(r)}}function C(s){function l(e){return e&&e.source||e}function o(e,t){return new RegExp(l(e),"m"+(s.case_insensitive?"i":"")+(t?"g":""))}!function t(n,e){if(!n.compiled){if(n.compiled=!0,n.keywords=n.keywords||n.beginKeywords,n.keywords){function a(n,e){s.case_insensitive&&(e=e.toLowerCase()),e.split(" ").forEach(function(e){var t=e.split("|");i[t[0]]=[n,t[1]?Number(t[1]):1]})}var i={};"string"==typeof n.keywords?a("keyword",n.keywords):c(n.keywords).forEach(function(e){a(e,n.keywords[e])}),n.keywords=i}n.lexemesRe=o(n.lexemes||/\w+/,!0),e&&(n.beginKeywords&&(n.begin="\\b("+n.beginKeywords.split(" ").join("|")+")\\b"),n.begin||(n.begin=/\B|\b/),n.beginRe=o(n.begin),n.endSameAsBegin&&(n.end=n.begin),n.end||n.endsWithParent||(n.end=/\B|\b/),n.end&&(n.endRe=o(n.end)),n.terminator_end=l(n.end)||"",n.endsWithParent&&e.terminator_end&&(n.terminator_end+=(n.end?"|":"")+e.terminator_end)),n.illegal&&(n.illegalRe=o(n.illegal)),null==n.relevance&&(n.relevance=1),n.contains||(n.contains=[]),n.contains=Array.prototype.concat.apply([],n.contains.map(function(e){return function(t){return t.variants&&!t.cached_variants&&(t.cached_variants=t.variants.map(function(e){return g(t,{variants:null},e)})),t.cached_variants||t.endsWithParent&&[g(t)]||[t]}("self"===e?n:e)})),n.contains.forEach(function(e){t(e,n)}),n.starts&&t(n.starts,e);var r=n.contains.map(function(e){return e.beginKeywords?"\\.?(?:"+e.begin+")\\.?":e.begin}).concat([n.terminator_end,n.illegal]).map(l).filter(Boolean);n.terminators=r.length?o(function(e,t){for(var n=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,a=0,i="",r=0;r<e.length;r++){var s=a,o=l(e[r]);for(0<r&&(i+=t);0<o.length;){var c=n.exec(o);if(null==c){i+=o;break}i+=o.substring(0,c.index),o=o.substring(c.index+c[0].length),"\\"==c[0][0]&&c[1]?i+="\\"+String(Number(c[1])+s):(i+=c[0],"("==c[0]&&a++)}}return i}(r,"|"),!0):{exec:function(){return null}}}}(s)}function x(e,t,r,n){function o(e,t,n,a){var i='<span class="'+(a?"":E.classPrefix);return e?(i+=e+'">')+t+(n?"":b):t}function s(){p+=null!=u.subLanguage?function(){var e="string"==typeof u.subLanguage;if(e&&!v[u.subLanguage])return w(g);var t=e?x(u.subLanguage,g,!0,d[u.subLanguage]):R(g,u.subLanguage.length?u.subLanguage:void 0);return 0<u.relevance&&(f+=t.relevance),e&&(d[u.subLanguage]=t.top),o(t.language,t.value,!1,!0)}():function(){var e,t,n,a,i,r,s;if(!u.keywords)return w(g);for(a="",t=0,u.lexemesRe.lastIndex=0,n=u.lexemesRe.exec(g);n;)a+=w(g.substring(t,n.index)),i=u,r=n,void 0,s=l.case_insensitive?r[0].toLowerCase():r[0],(e=i.keywords.hasOwnProperty(s)&&i.keywords[s])?(f+=e[1],a+=o(e[0],w(n[0]))):a+=w(n[0]),t=u.lexemesRe.lastIndex,n=u.lexemesRe.exec(g);return a+w(g.substr(t))}(),g=""}function c(e){p+=e.className?o(e.className,"",!0):"",u=Object.create(e,{parent:{value:u}})}function a(e,t){if(g+=e,null==t)return s(),0;var n=function(e,t){var n,a,i;for(n=0,a=t.contains.length;n<a;n++)if(S(t.contains[n].beginRe,e))return t.contains[n].endSameAsBegin&&(t.contains[n].endRe=(i=t.contains[n].beginRe.exec(e)[0],new RegExp(i.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m"))),t.contains[n]}(t,u);if(n)return n.skip?g+=t:(n.excludeBegin&&(g+=t),s(),n.returnBegin||n.excludeBegin||(g=t)),c(n),n.returnBegin?0:t.length;var a=function e(t,n){if(S(t.endRe,n)){for(;t.endsParent&&t.parent;)t=t.parent;return t}if(t.endsWithParent)return e(t.parent,n)}(u,t);if(a){var i=u;for(i.skip?g+=t:(i.returnEnd||i.excludeEnd||(g+=t),s(),i.excludeEnd&&(g=t));u.className&&(p+=b),u.skip||u.subLanguage||(f+=u.relevance),(u=u.parent)!==a.parent;);return a.starts&&(a.endSameAsBegin&&(a.starts.endRe=a.endRe),c(a.starts)),i.returnEnd?0:t.length}if(function(e,t){return!r&&S(t.illegalRe,e)}(t,u))throw new Error('Illegal lexeme "'+t+'" for mode "'+(u.className||"<unnamed>")+'"');return g+=t,t.length||1}var l=y(e);if(!l)throw new Error('Unknown language: "'+e+'"');C(l);var i,u=n||l,d={},p="";for(i=u;i!==l;i=i.parent)i.className&&(p=o(i.className,"",!0)+p);var g="",f=0;try{for(var h,_,m=0;u.terminators.lastIndex=m,h=u.terminators.exec(t);)_=a(t.substring(m,h.index),h[0]),m=h.index+_;for(a(t.substr(m)),i=u;i.parent;i=i.parent)i.className&&(p+=b);return{relevance:f,value:p,language:e,top:u}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:w(t)};throw e}}function R(n,e){e=e||E.languages||c(v);var a={relevance:0,value:w(n)},i=a;return e.filter(y).filter(N).forEach(function(e){var t=x(e,n,!1);t.language=e,t.relevance>i.relevance&&(i=t),t.relevance>a.relevance&&(i=a,a=t)}),i.language&&(a.second_best=i),a}function _(e){return E.tabReplace||E.useBR?e.replace(a,function(e,t){return E.useBR&&"\n"===e?"<br>":E.tabReplace?t.replace(/\t/g,E.tabReplace):""}):e}function s(e){var t,n,a,i,r,s=function(e){var t,n,a,i,r=e.className+" ";if(r+=e.parentNode?e.parentNode.className:"",n=l.exec(r))return y(n[1])?n[1]:"no-highlight";for(t=0,a=(r=r.split(/\s+/)).length;t<a;t++)if(u(i=r[t])||y(i))return i}(e);u(s)||(E.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):t=e,r=t.textContent,a=s?x(s,r,!0):R(r),(n=f(t)).length&&((i=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=a.value,a.value=h(n,f(i),r)),a.value=_(a.value),e.innerHTML=a.value,e.className=function(e,t,n){var a=t?o[t]:n,i=[e.trim()];return e.match(/\bhljs\b/)||i.push("hljs"),-1===e.indexOf(a)&&i.push(a),i.join(" ").trim()}(e.className,s,a.language),e.result={language:a.language,re:a.relevance},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.relevance}))}function m(){if(!m.called){m.called=!0;var e=document.querySelectorAll("pre code");d.forEach.call(e,s)}}function y(e){return e=(e||"").toLowerCase(),v[e]||v[o[e]]}function N(e){var t=y(e);return t&&!t.disableAutodetect}return i.highlight=x,i.highlightAuto=R,i.fixMarkup=_,i.highlightBlock=s,i.configure=function(e){E=g(E,e)},i.initHighlighting=m,i.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",m,!1),addEventListener("load",m,!1)},i.registerLanguage=function(t,e){var n=v[t]=e(i);r(n),n.aliases&&n.aliases.forEach(function(e){o[e]=t})},i.listLanguages=function(){return c(v)},i.getLanguage=y,i.autoDetection=N,i.inherit=g,i.IDENT_RE="[a-zA-Z]\\w*",i.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",i.NUMBER_RE="\\b\\d+(\\.\\d+)?",i.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",i.BINARY_NUMBER_RE="\\b(0b[01]+)",i.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",i.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},i.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[i.BACKSLASH_ESCAPE]},i.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[i.BACKSLASH_ESCAPE]},i.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},i.COMMENT=function(e,t,n){var a=i.inherit({className:"comment",begin:e,end:t,contains:[]},n||{});return a.contains.push(i.PHRASAL_WORDS_MODE),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),a},i.C_LINE_COMMENT_MODE=i.COMMENT("//","$"),i.C_BLOCK_COMMENT_MODE=i.COMMENT("/\\*","\\*/"),i.HASH_COMMENT_MODE=i.COMMENT("#","$"),i.NUMBER_MODE={className:"number",begin:i.NUMBER_RE,relevance:0},i.C_NUMBER_MODE={className:"number",begin:i.C_NUMBER_RE,relevance:0},i.BINARY_NUMBER_MODE={className:"number",begin:i.BINARY_NUMBER_RE,relevance:0},i.CSS_NUMBER_MODE={className:"number",begin:i.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},i.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[i.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[i.BACKSLASH_ESCAPE]}]},i.TITLE_MODE={className:"title",begin:i.IDENT_RE,relevance:0},i.UNDERSCORE_TITLE_MODE={className:"title",begin:i.UNDERSCORE_IDENT_RE,relevance:0},i.METHOD_GUARD={begin:"\\.\\s*"+i.UNDERSCORE_IDENT_RE,relevance:0},i},r="object"==typeof window&&window||"object"==typeof self&&self,t.nodeType?r&&(r.hljs=i({}),void 0===(a=function(){return r.hljs}.apply(t,[]))||(e.exports=a)):i(t)}}]);