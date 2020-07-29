import React from "react";
import "./assets/css/style.css";
import Images from "./components/Images";

class App extends React.Component {
  constructor(props) {
    console.log('App Constructor');

    super(props);
    this.state = {title: "Hello React 2", isShowing: false};
  }

  componentDidMount() {
    console.log("App Mounted");
    //first according to Line:9 state is set as "Hello React 2"
    //but because component mounts after constructor so at end state will be set
    //as bottom line :
    this.setState({title: "Hello LifeCycle"})
  }

  // states are Immutable

  handleClick = () =>(this.setState({isShowing : !this.state.isShowing}));

  render() {
    console.log("App Render");
    return (
      <section className="flex justify-center">
        <div className="w-1/2">
          <div className="text-center">
            <div className="my-4">{this.state.title}</div>
            <button
              className="p-1 bg-blue-700 text-white my-2"
              onClick={this.handleClick}
            >
              Toggle Image
            </button>
          </div>

          {
            this.state.isShowing ? (
              <Images />
            ) : null
          }

        </div>
      </section>
    )
  }
}

export default App;