import React, { Component } from "react";
import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import * as actionTypes from "../store/actions";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddPerson} />
        {this.props.prsn.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            num={person.num}
            clicked={() => this.props.onDeletePerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    prsn: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPerson: () => dispatch({ type: actionTypes.ADD }),
    onDeletePerson: (id) => dispatch({ type: actionTypes.DELETE, personToDeleteId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
