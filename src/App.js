import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import AppSettings from "./components/AppSettings/AppSettings";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";

const App = (props) => {
  let posts = props.state.profilePage.posts;
  let dialogs = props.state.dialogPage.dialogs;
  let messages = props.state.dialogPage.messages;

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            render={() => <Dialogs dialogs={dialogs} messages={messages} />}
            path="/dialogs"
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/setting" component={AppSettings} />
          <Route render={() => <Profile posts={posts} />} path="/profile" />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
