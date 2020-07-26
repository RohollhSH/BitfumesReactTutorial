import React from "react";

/*class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = { title:"Hello React" };
    }

    render() {
        return(
            <div>{ this.state.title }</div>
        )
    }
}*/

function App({title}) {
    return (
        <div>
            <div style=
                     {{
                         padding:'10rem',
                         border: "1px solid green",
                         backgroundColor:'gray'
                     }}>
                {title}
            </div>
        </div>
    );
}

export default App;