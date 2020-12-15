import React from 'react';
import CardList from './CardList';
import '../../assets/styles/style.css';
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch
} from 'react-router-dom';


const CardLists = () => {
    return(
      <div className="card-lists">
        <Switch>
          <Route path="/home">
            <CardList >
              {}
            </CardList>
          </Route>
        </Switch>
      </div>
    )
}

export default CardLists;