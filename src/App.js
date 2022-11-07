// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {CardList} from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';
class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField:''
    };
  }

//This fetches the data 
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json() )
  .then(users => this.setState({ monsters:users},() => console.log(this.state)))
}

//giving monsters to the CardList component
  render(){
    
    const { monsters,searchField } = this.state;
    // it equals to 
    //const mons = this.state.monsters
    //const search = this .state.searchField
    //it is an easy way of representation

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
     

    return(
      <div className="App">
       <h1> Monsters Rolodex </h1>
        <SearchBox 
           placeholder="search-monsters"
           handleChange = {e => this.setState({ searchField:e.target.value})}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;