import React, { Fragment, Component } from 'react';
import AppBar from './components/topBar/appBar';
import 'antd/dist/antd.css';
import SideBar from './components/sideBar/SideBar';

class App extends Component {
  state={
    open:false
  }
  handleExpaned=()=>{

  }
  render(){
  return (
    <Fragment>
      <AppBar position='static' backgroundColor='fff' iconFontColor='0f96ab'/>
      <SideBar/>
    </Fragment>
  );
}
}
export default App;
