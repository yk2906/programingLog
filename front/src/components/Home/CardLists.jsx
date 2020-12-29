import React, {useContext} from 'react';
import CardList from './CardList';
import '../../assets/styles/style.css';
import {BrowserRouter as Router, Switch, Route, Link, withRouter
} from 'react-router-dom';


const CardLists = (props) => {

    return(
      <div className="card-lists">
        <Switch>
          <Route path="/home">
            {/* <CardList /> */}
            {props.content.map((value, index) => (
              <CardList
              language={value.language}
              hour={value.hour}
              minute={value.minute}
              date={value.date}
              task={value.task}
              key={index.toString()} />
            ))}
          </Route>
        </Switch>
      </div>
    )
}

export default withRouter(CardLists);