import React, {Component} from "react";
import Header from "./common/header";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./store";
import Detail from "./pages/detail";
import Home from "./pages/home";
import Login from "./pages/login";
import Write from "./pages/write";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/login" exact element={<Login />}></Route>
            <Route path="/write" exact element={<Write />}></Route>
            <Route path="/detail/:id" exact element={<Detail />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
