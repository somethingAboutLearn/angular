# angular
  ## 基于 angular 框架的笔记本 demo
    * url： https://university-notes.github.io/angular/angular/md.html
    * ng指令
      * ng-app 定义 angular 的使用范围
      * ng-controller 定义 controller （控制器）的作用域
      * ng-model 绑定数据
      * ng-repeat 重复循环
      * ng-blur 失去焦点事件
      *$scope 用来挂载数据和方法
    * localStorage 本地存储，需要手动清除
    * JSON.parse() 将一个 JSON 字符串转换为对象
      '
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
      '
    * JSON.stringify() 将 javascript 值转换为 JSON 字符串
  ## 基于 angular 框架的表单 demo
    * url： https://university-notes.github.io/angular/angular/buycar.html
