import React from 'react';
import Home from '../components/Home';
import Detail from '../components/Detail';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Pages = () => {
    
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/product" component={Detail} />
        </Switch>
       
    )
}

export default Pages
