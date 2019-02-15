import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import CampusList from './CampusList'
import CampusDetails from './CampusDetails'
import StudentList from './StudentList'
import StudentDetails from './StudentDetails'
import AddCampus from './AddCampus'



const Root = () => {
  return (
    <div>
      <nav>
        Welcome!
        <Link to="/">home</Link>
        <p>/</p>
        <Link to="/campuses">campuses</Link>
        <p>/</p>
        <Link to="/students">students</Link>
      </nav>
      <main>
        <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
        <p>This seems like a nice place to get started with some Routes!</p>
        <div>
          <Switch>
            <Route exact path='/campuses' component={CampusList} />
            <Route path='/campuses/add' component={AddCampus} />
            <Route exact path='/campuses/:id' component={CampusDetails} />
            <Route exact path='/students' component={StudentList} />
            <Route path='/students/:id' component={StudentDetails} />
          </Switch>
        </div>
      </main>
    </div>
  )
}

export default Root
