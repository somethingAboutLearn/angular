# angular
  * 基于 angular 框架的笔记本 demo
	  * url： https://somethingaboutlearn.github.io/angular/
	  * ng指令
		  *  ng-app 定义 angular 的使用范围
		  *  ng-controller 定义 controller （控制器）的作用域
		  *  ng-model 绑定数据
		  *  ng-repeat 重复循环
		  *  ng-blur 失去焦点事件
	  *  $scope 用来挂载数据和方法
	  *  localStorage 本地存储，需要手动清除
	  *  JSON.stringify() 将 javascript 值转换为 JSON 字符串

			``` javascript
				  var str = {"name":"jialei", "sex":"man"}
					str_pretty1 = JSON.stringify(str)
					document.write( "只有一个参数情况：" );
					document.write( "<br>" );
					document.write("<pre>" + str_pretty1 + "</pre>" );
					document.write( "<br>" );
					str_pretty2 = JSON.stringify(str, null, 4) //使用四个空格缩进
					document.write( "使用参数情况：" );
					document.write( "<br>" );
					document.write("<pre>" + str_pretty2 + "</pre>" ); // pre 用于格式化输出
			```
			输出结果：

			``` html
					只有一个参数情况：
					{"name":"jialei","sex":"man"}
					
					使用参数情况：
					{
						"name": "jialei",
						"sex": "man"
					}
			```

		* JSON.parse() 将一个 JSON 字符串转换为对象
			
			``` javascript
			JSON.parse('{"p": 5}', function(k, v) {
				if (k === '') { return v; } 
				return v * 2;               
			});                          
			JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', function(k, v) {
			  document.write( k );// 输出当前属性，最后一个为 ""
			  document.write("<br>");
			  return v;       // 返回修改的值
			});
			```
			输出结果：
			``` html
			使用可选参数，回调函数

			1
			2
			4
			6
			5
			3
			```

			

	* 基于 angular 框架的表单操作 demo
		* url： https://university-notes.github.io/angular/angular/buycar.html
