// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('jc')
// );

var Hello = React.createClass({
  render:function(){
    // return <span style={{color:'red'}}>hello {this.props.name}</span>;
    // return <span className='red'>hello {this.props.name}</span>;
    var styleSpan = {
      color: 'yellow',
      fontSize: '30px',
      fontWeight: 'bold'
    }
    return <span style={styleSpan}>hello {this.props.name}</span>;
  }
});

ReactDOM.render(<Hello name='react'/>,document.getElementById('jc'));