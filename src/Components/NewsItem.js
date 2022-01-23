import React from 'react';

const NewsItem = (props) => {
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt={props.title} style={{ height: "18rem", objectFit: "cover" }} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <a href={props.newsLink} className="btn btn-primary">Visit News</a>
            </div>
        </div>
    );
};

export default NewsItem;
