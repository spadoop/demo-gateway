/**
 *	####################################
 *		javascript 全局变量/函数存放点
 *	####################################
 */
var IS_LOGIN = false;
var ACTIVE_MENU;

$(document).ready(function(){
    $('#header').append(
        '<div class="container-fluid">' +
            '<div class="navbar-header">' +
            '<a class="navbar-brand" href="#">' +
                '教务微服务DEMO' +
            '</a>' +
            '</div>' +
            '<div class="collapse navbar-collapse pull-right" id="bs-example-navbar-collapse-1">' +
                '<ul class="nav navbar-nav">' +
                // '<li class="active"><a href="#"></a></li>' +
                // '<li><a href="#">Link</a></li>' +

                '<li id="publicResource" class="dropdown top-menu">' +
                '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' +
                    '公共资源管理 <span class="caret"></span></a>' +
                '<ul class="dropdown-menu">' +
//                    '<li><a href="#">单位信息</a></li>' +
                    '<li><a href="/courseunit.html">开课单位信息</a></li>' +
                '</ul>' +
                '</li>' +
                
                '<li class="dropdown active top-menu">' +
                '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' +
                    '课程资源管理 <span class="caret"></span></a>' +
                '<ul class="dropdown-menu">' +
//                    '<li><a href="#">学时设置</a></li>' +
//                    '<li><a href="#">课程类别设置</a></li>' +
                    '<li><a href="/index.html">课程基本信息</a></li>' +
//                    '<li><a href="#">先修课程信息</a></li>' +
//                    '<li role="separator" class="divider"></li>' +
//                    '<li><a href="#">查询统计</a></li>' +
                '</ul>' +
                '</li>' +

                '<li class="dropdown">' +
                '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' +
                    '<span id="loginUserName">Admin</span> <span class="caret"></span></a>' +
                '<ul class="dropdown-menu">' +
                    // '<li><a href="#">Action</a></li>' +
                    // '<li><a href="#">Another action</a></li>' +
                    // '<li><a href="#">Something else here</a></li>' +
                    // '<li role="separator" class="divider"></li>' +
                    // '<li><a href="#">Separated link</a></li>' +
                    // '<li role="separator" class="divider"></li>' +
                    '<li><a href="#" onclick="logout();"><span class="glyphicon glyphicon-log-out"></span> 退出系统</a></li>' +
                '</ul>' +
                '</li>' +
            '</ul>' +
            '</div>' +
        '</div>' 
    );
    
    
    if(ACTIVE_MENU){
    	$('.top-menu').removeClass('active');
		$('#'+ACTIVE_MENU).addClass('active');
    }
    
    //用户信息
	 $.ajax({
	 	url:'/passport/getuser',
	 	async: false,
	 	success:function(result){
	 		if(result.code==200){
	 			$('#loginUserName').html(result.data.displayname);
	 			IS_LOGIN = true;
	 		}
	 	},
	 	error:function(XMLHttpRequest, textStatus, errorThrown){
	 		if(XMLHttpRequest.status == 400){
	 			$('#loginUserName').html('未登录');
	 			$('.btn-group .dropdown-menu').hide();
	 		}
	 	}
	 });
});

function logout(){
	 $.ajax({
	 	url:'/passport/logout',
	 	success:function(result){
	 		window.location.href = '/login.html';
	 	}
	 });
};