{
	//state vs props
}
import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component{
	render(){
		return(
				
					<p>New TEST</p>
				
			)
	}
}

class Featured extends React.Component{
	render(){
		console.log(this);
		return(
				<h3>Todays featured products is {this.props.featured}!</h3>
			)
	}
}
class App extends React.Component {
	  constructor(){
	  	super();
	  	this.state = {
	  		inventory:[
			            {
			                name: 'socks',
			                stock: 2
			            },
			            {
			                name: 'shirts',
			                stock: 1
			            },
			            {
			                name: 'shorts',
			                stock: 4
			            }
			        ],
			        featuredProducts: 'shirts'
	  	}
	  	this.buyItem = this.buyItem.bind(this);
	  }

	  buyItem(indexOfItem){
	  	console.log(indexOfItem);

	  	const newInventory = Array.from(this.state.inventory);
	  	newInventory[indexOfItem].stock = newInventory[indexOfItem].stock - 1;
	  	this.setState({
	  		inventory: newInventory
	  	})
	  }
	  render() {
	    return (
	      <div>
	        <h1 className="tester">Hello World!</h1>
	        <h2>hello WORLD!</h2>
	        <Header />
	        <Featured featured={this.state.featuredProducts} />
	        {
	        	this.state.inventory.map((item, index) =>{
	        			return(
	        					<div key={index}>
	        						<h2>{item.name}</h2>
	        						<p>{item.stock}</p>
	        						<button onClick={() => this.buyItem(index)}>Buy</button>
	        					</div>
	        				)
	        	})
	        }
	      </div>
	    )
	  }
}

ReactDOM.render(<App />, document.getElementById('app'));
