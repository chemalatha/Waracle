import React from "react"
import { Switch, Route,BrowserRouter } from 'react-router-dom'
import Header from "./Header"
import Body from "./Body"
import CakesList from "../screens/cakesList"
import CakeDetails from "../screens/cakeDetails"
import AddCake from "../screens/addCake"

function App() {
    return (
        <BrowserRouter>
        <main>
            <Header />
            <Body />
            <Switch>
                <Route path="/" component={CakesList} exact />
                <Route path="/cake/:id" component={CakeDetails} />
                <Route path="/addCake" component={AddCake} />
            </Switch>
        </main>
        </BrowserRouter>

    )
}

export default App;