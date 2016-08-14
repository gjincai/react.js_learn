//ref获取真实的dom
//this.refs.[refName] 属性获取的是真实 DOM
 var MyForm = React.createClass({
   focusClick: function(){
     //this.refs.focusInput.focus();
     //this.refs.focusInput.value = '点击后生成的值';
     //React.findDOMNode(this.refs.focusInput).focus(); //is not a function...
       ReactDOM.findDOMNode(this.refs.focusInput).focus();
       ReactDOM.findDOMNode(this.refs.focusInput).value = '点击后生成的值';
   },
   render: function(){
     return (
       <div>
         <input type='text' ref='focusInput'/>
         <a onClick={this.focusClick}>点击focus</a>
       </div>
     );
   }
 });

 ReactDOM.render(
   <MyForm />,
   document.getElementById('jc')
 );