import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { IdeaListItem } from "./IdeaListItem";
import { api } from "../services/api";

export default function IdeasLoader({ data, maxIndex }) {
    const [items, setItems] = useState(data);
    const [hasMore, setHasMore] = useState(true);

    const getMorePost = async () => {
        const res = await api.get(`/idea?start=${items.length}`)

        const newItems = res.data;

        setItems([...items, ...newItems]);
    };

    useEffect(() => {
        setHasMore(!(items.length >= maxIndex))
    }, [items, maxIndex])

    return (
        <div className="paper-like" style={{ padding: "10px 0px" }}>
            <InfiniteScroll
                dataLength={items.length}
                next={getMorePost}
                hasMore={false}
            // loader={<h3> Loading...</h3>}
            // endMessage={<h4>Nothing more to show</h4>}
            >
                {items.map((item) => (
                    <IdeaListItem {...item} key={item.id} />
                ))}
            </InfiniteScroll>
        </div>
    );
};