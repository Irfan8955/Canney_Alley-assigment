import { BrowserRouter, Route, Routes } from "react-router-dom";
import Leftpane from "./components/Leftpane";
import Home from "./components/Home";
import Explor from "./components/Explor";
import Notification from "./components/Notification";
import Message from "./components/Message";
import Bookmarks from "./components/Bookmarks";
import Lists from "./components/Lists";
import "./App.css";
import Profile from "./components/Profile";
import RightPane from "./components/RightPane";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Leftpane>
            <Routes>
              <Route Path="/" element={<Home />} />
              <Route path="explore/" element={<Explor />} />
              <Route path="/notifications" element={<Notification />} />
              <Route path="/messages/" element={<Message />} />
              <Route path="/lists" element={<Lists />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
            </Routes>
          </Leftpane>
          <RightPane/>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
