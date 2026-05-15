function Task(props) {
  return (
    <li>
      <span
        onClick={props.toggle}
        style={{
          textDecoration: props.done
            ? "line-through"
            : "none",
          cursor: "pointer"
        }}
      >
        {props.text}
      </span>

      <button onClick={props.remove}>
        Remover
      </button>
    </li>
  );
}

export default Task;