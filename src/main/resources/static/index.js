var setting = {
    data: {
        simpleData: {
            enable: true
        }
    },
    check:{
        enable: false
    },
    view: {
        selectedMulti: false
    },
    callback:{
        onClick: function(node,treeId,obj){
//            console.log(node,treeId,obj);
        	$('#courseType').html(obj.name);
        	courceTypeId = obj.name;
        	if(courceTypeId=='课程分类'){
        		$('#courseTypeLabel').html("所有课程分类");
        		_query['courceTypeId'] = '';
        	} else {
        		$('#courseTypeLabel').html(courceTypeId);
        		_query['courceTypeId'] = courceTypeId;
        	}
        	doQuery(_query);
        }
    }
};

var zNodes =[
    // { id:1, pId:0, name:"评估中心采集表单类型", open:true},
    { id:11, pId:0, name:"课程分类", open:true, isfolder:true},
    { id:111, pId:11, name:"实践课", isform:true},
    { id:112, pId:11, name:"毕业设计（论文）"},
    { id:113, pId:11, name:"课程设计"},
    { id:114, pId:11, name:"实验课"},
    { id:114, pId:11, name:"军训"},
    { id:114, pId:11, name:"体育课"},
    { id:114, pId:11, name:"普通课"}
];

