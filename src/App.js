import React, { Fragment, Component } from 'react';
import './App.css';
import Container from './components/containers/container';
import AppBar from './components/topBar/appBar';
import 'antd/dist/antd.css';
import SideBar from './components/sideBar/SideBar';
const InitialmarginSize = 80
const ExpandmarginSize = 250
class App extends Component {
  state = {
    open: true,
    marginSize: InitialmarginSize,
    buttonClicked: false
  }
  handleExpanedButton = () => {
    this.setState({
      open: !this.state.open,
      buttonClicked: !this.state.buttonClicked
    })
    if (this.state.marginSize === InitialmarginSize) {
      this.setState({
        marginSize: ExpandmarginSize
      })
    } else {
      this.setState({
        marginSize: InitialmarginSize
      })
    }
  }
  handleExpaned = () => {
    if (!this.state.buttonClicked) {
      this.setState({
        open: !this.state.open
      })
      if (this.state.marginSize === InitialmarginSize) {
        this.setState({
          marginSize: ExpandmarginSize
        })
      } else {
        this.setState({
          marginSize: InitialmarginSize
        })
      }
    }
  }
  render() {
    return (
      <Fragment>
        <AppBar position='static' backgroundColor='fff' iconFontColor='0f96ab' marginSize={this.state.marginSize} appBarExpandIcon={this.handleExpanedButton} />
        <SideBar collapsed={this.state.open} onMouseEnterSideBar={this.handleExpaned} />
        <Container textAlign="right" />
      </Fragment>
    );
  }
}
export default App;
