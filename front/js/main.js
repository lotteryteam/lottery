// var url = "";
// var show = "222222";
// var raw_url = "33333";
// var raw_show = "33333";
// var raw_appid = "33333";
// var raw_type = "33333";
// var id = 0;
// var appid="";
// var type="";
// var comment="";
//
// var w, h, className;
// function getSrceenWH() {
//     w = $(window).width();
//     h = $(window).height();
//     $('#dialogBg').width(w).height(h);
// }
//
// window.onresize = function () {
//     getSrceenWH();
// };
//
// $(window).resize();
//
// $(function () {
//     getSrceenWH();
//
//     $('.claseDialogBtn').click(function () {
//         $('#dialogBg').fadeOut(300, function () {
//             $('#dialog').addClass('bounceOutUp').fadeOut();
//         });
//     });
//
// });
//
// function edit(node){
//     className = $(node).attr('class');
//     raw_url = $(node).parents("tr").children()[1];
//     raw_show = $(node).parents("tr").children()[3];
//     raw_appid = $(node).parents("tr").children()[4];
//     raw_type = $(node).parents("tr").children()[2];
//
//     id = parseInt($(node).parents("tr").children()[0].innerHTML);
//
//     var raw_appid_value = $(node).parents("tr").children()[4].innerHTML;
//     var raw_type_value = $(node).parents("tr").children()[2].innerHTML;
//     var raw_show_value = $(node).parents("tr").children()[3].innerHTML;
//     var raw_url_value = $(node).parents("tr").children()[1].innerHTML;
//     var raw_comment_value = $(node).parents("tr").children()[5].innerHTML;
//
//
//     $('#appid_input').val(""+raw_appid_value);
//     $('#url_input').val(""+raw_url_value);
//     $('#comment_input').val(""+raw_comment_value);
//
//     if(raw_type_value == "ios" || raw_type_value == "iOS"){
//         $('#type_input option:eq(0)').attr('selected','selected');
//     }else{
//         $('#type_input option:eq(1)').attr('selected','selected');
//     }
//
//     if(parseInt(raw_show_value) == 1){
//         $('#show_input option:eq(0)').attr('selected','selected');
//     }
//     if(parseInt(raw_show_value) == 0){
//         $('#show_input option:eq(1)').attr('selected','selected');
//     }
//
//     $('#dialogBg').fadeIn(300);
//     $('#dialog').removeAttr('class').addClass('animated ' + className + '').fadeIn();
// }
//
// function save_edit(node){
//
//     show = parseInt($('#show_input').val());
//     url = String($('#url_input').val());
//     appid = String($('#appid_input').val());
//     type = String($('#type_input').val());
//     comment = String($('#comment_input').val());
//
//         if(1){
//             var express=/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
//             var objExp=new RegExp(express);
//             if(objExp.test(url) == true){
//                 var arr =  ""+id+","+url+","+show+","+appid+","+type+","+comment;
//                 console.log(arr);
//                 $.ajax({
//                     type:"POST",
//                     url:"../back/edit.php",
//                     dataType:"text",
//                     data:arr,
//                     success:function(data){
//                             console.log(data);
//                             //$(raw_show).html(""+show);
//                             //$(raw_url).html(""+url);
//                             //$(raw_appid).html(""+appid);
//                             //$(raw_type).html(""+type);
//                             if(parseInt(data) == 3){
//                                 alert("您的登录已超时！");
//                                 location.href="./login.html";
//                             } else {
//                               $('#dialogBg').fadeOut(300, function () {
//                                   $('#dialog').addClass('bounceOutUp').fadeOut();
//                               });
//                               location.reload();
//                             }
//                     },
//                     error: function(XMLHttpRequest, textStatus, errorThrown) {
//                         alert(XMLHttpRequest.status);
//                         alert(XMLHttpRequest.readyState);
//                         alert(textStatus);
//                     }
//                 });
//
//             }else{
//                 alert("域名输入不正确");
//             }
//         }else{
//             alert("show的值只能为true或者false");
//         }
//
// }
//
// function del(node){
//     var del_id = parseInt($(node).parents("tr").children()[0].innerHTML);
//     var arr =  ""+del_id+",";
//     $.ajax({
//         type:"POST",
//         url:"../back/del.php",
//         dataType:"text",
//         data:arr,
//         success:function(data){
//           if(parseInt(data) == 3){
//               alert("您的登录已超时！");
//               location.href="./login.html";
//           } else {
//             console.log(data);
//             location.reload();
//           }
//         },
//         error: function(XMLHttpRequest, textStatus, errorThrown) {
//             alert(XMLHttpRequest.status);
//             alert(XMLHttpRequest.readyState);
//             alert(textStatus);
//         }
//     });
// }
//
// function addConfig(node){
//     var add_appid = $('#add_appid').val();
//     var add_url = $('#add_url').val();
//     var add_type = $('#add_type').val();
//     var add_show = $('#add_show').val();
//     var add_comment = $('#add_comment').val();
//
//     var express=/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
//     var objExp=new RegExp(express);
//
//     console.log(add_appid);
//     console.log(add_show);
//     console.log(add_type);
//     console.log(add_url);
//
//     if(objExp.test(add_url) == true){
//         var str = ""+add_appid+","+add_type+","+add_url+","+add_show+","+add_comment;
//         $.ajax({
//             type:"POST",
//             url:"../back/save.php",
//             dataType:"text",
//             data:str,
//             success:function(data){
//               if(parseInt(data) == 3){
//                   alert("您的登录已超时！");
//                   location.href="./login.html";
//               } else if (parseInt(data) == 1){
//                 location.reload();
//               }
//             },
//             error: function(XMLHttpRequest, textStatus, errorThrown) {
//                 alert(XMLHttpRequest.status);
//                 alert(XMLHttpRequest.readyState);
//                 alert(textStatus);
//             }
//         });
//     }else{
//         alert("url格式不对");
//     }
//
// }
//
//
//
// $(document).ready(function(){
//     $.ajax({
//         type:"GET",
//         url:"../back/main.php",
//         dataType:"json",
//         data:'hello',
//         success:function(data){
//             if(parseInt(data) == 3){
//                 alert("您的登录已超时！");
//                 location.href="./login.html";
//             }else {
//                 console.log(Object.keys(data).length);
//                 console.log(data);
//                 var length = Object.keys(data).length;
//                 for(var i  = 0;i < length; i++){
//                     $("#cells").append('<tr>'+
//                         '<td style="line-height: 40px;text-align: center">'+data[i][0]+'</td>'+
//                         '<td style="line-height: 40px;text-align: center">'+data[i][1]+'</td>'+
//                         '<td style="line-height: 40px;text-align: center">'+data[i][2]+'</td>'+
//                         '<td style="line-height: 40px;text-align: center">'+data[i][3]+'</td>'+
//                         '<td style="line-height: 40px;text-align: center">'+data[i][4]+'</td>'+
//                         '<td style="line-height: 40px;text-align: center">'+data[i][5]+'</td>'+
//                         '<td style="line-height: 40px;text-align: center">'+data[i][6]+'</td>'+
//                         '<td style="line-height: 40px;text-align: center">'+data[i][7]+'</td>'+
//                         '<td><button style="display: inline-block;margin-right: 20px" class="btn" onclick="edit(this)">编辑</button><button style="display: inline-block" class="btn" onclick="del(this)">删除</button></td>'+
//                         '</tr>')
//                 }
//             }
//         },
//         error: function(XMLHttpRequest, textStatus, errorThrown) {
//             alert(XMLHttpRequest.status);
//             alert(XMLHttpRequest.readyState);
//             alert(textStatus);
//         }
//     })
// });
$(function() {

	// 判断用户登陆是否超时
  $.ajax({
      type:"GET",
      url:"../back/out_of_time.php",
      dataType:"json",
      data:'hello',
      success:function(data){
          if(parseInt(data) == 0){
              alert("您的登录已超时！");
              location.href="./login.html";
          }else {
              // 1.初始化Table
              var oTable = new TableInit();
              oTable.Init();

              // 2.初始化Button的点击事件
              var oButtonInit = new ButtonInit();
              oButtonInit.Init();
          }
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
          alert(XMLHttpRequest.status);
          alert(XMLHttpRequest.readyState);
          alert(textStatus);
      }
  });
});

