import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const Tech = () => {
    const [news, setNews] = useState(null);

    useEffect(() => {
        async function getData() {
            let url = 'https://api.newscatcherapi.com/v2/latest_headlines?countries=IN&page_size=18&lang=en&when=24h&topic=tech';
            let response = await fetch(url, {
                method: "GET",
                headers: {
                    "x-api-key": "2bkJtuEnCid_XIJ1xRkjrr71TmknEOej-jFhy49fOYs"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            let data = await response.json();
            setNews(data.articles);
        }

        getData();
    }, []);

    if (!news) {
        return (
            <div className="container text-center mt-5">
                <div className="spinner-border mt-5" style={{ width: "5rem", height: "5rem" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <>
            <h1 className='display-5 text-center mt-4'>Latest Tech News</h1>
            <div className="container mt-4">
                <div className="row">
                    {news.map(newsEl => {
                        return (
                            <div className="col-md-6 col-xl-4 mb-4" key={newsEl._id}>
                                <NewsItem title={newsEl.title} desc={newsEl.excerpt}
                                    image={newsEl.media} newsLink={newsEl.link} pDate={newsEl.published_date} source={newsEl.rights} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default Tech;
