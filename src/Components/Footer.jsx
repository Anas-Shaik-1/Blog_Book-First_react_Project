const Footer = () => {
  return (
    //     <div className="col-md-4 d-flex align-items-center">
    //     </div>

    //   </footer>
    // </div>
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <span>© 2024 Company, Inc</span>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <i className="bx bx-sm bxl-twitter"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <i className="bx bx-sm bxl-instagram"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <i className="bx bx-sm bxl-facebook"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
