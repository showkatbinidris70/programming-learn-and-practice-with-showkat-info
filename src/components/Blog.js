import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { blogsData } from "../data";

export default function Blog() {
    const { title } = useParams();
    const location = useLocation();
    console.log(location);
    const [bodyData, setBodyData] = useState("");
    useEffect(() => {
        blogsData.filter((blog) => blog.title === title);
        setBodyData(blogsData[0].body);
    }, [])
    return (
        <dvi>
            <h1>{title}</h1>
            <p>{bodyData.slice(0, 500)}</p>
            <p>{bodyData.slice(501, 1000)}</p>

        </dvi>
    );
}
