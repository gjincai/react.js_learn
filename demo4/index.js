//getDefaultProps 设置组件属性的默认值；优先级：自定义 > 默认的，无自定义的则取默认的
 var Title = React.createClass({
   getDefaultProps: function(){
     return{
       title: 'default title!',
       id: 'default-title'
     };
   },
   render: function(){
     return <h1 id={this.props.id}>{this.props.title}</h1>;
   }
 });

 ReactDOM.render(
   <Title id='new-title' title='new title!' />,
   document.getElementById('jc')
 );

 //document.getElementById('default-title').style.color='red';
 document.getElementById('new-title').style.color='green';

