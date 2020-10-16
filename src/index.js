import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';


class Components extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      data: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  submitFunction = (event) => {
    event.preventDefault();
    let data = {}
    this.state.items.forEach(element => {
      data[element.id] = document.getElementById(element.id).value;
    });

    fetch("http://localhost:3001/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            data: result.data
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <form onSubmit={this.submitFunction} className="shadow_border">
            {items.map((item, index) => (
              <div key={index}>
                <label htmlFor={item.id}>{item.fieldName}</label>
                <input type="text" id={item.id} required />
              </div>
            ))}
            <input type="submit" />
          </form>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Enquiery</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.enquiery}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

ReactDOM.render(<Components />, document.getElementById('root'));