function FlexItem({ message }) {
  return (
    <div className="flexItem">
      <h3 className="commonTitles">{message.title}</h3>
      <p className="insight">{message.insight}</p>
    </div>
  );
}

export default FlexItem;
