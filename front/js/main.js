var url = "";
var show = "222222";
var raw_url = "33333";
var raw_show = "33333";
var raw_appid = "33333";
var raw_type = "33333";
var id = 0;
var appid="";
var type="";
var comment="";

var w, h, className;
function getSrceenWH() {
    w = $(window).width();
    h = $(window).height();
    $('#dialogBg').width(w).height(h);
}

window.onresize = function () {
    getSrceenWH();
};

$(window).resize();

$(function () {
    getSrceenWH();

    $('.claseDialogBtn').click(function () {
        $('#dialogBg').fadeOut(300, function () {
            $('#dialog').addClass('bounceOutUp').fadeOut();
        });
    });

});

function edit(node){
    className = $(node).attr('class');
    raw_url = $(node).parents("tr").children()[1];
    raw_show = $(node).parents("tr").children()[3];
    raw_appid = $(node).parents("tr").children()[4];
    raw_type = $(node).parents("tr").children()[2];

    id = parseInt($(node).parents("tr").children()[0].innerHTML);

    var raw_appid_value = $(node).parents("tr").children()[4].innerHTML;
    var raw_type_value = $(node).parents("tr").children()[2].innerHTML;
    var raw_show_value = $(node).parents("tr").children()[3].innerHTML;
    var raw_url_value = $(node).parents("tr").children()[1].innerHTML;
    var raw_comment_value = $(node).parents("tr").children()[5].innerHTML;


    $('#appid_input').val(""+raw_appid_value);
    $('#url_input').val(""+raw_url_value);
    $('#comment_input').val(""+raw_comment_value);

    if(raw_type_value == "ios" || raw_type_value == "iOS"){
        $('#type_input option:eq(0)').attr('selected','selected');
    }else{
        $('#type_input option:eq(1)').attr('selected','selected');
    }

    if(parseInt(raw_show_value) == 1){
        $('#show_input option:eq(0)').attr('selected','selected');
    }
    if(parseInt(raw_show_value) == 0){
        $('#show_input option:eq(1)').attr('selected','selected');
    }

    $('#dialogBg').fadeIn(300);
    $('#dialog').removeAttr('class').addClass('animated ' + className + '').fadeIn();
}

function save_edit(node){

    show = parseInt($('#show_input').val());
    url = String($('#url_input').val());
    appid = String($('#appid_input').val());
    type = String($('#type_input').val());
    comment = String($('#comment_input').val());

        if(1){
            var express=/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
            var objExp=new RegExp(express);
            if(objExp.test(url) == true){
                var arr =  ""+id+","+url+","+show+","+appid+","+type+","+comment;
                console.log(arr);
                $.ajax({
                    type:"POST",
                    url:"../back/edit.php",
                    dataType:"text",
                    data:arr,
                    success:function(data){
                            console.log(data);
                            //$(raw_show).html(""+show);
                            //$(raw_url).html(""+url);
                            //$(raw_appid).html(""+appid);
                            //$(raw_type).html(""+type);
                            if(parseInt(data) == 3){
                                alert("您的登录已超时！");
                                location.href="http://202.61.86.219/Test/lottery/front/login.html";
                            } else {
                              $('#dialogBg').fadeOut(300, function () {
                                  $('#dialog').addClass('bounceOutUp').fadeOut();
                              });
                              location.reload();
                            }
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        alert(XMLHttpRequest.status);
                        alert(XMLHttpRequest.readyState);
                        alert(textStatus);
                    }
                });

            }else{
                alert("域名输入不正确");
            }
        }else{
            alert("show的值只能为true或者false");
        }

}

function del(node){
    var del_id = parseInt($(node).parents("tr").children()[0].innerHTML);
    var arr =  ""+del_id+",";
    $.ajax({
        type:"POST",
        url:"../back/del.php",
        dataType:"text",
        data:arr,
        success:function(data){
          if(parseInt(data) == 3){
              alert("您的登录已超时！");
              location.href="http://202.61.86.219/Test/lottery/front/login.html";
          } else {
            console.log(data);
            location.reload();
          }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    });
}

function addConfig(node){
    var add_appid = $('#add_appid').val();
    var add_url = $('#add_url').val();
    var add_type = $('#add_type').val();
    var add_show = $('#add_show').val();
    var add_comment = $('#add_comment').val();

    var express=/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
    var objExp=new RegExp(express);

    console.log(add_appid);
    console.log(add_show);
    console.log(add_type);
    console.log(add_url);

    if(objExp.test(add_url) == true){
        var str = ""+add_appid+","+add_type+","+add_url+","+add_show+","+add_comment;
        $.ajax({
            type:"POST",
            url:"../back/save.php",
            dataType:"text",
            data:str,
            success:function(data){
              if(parseInt(data) == 3){
                  alert("您的登录已超时！");
                  location.href="http://202.61.86.219/Test/lottery/front/login.html";
              } else if (parseInt(data) == 1){
                location.reload();
              }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
            }
        });
    }else{
        alert("url格式不对");
    }

}



$(document).ready(function(){
    $.ajax({
        type:"GET",
        url:"../back/main.php",
        dataType:"json",
        data:'hello',
        success:function(data){
            if(parseInt(data) == 3){
                alert("您的登录已超时！");
                location.href="./front/login.html";
            }else {
                console.log(Object.keys(data).length);
                console.log(data);
                var length = Object.keys(data).length;
                for(var i  = 0;i < length; i++){
                    $("#cells").append('<tr>'+
                        '<td style="line-height: 40px;text-align: center">'+data[i][0]+'</td>'+
                        '<td style="line-height: 40px;text-align: center">'+data[i][1]+'</td>'+
                        '<td style="line-height: 40px;text-align: center">'+data[i][2]+'</td>'+
                        '<td style="line-height: 40px;text-align: center">'+data[i][3]+'</td>'+
                        '<td style="line-height: 40px;text-align: center">'+data[i][4]+'</td>'+
                        '<td style="line-height: 40px;text-align: center">'+data[i][5]+'</td>'+
                        '<td style="line-height: 40px;text-align: center">'+data[i][6]+'</td>'+
                        '<td style="line-height: 40px;text-align: center">'+data[i][7]+'</td>'+
                        '<td><button style="display: inline-block;margin-right: 20px" class="btn" onclick="edit(this)">编辑</button><button style="display: inline-block" class="btn" onclick="del(this)">删除</button></td>'+
                        '</tr>')
                }
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    })
});
