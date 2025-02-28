const EmptyMessage = ({ onFetchClick }) => {
  return (
    <center>
      <h2 className="text-center">No posts To Show here. </h2>
      <button className="btn btn-primary" onClick={onFetchClick}>
        Fetch
      </button>
    </center>
  );
};

export default EmptyMessage;
