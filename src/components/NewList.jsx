import React from "react";
import NewsListItem from "./NewsListItem";

export default function New_list({ news, textHH }) {
    const new_list = news.map((item) => (
        <NewsListItem key={item.id} item={item} />
    ));
    return (
        <div>
            {new_list} <h1>{textHH}</h1>
        </div>
    );
}