function search() {
	$('#tb_departments').bootstrapTable('refresh');
}

var TableInit = function() {
	var oTableInit = new Object();
	// 初始化Table
	oTableInit.Init = function() {
		$('#tb_departments').bootstrapTable({
			url : '../back/main.php', // 请求后台的URL（*）
			method : 'post', // 请求方式（*）
			toolbar : '#toolbar', // 工具按钮用哪个容器
			striped : true, // 是否显示行间隔色
			cache : false, // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
			pagination : true, // 是否显示分页（*）
			sortable : false, // 是否启用排序
			sortOrder : "asc", // 排序方式
			queryParams : oTableInit.queryParams,// 传递参数（*）
			sidePagination : "server", // 分页方式：client客户端分页，server服务端分页（*）
			pageNumber : 1, // 初始化加载第一页，默认第一页
			pageSize : 10, // 每页的记录行数（*）
			pageList : [ 10], // 可供选择的每页的行数（*）
			search : false, // 是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
			strictSearch : true,
			showColumns : false, // 是否显示所有的列
			showRefresh : false, // 是否显示刷新按钮
			minimumCountColumns : 2, // 最少允许的列数
			clickToSelect : true, // 是否启用点击选中行
			height : 500, // 行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
			uniqueId : "id", // 每一行的唯一标识，一般为主键列
			showToggle : false, // 是否显示详细视图和列表视图的切换按钮
			cardView : false, // 是否显示详细视图
			detailView : false, // 是否显示父子表
			columns : [ {
				checkbox : true
			}, {
				field : 'id',
				title : 'ID'
			}, {
				field : 'url',
				title : 'URL'
			}, {
				field : 'type',
				title : 'TYPE'
			}, {
				field : 'show_url',
				title : 'SHOW URL'
			}, {
				field : 'appid',
				title : 'APPID'
			}, {
				field : 'comment',
				title : 'COMMENT'
			}, {
				field : 'create',
				title : 'CREATE'
			},{
				field : 'update',
				title : 'UPDATE'
			},]
		});
	};

	// 得到查询的参数
	oTableInit.queryParams = function(params) {
		var temp = { // 这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
			limit : params.limit, // 页面大小
			offset : params.offset, // 页码
		};
		var json = JSON.stringify(temp);
		console.log(json);
		return json;
	};
	return oTableInit;
};

