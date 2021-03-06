import * as React from 'react'
import { connect } from 'react-redux'
import RegisterWhere from './RegisterWhere'
import RegisterWhereLoading from './RegisterWhereLoading'
import { setLocation } from '../actions/user'
import { pushDbResults } from '../actions/db'
import { db } from '../lib/db_init'

class RegisterWhereContainer extends React.PureComponent {
  handleInputChange = (event) => {
    this.props.setLocation(event.target.value)
  }

  componentDidMount() {
    const people = (pushDbResultsAction) => {
      db.collection("people")
        .get()
        .then(querySnapshot => {
          const results = querySnapshot.docs.map(function (doc) {
            return doc.data()
          });
          pushDbResultsAction(results)
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        })
    }
    if (this.props.db.dbResults.length === 0) {
      people(this.props.pushDbResults)
    }
  }

  componentDidUpdate() {

  }

  allLocations = (peopleArr) => peopleArr.map(memb => {
    return memb.location
  })

  buttonContained = (city) => {
    if (this.props.user.location.toLowerCase() === city.toLowerCase()) {
      return 'contained'
    } else {
      return 'outlined'
    }
  }

  render() {
    if (this.props.db.dbResults.length === 0) return <RegisterWhereLoading userObj={this.props.user}/>
    return (
      <RegisterWhere
        cities={Array.from(new Set(this.allLocations(this.props.db.dbResults))).filter(city => {
          if(this.props.user.location.length > 0){
            return city.toLowerCase().includes(this.props.user.location.toLowerCase())
          } else {
            return true
          }
        })}
        setLocationFn={this.props.setLocation}
        buttonContainedFn={this.buttonContained}
        userObj={this.props.user}
        inputChangeFn={this.handleInputChange}
        inputValue={this.props.user.location}
        userProfile={this.props.userProfile}
      />
    )
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    db: state.db
  }
}

export default connect(mapStateToProps, { setLocation, pushDbResults })(RegisterWhereContainer)