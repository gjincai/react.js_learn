//数组变量 自动遍历输出；组件类，组件类实例
//React.createClass 方法生成一个组件类ArrHtml；模板插入<ArrHtml/>时，会自动生成 ArrHtml 的一个实例

 var ArrHtml = React.createClass({
   render:function(){
     var arrHtml = [
       <h1>Hello haha!h1</h1>,
       <h2>Hello haha!h2</h2>,
       <h3>Hello haha!h3</h3>
     ];
     return <div>{arrHtml}</div>;    //注意外层要单一的节点，用div包裹一下
   }
 });

 ReactDOM.render(<ArrHtml/>,document.getElementById('jc'));








