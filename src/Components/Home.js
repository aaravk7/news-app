import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
    const [news, setNews] = useState([]);
    const [totalNews, setTotalNews] = useState(0);
    const [pageNo, setPageNo] = useState(1);

    useEffect(() => {
        async function getData() {
            let url = `https://api.newscatcherapi.com/v2/latest_headlines?countries=IN&page_size=18&lang=en&when=24h&page=${pageNo}`;
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
            setNews(news.concat(data.articles));
            setTotalNews(data.total_hits);
        }

        getData();

        // eslint-disable-next-line
    }, [pageNo]);

    if (news.length === 0) {
        return (
            <div className="container text-center mt-5">
                <div className="spinner-border mt-5" style={{ width: "5rem", height: "5rem" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    const fetchMoreData = () => {
        const pg = pageNo + 1;
        setPageNo(pg);
    };

    return (
        <>
            <h1 className='display-5 text-center mt-4'>Latest News</h1>
            <div className="container mt-4">
                <InfiniteScroll
                    dataLength={news.length}
                    next={fetchMoreData}
                    hasMore={news.length !== totalNews}
                    loader={<div className="container text-center mt-5">
                        <div className="spinner-border mt-5" style={{ width: "5rem", height: "5rem" }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>}
                >
                    <div className="container">
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
                </InfiniteScroll>
            </div>
        </>
    )
};

export default Home;
