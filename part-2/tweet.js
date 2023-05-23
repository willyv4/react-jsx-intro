const Tweet = (props) => {
  return (
    <div>
      <ul>
        <li>
          <strong>Username:</strong> {props.username}
        </li>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Date:</strong> {props.date}
        </li>
        <li>
          <strong>Message:</strong> {props.msg}
        </li>
      </ul>
    </div>
  );
};
