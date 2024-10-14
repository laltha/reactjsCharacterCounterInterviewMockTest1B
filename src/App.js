import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {inputText: '', items: [], letterCount: 0}

  onChangeTextInput = event => {
    this.setState({inputText: event.target.value})
  }

  addTextButton = event => {
    event.preventDefault()
    const {inputText, items} = this.state
    const letterCount = inputText.length
    const newItem = {
      id: uuidv4(),
      text: `${inputText}:${letterCount}`,
    }

    this.setState({
      items: [...items, newItem],
      letterCount: 0,
      inputText: '',
    })
  }

  render() {
    const {items, inputText} = this.state
    return (
      <div className="container">
        <div className="first-container">
          <h1 className="paragraph1">
            Count the characters like a <br />
            Boss...
          </h1>

          <ul>
            {items.length > 0 ? (
              items.map(eachItem => (
                <li key={eachItem.id} className="listItem">
                  <p>{eachItem.text}</p>
                </li>
              ))
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                className="image"
                alt="no user inputs"
              />
            )}
          </ul>
        </div>
        <div className="second-container">
          <h1 className="heading">Character Counter</h1>
          <div>
            <form onSubmit={this.addTextButton}>
              <input
                className="input"
                onChange={this.onChangeTextInput}
                value={inputText}
                type="text"
                placeholder="Enter the Characters here"
              />
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
