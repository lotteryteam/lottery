
function login(){
    var username = $('#u').val();
    var pass = $('#pass').val();

    // if (username == "" || pass == "") {
    //     alert("账号和密码不能为空！");
    //     return;
    // }

    // $.ajax({
    //   type: 'GET',
    //   url: "../back/login.php",
    //   data: {username: username, pass: pass},
    //   dataType: 'text',
    //   success:function(data){
    //       alert(data);
    //       console.log("++++++++++"+data);
    //       // location.href="http://202.61.86.219/lottery/front/index.html";
    //   },
    //   error: function(XMLHttpRequest, textStatus, errorThrown) {
    //       alert(XMLHttpRequest.status);
    //       alert(XMLHttpRequest.readyState);
    //       alert(textStatus);
    //   }
    // })

    if(username == "admin" && pass=="123456"){
        $.ajax({
            type:"GET",
            url:"../back/session.php",
            dataType:"text",
            data:1,
            success:function(data){
                console.log("++++++++++"+data);
                location.href="http://202.61.86.219/Test/lottery/front/index.html";
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
            }
        });
    }else {
        alert("账号密码错误，请联系系统工作人员！");
    }
}
