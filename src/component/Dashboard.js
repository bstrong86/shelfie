import React, {Component} from 'react'
import axios from 'axios'
import Product from './Product'

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input1: '',
            input2: '',
            input3: ''
        }
    }
    

    handleInput1(val) {
        this.setState({
            input1: val
        })
    }

    handleInput1(val) {
        this.setState({
            input2: val
        })
    }

    handleInput1(val) {
        this.setState({
            input3: val
        })
    }

    handleCancelButton() {
        this.setState({
            input1: '',
            input2: '',
            input3: ''
        })
    }



    render(){
        const {id, name, price, image_url} = props.
       const mappedInventoryList = this.props.inventoryList.map((product) => {
            return(
                <Product 
                    key={id}
                    name={name}
                    price={price}
                    image={image_url}
                />

            )

       })
       
        return (
            <div>
                <input 
                    type="text" 
                    value={this.state.input1}
                    onChange={e => this.handleInput1(e.target.value)}
                />
                
                <input 
                    type="text" 
                    value={this.state.input2}
                    onChange={e => this.handleInput2(e.target.value)}
                />

                <input 
                    type="text" 
                    value={this.state.input3}
                    onChange={e => this.handleInput3(e.target.value)}
                />
                <button>Create</button>
                <button onClick={e => this.handleCancelButton()}>Cancel</button>
                {mappedInventoryList}
            </div>
            
            )
        }
}

export default Dashboard