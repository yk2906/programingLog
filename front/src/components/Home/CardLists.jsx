import React, {useContext} from 'react';
import CardList from './CardList';
import '../../assets/styles/style.css';
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch
} from 'react-router-dom';


const CardLists = (props) => {

    return(
      <div className="card-lists">
        <Switch>
          <Route path="/home">
            <CardList />
            {/* {content.map((value, index) => {
              return <CardList
              language={value.language}
              hour={value.hour}
              minute={value.minute}
              date={value.date}
              task={value.task}
              key={index.toString()} />
            })} */}
          </Route>
        </Switch>
      </div>
    )
}

export default CardLists;