import { Component } from "react";
import CardList from "./components/card-list/card-list.components";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFiled: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            {
              return { monsters: users };
            }
          },
          () => {}
        )
      );
  }

  onSearchChange = (event) => {
    {
      const searchFiled = event.target.value.toLocaleLowerCase();

      this.setState(() => {
        return { searchFiled };
      });
    }
  };

  render() {
    const { monsters, searchFiled } = this.state;
    const { onSearchChange } = this;
    const filteredMonstes = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchFiled);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
        className = "search-box"
          onChangeHandler={onSearchChange}
          placeholder="search for monsters"
        />
        <CardList monsters={filteredMonstes} />
      </div>
    );
  }
}

export default App;
