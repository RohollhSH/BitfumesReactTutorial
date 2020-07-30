import React, {useEffect, useState} from "react";


export default function Images () {
  // const [myInterval, setMyInterval] = useState(null);

  useEffect(()=>{
    console.log("Images Comp Mounted");
    const interval = setInterval(()=>{
      console.log("Hello")
    }, 1000);

    //this returns when component unMounts
    return () => {
      // console.log("Images ")
      clearInterval(interval);
    }
  }, []);

  return (
    <img
      src="https://images.unsplash.com/photo-1595845003613-4e0c4e5cc1a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      alt=""/>
  )
}

/*
export default class Images extends Component {

  constructor(props) {
    super(props);
    this.state = {interval: null}
  }

  componentDidMount() {
    console.log("Images Comp Mounted");
    this.setState({
      interval: setInterval(() => { console.log("Hello") }, 1000)
    })
  }

  componentDidUpdate() {
    console.log("App Updated");
  }

  componentWillUnmount() {
    console.log("Images Comp Unmounted");
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <img
        src="https://images.unsplash.com/photo-1595845003613-4e0c4e5cc1a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt=""/>
    );
  }
}*/
