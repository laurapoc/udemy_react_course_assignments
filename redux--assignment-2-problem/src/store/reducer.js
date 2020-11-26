import * as actionTypes from "./actions";

const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  const names = ["Max", "Laura", "Jane", "John", "Juliet", "Armin", "Georgiana"];
  const newPerson = {
    id: Math.random(), // not really unique but good enough here!
    name: names[Math.floor(Math.random() * names.length)],
    age: Math.floor(Math.random() * 40),
    num: state.persons.length + 1,
  };
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        persons: state.persons.concat(newPerson),
      };

    case actionTypes.DELETE:
      const updatedPersonsList = state.persons.filter((person) => person.id !== action.personToDeleteId);
      return {
        ...state,
        persons: updatedPersonsList,
      };
  }

  return state;
};

export default reducer;
