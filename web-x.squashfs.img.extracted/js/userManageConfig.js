!function(a){function b(a,b,c){switch(a){case 604:b="w_useMannageErr_InputNotValid";break;case 605:b=c?"w_useMannageErr_IndexOverlap_group":"w_useMannageErr_IndexOverlap_user";break;case 606:case 607:b=c?"w_useMannageErr_IndexOverlap_group":"w_useMannageErr_IndexOverlap_user";break;case 608:b=c?"w_useMannageErr_ObjectInUse_group":"w_useMannageErr_ObjectInUse_user";break;case 609:b=c?"w_useMannageErr_SubsetOverlap_group":"w_useMannageErr_SubsetOverlap_user";break;case 610:b="w_useMannageErr_SaveCfgError";break;case 611:b="w_useMannageErr_PwdNotValid";break;case 612:b="w_useMannageErr_PwdNotMatch";break;case 613:b="w_useMannageErr_ReservedAccount";break;case 614:b="w_useMannageErr_TooManyGroup";break;case 615:b="w_useMannageErr_TooManyUser"}return b}function c(b,c){var d=a(c).attr("data-pwd"),e=[];return a("input[data-pwd="+d+"]").each(function(b,c){e.push(a(c).val())}),e[0]===e[1]}function d(a){var b=a.children("li");b.removeClass("current"),a.prop("class","ui-pwd-strength")}define(function(require,a,b){b.exports=require("jsCore/pageTab"),b.exports.prototype.getCondition=function(){b.exports.prototype.use_onvif=!(!webApp.EncryptInfo||!webApp.EncryptInfo.asymmetric)&&webCaps.OnvifSync&&/simpchinese/i.test(Site.currentLanguage)}}),define("use_userM",function(require,c,d){function e(b,c,d,e){var f=b.prop("id");b.empty(),a.each(d,function(d,g){-1===a.inArray(g,c)&&(a('<div class="ui-textarea-item fn-clear">                        <div class="ui-checkbox">                            <input type="checkbox" data-for="'+g+'" id="'+f+"_"+g+'"/>                        </div>                        <label class="ui-label-sub" for="'+f+"_"+g+'" t="'+g+'"></label>                    </div>').appendTo(b),-1!==a.inArray(g,e)&&b.find("input[data-for="+g+"]").prop("checked",!0))}),b.translation()}function f(b){var c=[];return b.find("input:checked").each(function(b,d){c.push(a(d).attr("data-for"))}),c}function g(a){return a.find("input:checked").length===a.find("input").length}function h(b,c){var d=b.prop("checked");c.find("input").each(function(b,c){a(c).prop("checked",d)})}var i,j,k=require("jsCore/rpc"),l=require("jsCore/pageBase"),m=require("jsCore/ability"),n=require("common/common"),o=null,p=null,q=null;d.exports=l.extend({init:function(){o=this,p=o,i=o.$("#use_anonym"),o._initTab(),o._renderAnonymity(),o._bind(),k.MagicBox.getSerialNo().done(function(a){j=a})},_bind:function(){i.click(function(){q.Anonymous=i.prop("checked"),k.UserManager.modifyUser("anonymity",q).done(function(){o.tip("success",q.Anonymous?"w_openAnonymLoginSucceed":"w_closeAnonymLoginSucceed")}).fail(function(){o.tip("error",q.Anonymous?"w_openAnonymLoginFailed":"w_closeAnonymLoginFailed"),i.prop("checked",!q.Anonymous)})})},_initTab:function(){var a=o.$(".u-tab"),b=o.$(".u-tab-content");o.tabs={},a.tab({switched:function(a,c){var d=o.tabs[c.from],e=o.tabs[c.to];d&&d.leave(),e?(e.render(),o.current=e):require.async(c.to,function(a){o.tabs[c.to]=new a({element:b.find("[data-page="+c.to+"]")}),o.current=o.tabs[c.to]})}})},render:function(){o.current.render()},_renderAnonymity:function(){k.UserManager.getUserInfo("anonymity").done(function(a){q=a,i.prop("checked",q.Anonymous)})},destory:function(){o.current.destory()}}),define("userM_user",function(require,c,d){function i(b,c){var d=a(c).attr("data-pwd"),e=[];return a("input[data-pwd="+d+"]").each(function(b,c){e.push(a(c).val())}),e[0]===e[1]}function o(a,b){var c=b.children("li");if(c.removeClass("current"),a){var d=n.pwdStrenthValidator(a),e=b.find("."+d);e.addClass("current"),b.prop("class","ui-pwd-strength "+d)}else b.prop("class","ui-pwd-strength")}function q(a){var b=a.children("li");b.removeClass("current"),a.prop("class","ui-pwd-strength")}var r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H=null,I=["ComConf","MHardisk","ShutDown"],J=[];d.exports=l.extend({init:function(){H=this,E=H.$("#use_AUserDlg"),F=H.$("#use_EUserDlg"),G=H.$("#use_DUserDlg"),H._initTable(),H._initDialog(),z=E.find("#use_AUserAuth"),A=E.find("#use_AUserAuthli"),B=F.find("#use_EUserAuth"),C=F.find("#use_EUserAuthli"),D=F.find("#use_EUserChkPwd"),H._initInput(),H._bind(),H.render()},_bind:function(){z.on("click",function(){h(z,A)}),A.on("click",function(){z.prop("checked",g(A))}),B.on("click",function(){h(B,C)}),C.on("click",function(){B.prop("checked",g(C))}),D.on("click",function(){F.find("div[data-warp=editPwd]").css("display",D.prop("checked")?"":"none")}),E.find("#use_AUserPwd").on("keyup",function(){var b=a(this).val(),c=a(this).offsetParent().find(".ui-pwd-strength");o(b,c)}),F.find("#use_EUserNPwd").on("keyup",function(){var b=a(this).val(),c=a(this).offsetParent().find(".ui-pwd-strength");o(b,c)})},_initTable:function(){r=H.$("#use_userTab").table({pageable:!1,height:200,columns:[{title:tl("w_Numbers"),width:"10%",render:function(a){return a._index+1}},{title:tl("w_User"),width:"15%",fields:"Name"},{title:tl("w_Group Name"),width:"15%",fields:"Group"},{title:tl("w_Remark"),width:"40%",fields:"Memo"},{title:tl("w_Amend"),width:"10%",action:"edit",icon:"ui-table-icon-edit",handle:function(a){s=a,F.dialog("show"),H._renderEditUser(s)}},{title:tl("Delete"),action:"delete",icon:"ui-table-icon-del",handle:function(a,b){s=a,G.dialog("show"),b.stopPropagation()}}],onRowSelect:function(a,b){return s=b.data,H._renderUserInfo(b.data),!1}})},_initDialog:function(){E.dialog({confirm:function(a,b){H._onAddUser(b)}}).detach().appendTo(document.body),F.dialog({confirm:function(a,b){H._onEditUser(b)}}).detach().appendTo(document.body),G.dialog({confirm:function(a,b){H._onDelUser(),b.ui.close()}}).detach().appendTo(document.body)},_initInput:function(){w=a.validator([{element:E.find("#use_AUserName"),check:[n.Check.alphaNumLineDotA,n.Check.require],errorMsg:[tl("badUserString"),tl("w_Need")],events:["blur","blur"],errorElem:".u-input-error"},{element:E.find("#use_AUserMemo"),check:[n.Check.alphaNumLineQuoSpace],errorMsg:[tl("w_Badmemo")],events:["blur"],errorElem:".u-input-error"},{element:E.find("#use_AUserPwdCfm"),check:[i,n.Check.noQuotationColonAnd],errorMsg:[tl("w_PwdDif"),tl("badPwdString")],events:["blur","blur"],errorElem:"#use_AUserPwdCfmTip.u-input-error"},{element:E.find("#use_AUserPwd"),check:[i],errorMsg:[tl("w_PwdDif")],events:["blur"],errorElem:"#use_AUserPwdCfmTip.u-input-error"},{element:E.find("#use_AUserPwd"),check:[n.Check.require,n.Check.noQuotationColonAnd],errorMsg:[tl("w_passwordMustnotNull"),tl("badPwdString")],events:["blur","blur"],errorElem:".u-input-error"}]),x=a.validator([{element:F.find("#use_EUserMemo"),check:[n.Check.alphaNumLineQuoSpace],errorMsg:[tl("w_Badmemo")],events:["blur"],errorElem:".u-input-error"}]),y=a.validator([{element:F.find("#use_EUserPwdCfm"),check:[i,n.Check.noQuotationColonAnd],errorMsg:[tl("w_PwdDif"),tl("badPwdString")],events:["blur","blur"],errorElem:"#use_EUserPwdCfmTip.u-input-error"},{element:F.find("#use_EUserNPwd"),check:[i],errorMsg:[tl("w_PwdDif")],events:["blur"],errorElem:"#use_EUserPwdCfmTip.u-input-error"},{element:F.find("#use_EUserNPwd"),check:[n.Check.require,n.Check.noQuotationColonAnd],errorMsg:[tl("w_passwordMustnotNull"),tl("badPwdString")],events:["blur","blur"],errorElem:".u-input-error"},{element:F.find("#use_EUserOPwd"),check:[n.Check.noQuotationColonAnd],errorMsg:[tl("badPwdString")],events:["blur"],errorElem:".u-input-error"}])},render:function(){m.get("IsLocalStore").done(function(a){I=a?["ComConf","MHardisk","ShutDown"]:["ComConf","MHardisk","ShutDown","Replay_01","Backup"],k.UserManager.getUserInfoAll().done(function(a){v=a,r.table("dataSource",v).table("selectRow",0)})}),k.UserManager.getActiveUserInfoAll().done(function(b){J.length=0,a.each(b,function(a,b){"web3.0"==b.ClientType.toLowerCase()&&J.push(b.Name)})})},destory:function(){E.remove(),F.remove(),G.remove()},_renderUserInfo:function(b){var c=H.$("#use_Ulist").empty();a.each(b.AuthorityList,function(b,d){-1===a.inArray(d,I)&&a('<span class="ui-detail-item" t="'+d+'"></span>').appendTo(c)}),c.translation()},renderAddUser:function(){E.find(":input").each(function(b,c){a(c).val("")}),E.find("#use_AUserAuthTip").text(""),q(E.find(".ui-pwd-strength")),k.UserManager.getGroupInfoAll().done(function(b){u=b;var c=E.find("#use_AUsergrp").empty();a.each(u,function(b,d){a('<option value="'+d.Name+'"></option>').text(d.Name).appendTo(c)}),a.each(u,function(a,b){b.Name===c.val()&&(t=b,e(A,I,b.AuthorityList,b.AuthorityList))}),z.prop("checked",g(A))}),w.validate(),E.dialog("show")},onSelAddGroup:function(b){var c=E.find(b.target).val();t=a.grep(u,function(a){return a.Name==c})[0],e(A,I,t.AuthorityList,t.AuthorityList),z.prop("checked",g(A))},_onAddUser:function(c){if(w.isInvalid())return void w.validate();var d=f(A);if(0==d.length)return void E.find("#use_AUserAuthTip").text(tl("w_Authnone"));var e={},g="Login to "+j,h=E.find("#use_AUserPwd").val(),i=E.find("#use_AUserName").val();e.Id=v.length+1,e.Name=i,e.Password=hex_md5(i+":"+g+":"+h),e.Type="",e.ModifiedTime="",e.Memo=E.find("#use_AUserMemo").val(),e.Group=E.find("#use_AUsergrp").val(),-1!==a.inArray("MHardisk",t.AuthorityList)&&-1!==a.inArray("ShutDown",t.AuthorityList)&&d.push("MHardisk","ShutDown"),e.AuthorityList=d,e.Reserved=!1,e.Sharable=!0,k.UserManager.addUser(e).done(function(){r.table("add",e,-1).table("selectRow",v.length-1),c.ui.close(),p.tip("success","w_AddUserSuc")}).fail(function(a){c.ui.close();var d=b(a.error&&a.error.code,"w_AddUserFail",0);p.tip("error",d)})},_renderEditUser:function(b){F.find(":input").each(function(b,c){a(c).val("")}),F.find("#use_EUserAuthliTip").text(""),q(F.find(".ui-pwd-strength")),F.find("div[data-warp=editPwd]").css("display","none"),D.prop("checked",!1);var c=F.find("#use_EUserName").empty();a.each(v,function(b,d){a('<option value="'+d.Name+'"></option>').text(d.Name).appendTo(c)}),c.val(b.Name),k.UserManager.getGroupInfoAll().done(function(c){u=c;var d=F.find("#use_EUserGrp").empty();a.each(u,function(b,c){a('<option value="'+c.Name+'"></option>').text(c.Name).appendTo(d)}),d.val(b.Group),a.each(u,function(a,c){c.Name===b.Group&&(t=c,e(C,I,c.AuthorityList,b.AuthorityList))}),B.prop("checked",g(C)),H._renderAdminInfo("admin"==b.Name||a.inArray(b.Name,J)>-1?!0:!1)}),F.find("#use_EUserMemo").val(b.Memo),x.validate(),y.validate()},_renderAdminInfo:function(b){F.find("#use_EUserGrp").prop("disabled",b),F.find("#use_EUserMemo").prop("disabled",b),B.prop("disabled",b),C.find(":input").each(function(c,d){a(d).prop("disabled",b)})},onSelEditGroup:function(b){var c=F.find(b.target).val();t=a.grep(u,function(a){return a.Name==c})[0],e(C,I,t.AuthorityList,c===s.Group?s.AuthorityList:[]),B.prop("checked",g(C))},onSelEditUser:function(b){var c=F.find(b.target).val();s=a.grep(v,function(a){return a.Name==c})[0],H._renderEditUser(s)},_onEditUser:function(c){if(x.isInvalid())return void x.validate();var d=f(C);if(0==d.length)return void F.find("#use_EUserAuthliTip").text(tl("w_Authnone"));if(D.prop("checked")){if(y.isInvalid())return void y.validate();var e,g,h=F.find("#use_EUserName").val(),i=F.find("#use_EUserOPwd").val(),l=F.find("#use_EUserNPwd").val(),m="Login to "+j;webApp.EncryptInfo&&webApp.EncryptInfo.asymmetric&&webCaps.OnvifSync?(e=l,g=i):(e=hex_md5(h+":"+m+":"+l),g=hex_md5(h+":"+m+":"+i)),k.UserManager.modifyPassword(h,e,g).done(function(){login.getLoginInfo().username;"admin"==s.Name||a.inArray(s.Name,J)>-1?(c.ui.close(),p.tip("success","w_ChangeUserSucce")):H._onEditUserOnly()}).fail(function(a){var d=b(a.error&&a.error.code,"w_ChangePwdFail",0);c.ui.close(),p.tip("error",d)})}else H._onEditUserOnly()},_onEditUserOnly:function(){var c=a.extend(!0,{},s);c.Group=F.find("#use_EUserGrp").val(),c.Memo=F.find("#use_EUserMemo").val(),c.AuthorityList=t.AuthorityList;var d=f(C);-1!==a.inArray("MHardisk",c.AuthorityList)&&-1!==a.inArray("ShutDown",c.AuthorityList)&&d.push("MHardisk","ShutDown"),c.AuthorityList=d,k.UserManager.modifyUser(c.Name,c).done(function(){s.Group=c.Group,s.Memo=c.Memo,s.AuthorityList=c.AuthorityList;var b=0;F.find("#use_EUserName").find("option").each(function(c,d){a(d).val()==s.Name&&(b=c)}),r.table("modify",s,b),r.table("selectRow",b),p.tip("success","w_ChangeUserSucce")}).fail(function(a){var c=b(a.error&&a.error.code,"w_ChangeUserFail",0);p.tip("error",c)}),F.dialog("close")},_onDelUser:function(){k.UserManager.deleteUser(s.Name).done(function(){p.tip("success","w_DelUserSucce"),r.table("del",s),r.table("selectRow",0)}).fail(function(a){var c=b(a.error&&a.error.code,"w_DelUserFail",0);p.tip("error",c)})}})}),define("userM_group",function(require,c,d){var i,j,o,q,r,s,t,u,v,w,x,y,z=null,A=["ComConf","MHardisk","ShutDown"],B=[];d.exports=l.extend({init:function(){z=this,w=z.$("#use_AGrpDlg"),x=z.$("#use_EGrpDlg"),y=z.$("#use_DGrpDlg"),z._initTable(),z._initDialog(),s=w.find("#use_AGrpAuth"),t=w.find("#use_AGrpAuthli"),u=x.find("#use_EGrpAuth"),v=x.find("#use_EGrpAuthli"),z._initInput(),k.UserManager.getAuthorityList().done(function(a){B=a}),z._bind(),z.render()},_initTable:function(){i=z.$("#use_groupTab").table({pageable:!1,height:200,columns:[{title:tl("w_Numbers"),width:"10%",render:function(a){return a._index+1}},{title:tl("w_Group Name"),width:"20%",fields:"Name"},{title:tl("w_Remark"),width:"50%",fields:"Memo"},{title:tl("w_Amend"),width:"10%",action:"edit",icon:"ui-table-icon-edit",handle:function(a){x.dialog("show"),o=a,z._renderEditGroup(a)}},{title:tl("Delete"),action:"delete",icon:"ui-table-icon-del",handle:function(a,b){o=a,y.dialog("show"),b.stopPropagation()}}],onRowSelect:function(a,b){return o=b.data,z._renderGroupInfo(b.data),!1}})},_initDialog:function(){w.dialog({confirm:function(a,b){z._onAddGroup(b)}}).detach().appendTo(document.body),x.dialog({confirm:function(a,b){z._onEditGroup(b)}}).detach().appendTo(document.body),y.dialog({confirm:function(a,b){z._onDelGroup(),b.ui.close()}}).detach().appendTo(document.body)},_initInput:function(){q=a.validator([{element:w.find("#use_AGrpName"),check:[n.Check.alphaNumUnderline,n.Check.require],errorMsg:[tl("w_Badstring"),tl("w_Need")],events:["blur","blur"],errorElem:".u-input-error"},{element:w.find("#use_AGrpMemo"),check:[n.Check.alphaNumLineQuoSpace],errorMsg:[tl("w_Badmemo")],events:["blur"],errorElem:".u-input-error"}]),r=a.validator([{element:x.find("#use_EGrpMemo"),check:[n.Check.alphaNumLineQuoSpace],errorMsg:[tl("w_Badmemo")],events:["blur"],errorElem:".u-input-error"}])},_bind:function(){s.on("click",function(){h(s,t)}),t.on("click",function(){s.prop("checked",g(t))}),u.on("click",function(){h(u,v)}),v.on("click",function(){u.prop("checked",g(v))})},render:function(){m.get("IsLocalStore").done(function(a){A=a?["ComConf","MHardisk","ShutDown"]:["ComConf","MHardisk","ShutDown","Replay_01","Backup"],k.UserManager.getGroupInfoAll().done(function(a){j=a,i.table("dataSource",j).table("selectRow",0)})})},destory:function(){w.remove(),x.remove(),y.remove()},_renderGroupInfo:function(b){var c=z.$("#use_Glist").empty();a.each(b.AuthorityList,function(b,d){-1===a.inArray(d,A)&&a('<span class="ui-detail-item" t="'+d+'"></span>').appendTo(c)}),c.translation()},renderAddGroup:function(){w.find(":input").each(function(b,c){a(c).val("")}),w.find("#use_AGrpAuthTip").text(""),e(t,A,B,[]),s.prop("checked",g(t)),q.validate(),w.dialog("show")},_onAddGroup:function(c){if(q.isInvalid())return void q.validate();var d=f(t);if(0==d.length)return void w.find("#use_AGrpAuthTip").text(tl("w_Authnone"));var e={};e.Id=j.length+1,e.Name=w.find("#use_AGrpName").val(),e.Memo=w.find("#use_AGrpMemo").val(),a.each(A,function(b,c){-1===a.inArray(c,d)&&d.push(c)}),e.AuthorityList=d,k.UserManager.addGroup(e).done(function(){i.table("add",e,-1),i.table("selectRow",j.length-1),c.ui.close(),p.tip("success","w_AddGroupSucce")}).fail(function(a){c.ui.close();var d=b(a.error&&a.error.code,"w_AddGroupFail",1);p.tip("error",d)})},_renderEditGroup:function(b){x.find(":input").each(function(b,c){a(c).val("")}),x.find("#use_EGrpAuthTip").text("");var c=x.find("#use_EGrpName").empty();a.each(j,function(b,d){a('<option value="'+d.Name+'"></option>').text(d.Name).appendTo(c)}),c.val(b.Name),x.find("#use_EGrpMemo").val(b.Memo),a.each(j,function(a,c){c.Name===b.Name&&(o=c,e(v,A,B,b.AuthorityList))}),u.prop("checked",g(v))},onSelEditGroup:function(b){var c=x.find(b.target).val();o=a.grep(j,function(a){return a.Name==c})[0],z._renderEditGroup(o)},_onEditGroup:function(c){if(r.isInvalid())return void r.validate();var d=f(v);if(0==d.length)return void x.find("#use_EGrpAuthTip").text(tl("w_Authnone"));var e=a.extend(!0,{},o);e.Name=x.find("#use_EGrpName").val(),e.Memo=x.find("#use_EGrpMemo").val(),a.each(A,function(b,c){-1===a.inArray(c,d)&&d.push(c)}),e.AuthorityList=d,k.UserManager.modifyGroup(e.Name,e).done(function(){o.Name=e.Name,o.Memo=e.Memo,o.AuthorityList=e.AuthorityList;var b=0;x.find("#use_EGrpName").find("option").each(function(c,d){a(d).val()==o.Name&&(b=c)}),i.table("modify",o,b),i.table("selectRow",b),p.tip("success","w_ChangeGrpSuc")}).fail(function(a){var c=b(a.error&&a.error.code,"w_ChangeGrpFail",1);p.tip("error",c)}),c.ui.close()},_onDelGroup:function(){k.UserManager.deleteGroup(o.Name).done(function(){p.tip("success","w_DelGroupSucce"),i.table("del",o),i.table("selectRow",0)}).fail(function(a){var c=b(a.error&&a.error.code,"w_DelGroupFali",1);p.tip("error",c)})}})})}),define("use_onvif",function(require,e,f){function g(a,b){var c=b.children("li");if(c.removeClass("current"),a){var d=s.pwdStrenthValidator(a),e=b.find("."+d);e.addClass("current"),b.prop("class","ui-pwd-strength "+d)}else b.prop("class","ui-pwd-strength")}var h,i,j,k,l,m,n,o,p,q=require("jsCore/rpc"),r=require("jsCore/pageBase"),s=require("common/common"),t=["admin","operator","user"];f.exports=r.extend({init:function(){l=this,i=l.$("#use_AOnvifDlg"),j=l.$("#use_EOnvifDlg"),k=l.$("#use_DOnvifDlg"),j.find("#use_EOnvifChkPwd").on("click",function(){j.find("div[data-warp=editOnvifPwd]").css("display",j.find("#use_EOnvifChkPwd").prop("checked")?"":"none")}),i.find("#use_AOnvifPwd").on("keyup",function(){var b=a(this).val(),c=a(this).offsetParent().find(".ui-pwd-strength");g(b,c)}),j.find("#use_EOnvifNPwd").on("keyup",function(){var b=a(this).val(),c=a(this).offsetParent().find(".ui-pwd-strength");g(b,c)}),l._initTable(),l._initDialog(),l._initInput(),l.render()},render:function(){q.DockUser.getUserInfoAll().done(function(a){n=a,h.table("dataSource",n).table("selectRow",0)})},destory:function(){i.remove(),j.remove(),k.remove()},_initTable:function(){h=l.$("#use_OnvifTab").table({pageable:!1,height:200,columns:[{title:tl("w_Numbers"),width:"15%",render:function(a){return a._index+1}},{title:tl("w_User"),width:"25%",fields:"Name"},{title:tl("w_Group Name"),width:"25%",fields:"Group"},{title:tl("w_Amend"),width:"17%",action:"edit",icon:"ui-table-icon-edit",handle:function(a){m=a,j.dialog("show"),l._renderEditOnvif(m)}},{title:tl("Delete"),action:"delete",icon:"ui-table-icon-del",handle:function(a,b){m=a,k.dialog("show"),b.stopPropagation()}}]})},_initDialog:function(){i.dialog({confirm:function(a,b){l._onAddOnvif(b)}}).detach().appendTo(document.body),j.dialog({confirm:function(a,b){l._onEditOnvif(b)}}).detach().appendTo(document.body),k.dialog({confirm:function(a,b){l._onDelOnvif(),b.ui.close()}}).detach().appendTo(document.body)},_initInput:function(){o=a.validator([{element:i.find("#use_AOnvifName"),check:[s.Check.alphaNumLineDotA,s.Check.require],errorMsg:[tl("badUserString"),tl("w_Need")],events:["blur","blur"],errorElem:".u-input-error"},{element:i.find("#use_AOnvifPwdCfm"),check:[c,s.Check.noQuotationColonAnd],errorMsg:[tl("w_PwdDif"),tl("badPwdString")],events:["blur","blur"],errorElem:"#use_AOnvifPwdCfmTip.u-input-error"},{element:i.find("#use_AOnvifPwd"),check:[c],errorMsg:[tl("w_PwdDif")],events:["blur"],errorElem:"#use_AOnvifPwdCfmTip.u-input-error"},{element:i.find("#use_AOnvifPwd"),check:[s.Check.require,s.Check.noQuotationColonAnd],errorMsg:[tl("w_passwordMustnotNull"),tl("badPwdString")],events:["blur","blur"],errorElem:".u-input-error"}]),p=a.validator([{element:j.find("#use_EOnvifPwdCfm"),check:[c,s.Check.noQuotationColonAnd],errorMsg:[tl("w_PwdDif"),tl("badPwdString")],events:["blur","blur"],errorElem:"#use_EOnvifPwdCfmTip.u-input-error"},{element:j.find("#use_EOnvifOPwd"),check:[s.Check.noQuotationColonAnd],errorMsg:[tl("badPwdString")],events:["blur"],errorElem:".u-input-error"},{element:j.find("#use_EOnvifNPwd"),check:[c],errorMsg:[tl("w_PwdDif")],events:["blur"],errorElem:"#use_EOnvifPwdCfmTip.u-input-error"},{element:j.find("#use_EOnvifNPwd"),check:[s.Check.require,s.Check.noQuotationColonAnd],errorMsg:[tl("w_passwordMustnotNull"),tl("badPwdString")],events:["blur","blur"],errorElem:".u-input-error"}])},renderAddOnvif:function(){i.find(":input").each(function(b,c){a(c).val("")});var b=i.find("#use_AOnvifgrp").empty();a.each(t,function(c,d){a('<option value="'+d+'"></option>').text(d).appendTo(b)}),d(i.find(".ui-pwd-strength")),o.validate(),i.dialog("show")},_onAddOnvif:function(a){if(o.isInvalid())return void o.validate();var c={};c.Id=n.length+1,c.Name=i.find("#use_AOnvifName").val(),c.Password=i.find("#use_AOnvifPwd").val(),c.Group=i.find("#use_AOnvifgrp").val(),s.EncryptInfo(webApp.EncryptInfo.pub,{user:c}).done(function(d){q.DockUser.addUser(d.salt,"AES-128",d.content).done(function(){c.Password="******",h.table("add",c,-1).table("selectRow",n.length-1),a.ui.close(),l.tip("success","w_AddUserSuc")}).fail(function(c){a.ui.close();var d=b(c.error&&c.error.code,"w_AddUserFail",0);l.tip("error",d)})})},_renderEditOnvif:function(b){j.find(":input").each(function(b,c){a(c).val("")}),d(j.find(".ui-pwd-strength")),j.find("div[data-warp=editOnvifPwd]").css("display","none"),j.find("#use_EOnvifChkPwd").prop("checked",!1);var c=j.find("#use_EOnvifName").empty();a.each(n,function(b,d){a('<option value="'+d.Name+'"></option>').text(d.Name).appendTo(c)}),c.val(b.Name);var e=j.find("#use_EOnvifGrp").empty();a.each(t,function(b,c){a('<option value="'+c+'"></option>').text(c).appendTo(e)}),e.val(b.Group),l.disabled(e,"admin"===b.Name),p.validate()},onSelEditOnvif:function(b){var c=j.find(b.target).val();m=a.grep(n,function(a){return a.Name==c})[0],l._renderEditOnvif(m)},_onEditOnvif:function(a){var c=j.find("#use_EOnvifName").val();if(j.find("#use_EOnvifChkPwd").prop("checked")){if(p.isInvalid())return void p.validate();var d=j.find("#use_EOnvifOPwd").val(),e=j.find("#use_EOnvifNPwd").val();s.EncryptInfo(webApp.EncryptInfo.pub,{name:c,pwd:e,pwdOld:d}).done(function(d){q.DockUser.modifyPassword(d.salt,"AES-128",d.content).done(function(){"admin"===c?l.tip("success","w_ChangeUserSucce"):l._onEditOnvifOnly(),j.dialog("close")}).fail(function(c){var d=b(c.error&&c.error.code,"w_ChangePwdFail",0);a.ui.close(),l.tip("error",d)})})}else"admin"!==c&&l._onEditOnvifOnly(),j.dialog("close")},_onEditOnvifOnly:function(){m.Group=j.find("#use_EOnvifGrp").val(),q.DockUser.modifyUser(m.Name,m).done(function(){var b=0;j.find("#use_EOnvifName").find("option").each(function(c,d){a(d).val()==m.Name&&(b=c)}),h.table("modify",m,b),h.table("selectRow",b),l.tip("success","w_ChangeUserSucce")}).fail(function(a){var c=b(a.error&&a.error.code,"w_ChangeUserFail",0);l.tip("error",c)})},_onDelOnvif:function(){q.DockUser.deleteUser(m.Name).done(function(){l.tip("success","w_DelUserSucce"),h.table("del",m),h.table("selectRow",0)}).fail(function(a){var c=b(a.error&&a.error.code,"w_DelUserFail",0);l.tip("error",c)})}})})}(jQuery);