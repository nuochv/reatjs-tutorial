import React from "react";

export default function NewsListItem({ item }) {
    return (
        <div>
            <div>{item.id}</div>
            <div>{item.title}</div>
            <div>{item.feed}</div>
        </div>
    );
}
