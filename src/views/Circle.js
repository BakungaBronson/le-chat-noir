import React from 'react';


export class Circle extends React.Component {
    constructor(props) {
        super(props);
        this.setClicked = this.setClicked.bind(this);
    }   
    setClicked(e) {
        this.props.getPosition(this.props.index);
        console.log("Clicked");
    }
    render(){
        // Styles for circles
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
        // console.log("Index: ", this.props.index, " Clicked: ", this.props.clicked);
        // console.log(this.props.cat_position !== this.props.index? this.props.clicked? `${this.props.index}, Nope.`: `${this.props.index}: Clicker activated.`: `${this.props.index}, Nope.`)
        return (
            <div style={this.props.clicked? clickedStyles: unclickedStyles} onClick={(this.props.cat_position !== this.props.index)? this.props.clicked? void(0): this.setClicked: void(0)}>
                {this.props.index === this.props.cat_position? <img src='https://www.lifepng.com/wp-content/uploads/2020/11/Le-Chat-Noir-png-hd.png' width='30px' /> : <h1 />}
            </div>
        )
    }
}