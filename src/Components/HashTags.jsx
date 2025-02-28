const HashTags = ({ tags }) => {
  return (
    <div className="alert alert-light p-1">
      {tags.map((item) => (
        <a
          href="#"
          key={item}
          className="card-link text-danger text-decoration-none"
        >
          #{item}
        </a>
      ))}
    </div>
  );
};

export default HashTags;
