import React, {Component} from 'react'
import axios from 'axios'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input1:'',
            input2:'',
            input3:''
        }

        this.handleInput1=this.handleInput1.bind(this)
        this.handleInput2=this.handleInput2.bind(this)
        this.handleInput3=this.handleInput3.bind(this)
        this.handleCancelButton=this.handleCancelButton.bind(this)
        this.addProduct=this.addProduct.bind(this)
        
    }

    
    handleInput1(val) {
        this.setState({
            input1: val
        })
    }

    handleInput2(val) {
        this.setState({
            input2: val
        })
    }

    handleInput3(val) {
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

    addProduct() {
        const {getProductList} = this.props
        const { input1, input2, input3 } = this.state
        axios.post('api/inventory', {name: input1, price: input2, image: input3}).then(() =>{
            getProductList()
            this.setState({
                input1: '',
                input2: '',
                input3: ''
            })
        })
            
        
    }
   


    render(){
       
       
        return (
            <div>
                <input type="text" onChange={e => this.handleInput1(e.target.value)}/>
                <input type="text" onChange={e => this.handleInput2(e.target.value)}/>
                <input type="text" onChange={e => this.handleInput3(e.target.value)}/>
                <button onClick={() => this.handleCancelButton()}>Cancel</button>
                <button onClick={() => this.addProduct()}>Add to Inventory</button>
            </div>
            
            )
        }
}

export default Form