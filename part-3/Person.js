const Person = (props) => {
  let adult;
  props.age > 18
    ? (adult = <h3>please go vote</h3>)
    : (adult = <h3>you must be 18</h3>);

  let name;
  props.name.length > 8
    ? (name = props.name.substring(0, 6).concat("..."))
    : (name = props.name);

  return (
    <div>
      <br />
      <br />
      <p>Learn some information about this person</p>
      <div>
        <p>
          <strong>{name}</strong>
        </p>

        <strong>
          {props.age}
          {adult}
        </strong>

        <h4>Hobbies</h4>
        <ul>
          {props.hobbies.map((hobby) => (
            <li>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
