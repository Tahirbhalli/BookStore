// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import books from '../reducers/index';
import App from '../components/App';


  const store = createStore(books, []);

  ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>,
        document.body.appendChild(document.createElement('div')),
  )

