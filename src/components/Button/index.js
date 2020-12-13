function Button(props) {
  const { buttonStyle } = props;
  return (
    <button style={{ ...buttonStyle }}>
      <span>{ props.label }</span>
    </button>
  );
}

export default Button
