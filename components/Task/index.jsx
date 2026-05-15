function Task(props) {
  return (
    <li>
      {props.text}

      <button onClick={props.remove}>
        Remover
      </button>
    </li>
  );
}

export default Task;