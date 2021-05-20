import React from 'react';


class Item1 extends React.Component {
    handleClick = () => {
        this.props.onChange('color = red');
    };

    render(){
        return (
        <div> { this.props.title} 
        <button onClick={this.handleClick}>Click</button>
        </div>
        );
    };
};
export default Item1;