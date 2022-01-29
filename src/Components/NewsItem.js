import React from 'react';

const NewsItem = (props) => {
    const splitDate = props.pDate.split(" ");
    const date = splitDate[0];
    const time = splitDate[1];
    const url = `https://www.${props.source}`;
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt={props.title} style={{ height: "18rem", objectFit: "cover" }} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    Source - <a href={url} target="_blank" rel="noreferrer">{props.source}</a>
                </h6>
                <p className="card-text">{props.desc}</p>
                <div className="text-center">
                    <a href={props.newsLink} className="btn btn-primary">Visit News</a>
                </div>
            </div>
            <div className="card-footer text-muted text-center">
                {date} | {time}
            </div>
        </div>
    );
};

export default NewsItem;
