import { useReducer } from "react";

const initialState = {
  page: 1,
  name: "",
  lastName: "",
  email: "",
  number: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };

    case "SET_LASTNAME":
      return {
        ...state,
        lastName: action.payload,
      };

    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };

    case "SET_NUMBER":
      return {
        ...state,
        number: action.payload,
      };

    case "NEXT":
      return {
        ...state,
        page: state.page + 1,
      };

    case "BACK":
      return {
        ...state,
        page: state.page - 1,
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Multi Step Form</h1>

    
      {state.page === 1 && (
        <div>
          <h2>Page 1</h2>

          <label>Name</label>
          <input
            type="text"
            value={state.name}
            onChange={(e) =>
              dispatch({
                type: "SET_NAME",
                payload: e.target.value,
              })
            }
          />

          <br />

          <label>Last Name</label>
          <input type="text"
            value={state.lastName}
            onChange={(e) =>
              dispatch({
                type: "SET_LASTNAME",
                payload: e.target.value,
              })
            }
          />

          <br />

          <button onClick={() => dispatch({ type: "NEXT" })}>
            Next
          </button>
        </div>
      )}

    
      {state.page === 2 && (
        <div>
          <h2>Page 2</h2>

          <label>Email</label>
          <input type="email"
            value={state.email}
            onChange={(e) =>
              dispatch({
                type: "SET_EMAIL",
                payload: e.target.value,
              })
            }
          />

          <br />

          <label>Number</label>
          <input type="number"
            value={state.number}
            onChange={(e) =>
              dispatch({
                type: "SET_NUMBER",
                payload: e.target.value,
              })
            }
          />

          <br />

          <button onClick={() => dispatch({ type: "BACK" })}>
            Back
          </button>

          <button onClick={() => dispatch({ type: "NEXT" })}>
            Next
          </button>
        </div>
      )}
      {state.page === 3 && (
        <div>
          <h2>All Information</h2>

          <p>Name: {state.name}</p>
          <p>Last Name: {state.lastName}</p>
          <p>Email: {state.email}</p>
          <p>Number: {state.number}</p>

          <button onClick={() => dispatch({ type: "BACK" })}>
            Back
          </button>
        </div>
      )}
    </>
  );
}

export default App;