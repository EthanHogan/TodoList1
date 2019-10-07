import React from 'react';

class CreateTodo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text : ''
    }
  }

  change(event) {
    this.setState({
      text : event.target.value
    });
  }
  submit() {
    this.props.submit(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form >
          <input type="text" name="textInput" onChange={this.change.bind(this)} value={this.state.text} ></input>
          <button type="button" name="submit" onClick={this.submit.bind(this)}>Submit</button>
        </form>
      </div>
    )
  }
}

export default CreateTodo;