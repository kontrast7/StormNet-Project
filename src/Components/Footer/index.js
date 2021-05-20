import React from 'react';
import Item1 from '../Item1';
import Item2 from '../Item2';

import './style.css'

class Footer extends React.Component {
    state = {
        style: '',
    };

    handleClickTitle = (style) => {
    this.setState({
    style
});

    }
render(){
    return(
        <footer>
            <nav>
                <div className="fot1">{this.state.style}</div>
                <Item1 style='' onChange={this.handleClickTitle}/>
                <Item2 style='' onChange={this.handleClickTitle}/>
            </nav>
        </footer>
    )
}

}

export default Footer;