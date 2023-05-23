const App = () => {
  return (
    <div>
      <h4>Tweets</h4>
      {tweetsData.map((tweet) => (
        <Tweet
          username={tweet.username}
          name={tweet.name}
          date={tweet.date}
          msg={tweet.msg}
        />
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
