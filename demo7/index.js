//组件的生命周期
var MyMount = React.createClass({
    getInitialState: function(){
        return {
            width:20,
            backbg:'green'
        };
    },
    componentWillMount: function(){
        this.setState({
            backbg:'red'
        });
        // alert('componentWillMount');
    },
    componentDidMount: function(){
        var timer1 = setInterval(function(){
            var width = this.state.width;
            width += 10;
            if(width >= 120){
                width = 10;
            }

            this.setState({
                width: width,
                backbg:'green'
            });
        }.bind(this),200);
    },
    render:function(){
        return (
            <div style={{height:'40px',width:this.state.width+'px',background:this.state.backbg}}></div>
        );
    }
});

ReactDOM.render(
    <MyMount/>,
    document.getElementById('jc')
);