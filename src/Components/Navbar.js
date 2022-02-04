import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import SearchContext from '../Context/SearchContext';

const Navbar = (props) => {
    const SearchData = useContext(SearchContext);

    const [searchText, setSearchText] = useState("");

    const inputChangeHandler = (e) => {
        setSearchText(e.target.value);
    }

    const search = () => {
        SearchData.setSearchText(searchText);
        setSearchText("");
    }

    // let location = useLocation();
    // let path = location.pathname;

    return (
        <nav className={`navbar navbar-expand-lg ${props.dark === true ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/tech">Technology</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/finance">Finance</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/sports">Sports</NavLink>
                        </li>
                    </ul>

                    {
                        props.search === true && <div className="d-flex">
                            <input id="searchBar" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={inputChangeHandler} value={searchText} />
                            <Link className="btn btn-outline-success" type="submit" to="/search" onClick={search}>Search</Link>
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    dark: PropTypes.bool,
    search: PropTypes.bool
}

Navbar.defaultProps = {
    title: "Please Enter Title"
}

export default Navbar;