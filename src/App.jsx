var contentNode = 

class Reader extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div>
      The Reader component goes here.
    </div>);
  }
}

class BookShelf extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div>
      The BookShelf component goes here.
    </div>);
  }
}

class Login extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div>
      The Login component goes here.
    </div>);
  }
}

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Login />
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<App/>, document.getElementById("contents"));
