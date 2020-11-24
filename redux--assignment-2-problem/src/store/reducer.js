const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  const names = ["Max", "Laura", "Jane", "John", "Juliet", "Armin", "Georgiana"];
  const newPerson = {
    id: Math.random(), // not really unique but good enough here!
    name: names[Math.floor(Math.random() * names.length)],
    age: Math.floor(Math.random() * 40),
  };
  switch (action.type) {
    case "ADD":
      console.log("persons");
      return {
        ...state,
        persons: state.persons.concat(newPerson),
      };
    case "DELETE":
      console.log(state.persons[0].id);
    //   console.log(personId);
      // persons: prevState.persons.filter(person => person.id !== personId)
      return {
        ...state,
        persons: state.persons.filter((person) => person.id !== state.persons[0].id),
      };
  }

  return state;
};

export default reducer;
