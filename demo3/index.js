//this.props,this.props.children
//出错：return的分号没写，( 在return下一行也报错
//jsx语法，js一定要放在 {}里面
//ListHtml的开头字母没有大写，标签直接是listHtml了，组件类完全失效

 var ListHtml = React.createClass({
   render:function(){
     return (
       <div>
         <p>my name is {this.props.name}</p>
         <ul>
           {
             React.Children.map(this.props.children, function (child) {
               return <li>{child}</li>;
             })
           }
         </ul>
       </div>
     );
   }
 });

 ReactDOM.render(
   <ListHtml name='guojc'>
     <span>item1</span>
     <span>item2</span>
     <span>item3</span>
   </ListHtml>,
   document.getElementById('jc')
 );
