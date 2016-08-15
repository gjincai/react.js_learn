//6、this.state状态机
 var MyState = React.createClass({
   getInitialState:function(){
     return {colors: 'green'};
   },
   colorClick: function(){
     this.setState({colors: !this.state.colors});
   },
   render: function(){
     var color = this.state.colors ? 'green' : 'red';
     return(
       <div>
         <a onClick={this.colorClick} href='javascript:;'>点击切换背景颜色</a>
         <div style={{backgroundColor:color}}>div的背景颜色</div>
       </div>
     );
   }
 });

 ReactDOM.render(
   <MyState/>,
   document.getElementById('jc')
 );