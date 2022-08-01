/** @format */
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";
import ProblemList from "./pages/ProblemList";
import CreateQuestion from "./pages/CreateQuestion";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Grid } from "@mui/material"; //contain

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Grid container spacing = {2} justifyContent="center" direction="column">
          <Grid item xs={12} sm = {12}>
            <Navbar></Navbar>
          </Grid>
        
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/homepage" element={<Homepage></Homepage>}></Route>
          <Route
            path="/problemlist"
            element={<ProblemList></ProblemList>}
          ></Route>
          <Route
            path="/createquestion"
            element={<CreateQuestion></CreateQuestion>}
          ></Route>
        </Routes>
        
        </Grid>
      </Provider>
    </div>
  );
}

export default App;