var ButtonInit = function() {
	var oInit = new Object();
	var postdata = {};

	oInit.Init = function() {
		// 初始化页面上面的按钮事件
		// 编辑数据click事件注册
		$("#btn_edit").click(
				function() {
					var arrselections = $("#tb_departments").bootstrapTable(
							'getSelections');
					if (arrselections.length > 1) {
						alert("Can only select one line to edit.");
						return;
					}
					if (arrselections.length <= 0) {
						alert("Please select valid data.");
						return;
					}
					$("#myModalLabel").text("Edit");
					$("#txt_price").val(arrselections[0].price);
					$("#txt_quantity").val(arrselections[0].quantity);

					postdata.ROLE_ID = arrselections[0].ROLE_ID;
					$('#myModal').modal();
				});

		$("#btn_submit").click(
				function() {
					var arrselections = $("#tb_departments").bootstrapTable(
							'getSelections');
					var requestData = {
						"orderBookId" : arrselections[0].id,
						"traderId" : arrselections[0].traderId,
						"price" : $("#txt_price").val(),
						"equitySymbol" : arrselections[0].equitySymbol,
						"isBuy" : arrselections[0].isBuy,
						"quantity" : $("#txt_quantity").val(),
					};
					$.ajax({
						type : "post",
						contentType : "text/html;charset=utf-8",
						url : "/TradesPlatform/tradeModify.spring",
						data : JSON.stringify(requestData),
						dataType : "json",
						success : function(data) {
							if (data.result == true) {
								alert("Update success");
								$('#tb_departments').bootstrapTable('refresh');
							} else {
								alert("Update fail.");
							}
						},
						error : function() {
							toastr.error('Error');
						},
						complete : function() {

						}

					});
				});

		$("#btn_delete").click(
				function() {
					var arrselections = $("#tb_departments")
							.bootstrapTable('getSelections');
					if (arrselections.length > 1) {
						alert("Can only select one line to edit.");
						return;
					}
					if (arrselections.length <= 0) {
						alert("Please select valid data.");
						return;
					}

					var requestData = {
						"orderBookId": arrselections[0].id,
					};

					$.ajax({
						type : "post",
						contentType : "text/html;charset=utf-8",
						url : "/TradesPlatform/tradeCancle.spring",
						data : JSON.stringify(requestData),
						dataType : "json",
						success : function(data) {
							if (data.result == true) {
								alert("Cancle success");
								$('#tb_departments').bootstrapTable('refresh');
							} else {
								alert("Cancle fail.");
							}
						},
						error : function() {
							toastr.error('Error');
						},
						complete : function() {
						}

					});

				});
	};

	return oInit;
};
