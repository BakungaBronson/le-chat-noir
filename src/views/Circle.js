import React from 'react'


export class Circle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            hover: false,
        }
        this.setClicked = this.setClicked.bind(this);
    }   
    setClicked(e) {
        this.setState({
            clicked: true,
        })
    }
    render(){
        const unclickedStyles = {
            backgroundColor: 'yellow',
            border: '1px solid blue',
            borderRadius: '100px',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
        
        const clickedStyles = {
            backgroundColor: 'red',
            border: '1px solid yellow',
            borderRadius: '100px',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }

        return (
            <div style={this.state.clicked? clickedStyles: unclickedStyles} onClick={this.setClicked}>
                {this.props.index === 40? <img src='https://www.lifepng.com/wp-content/uploads/2020/11/Le-Chat-Noir-png-hd.png' width='30px' /> : <h1 />}
            </div>
        )
    }
}