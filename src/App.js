import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Dashboard from './component/Dashboard';
import Form from './component/Form'
import Header from './component/Header'
import Product from './component/Product';

class App extends Component {
  constructor(){
    super()

    this.state= {
      inventoryList: []
    }
    
  }

  componentDidMount() {
    axios.get('/api/inventory').then(res => {

      
      // console.log(res.data)
      this.setState({
        inventoryList: res.data
      })
    })
  }
  

  // getProductList(){
  //   axios.get('/api/inventory').then(res => {
  //     console.log(res.data)
  //     this.setState({
  //       inventoryList: res.data
  //     })
  //   })

  // }


  render() {
console.log(this.state.inventoryList)

    return (
      <div className="App">
      
          <Dashboard 
            inventoryList={this.state.inventoryList}
          
          />
          <Form 
            getProductList={this.componentDidMount}  
          />
          <Header />
          <Product />
      </div>
    );
  }
}

export default App;
