const Header = ({ selectedTab, setSelectedTab }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark ">
      <div className="container">
        <a href="/" className="navbar-brand">
          <h1 className="nav-brand text-light ">Blog Book</h1>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul
            className="nav nav-pills flex-md-row flex-column my-auto
          "
          >
            {/*  */}
            <li className="nav-item">
              <a
                href="#"
                className={`nav-link  text-white ${
                  selectedTab == "HOME" && "active"
                }`}
                onClick={() => {
                  setSelectedTab("HOME");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link  text-white ${
                  selectedTab == "ADD_POST" && "active"
                }`}
                onClick={() => {
                  setSelectedTab("ADD_POST");
                }}
              >
                Add Post
              </a>
            </li>
          </ul>
          {/*  */}
          <form className="form-inline mt-3">
            <div className="input-group my-mb-2 mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
