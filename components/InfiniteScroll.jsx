import React, { useCallback, useEffect, useRef, useState } from "react";

export function InfiniteScroll(props) {
    const { fetchData, fetchMaxPage } = props

    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([])
    const [page, setPages] = useState(props.initialPage || 0);
    const [maxPage, setMaxPage] = useState(10)

    const observer = useRef();

    useEffect(() => {
        fetchData(addItems, page)
        fetchMaxPage(setMaxPage)
    }, [])


    const addItems = (newItems) => {
        const newItemsConcat = items.concat(newItems)
        setItems(newItemsConcat)
        setIsLoading(false);
    }

    const lastItemRef = useCallback(
        (node) => {
            if (isLoading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && page < maxPage) {
                    setIsLoading(true);
                    fetchData(addItems, page)
                    setPages((page) => page + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [isLoading]
    );

    return (
        <div>
            {items.map((item, index) =>
                index + 1 === items.length ? (
                    <div
                        // ref={lastItemRef}
                        key={item.id}>
                        {props.renderChild(item)}
                    </div>
                ) : (
                    props.renderChild(item)
                )
            )}
            <div ref={lastItemRef}
            />
        </div>
    );
};
