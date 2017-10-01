import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import {
    BrowserRouter,
    Route,
    Switch
  } from 'react-router-dom'
import App from './app'
import Operations from './component/operations'
import Edit from './component/edit'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

fetch('https://livedemo.xsolla.com/fe/test-task/baev/users?offset=0&limit=6')
.then(response => response.json())
.then(responseJson => { 
    console.log(store)
    store.dispatch({ type: 'ADD_USERS', payload: responseJson.data })
})
.catch((e) => {
    console.error(e)
    alert("Ошибка загрузки!")
})

fetch('/model/operations.json')
.then(response => response.json())
.then(responseJson => { 
    store.dispatch({ type: 'ADD_OPERATIONS', payload: responseJson.operationsUsers })
})
.catch((e) => {
    console.error(e)
    alert("Ошибка загрузки!")
})

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path='/edit' component={Edit}/>
                <Route path='/operations/:id' component={Operations}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)