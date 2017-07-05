'use strict';
angular.module('myapp',[])
	.controller('md',function($scope){
		$scope.data=localStorage.message?JSON.parse(localStorage.message):[];   //将临时文本保存在本地
		//添加新笔记
		var $i=0;
		$scope.add=function(){
			$i++;
			var newnote={};
			newnote.id=$i;
			newnote.name="新笔记";
			newnote.con="在此输入内容...";
			$scope.data.push(newnote);
			localStorage.message=angular.toJson($scope.data);
		}
		//删除
		$scope.del=function($index){
			for(var $i=0;$i<$scope.data.length;$i++){
				if($index==$i){
					$scope.data.splice($i,1);
					localStorage.removeItem($i);
				}
			}
		}
		//title
		for(var $i=0;$i<$scope.data.length;$i++){
			$scope.name=$scope.data[$i].name;
		}
	})
