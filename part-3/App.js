const App = () => {
  return (
    <div>
      {people.map((person) => (
        <Person name={person.name} age={person.age} hobbies={person.hobbies} />
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
