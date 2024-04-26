// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import Content from './Content';
import FeedbackForm from './FeedbackForm';
import FeedbackList from './FeedbackList';
import { ThemeProvider } from './ThemeContext';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Menu />
            <Switch>
              <Route path="/lab/:id" component={Content} />
              <Route path="/feedback" component={FeedbackForm} />
              <Route path="/feedback-list" component={FeedbackList} /> {/* Добавлено */}
              <Route path="/" component={Home} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

const Home = () => {
  return (
    <div>
      <h2>Домашняя страница</h2>
      <p>Добро пожаловать!</p>
    </div>
  );
}

export default App;