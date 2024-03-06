import React, { useState } from "react";

import { blogsData } from '../data'
import { Link } from "react-router-dom";

export default function UseParams() {
    const [blogs, setBlogs] = useState(blogsData);

    const trauncateStr = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + "..."
        } else {
            return str;
        }
    }
    return (
        <dvi>
            <section>
                <h4>Dynamic Routing এর জন্য useParams use হয়</h4>
                {blogs.map((blog) => {
                    const { id, title, body } = blog;
                    return <article key={id}>
                        <h3>{title}</h3>
                        <p>{trauncateStr(body, 100)}</p>
                        <Link to={title}>learn More</Link>
                    </article>
                })}
            </section>
        </dvi>
    );
}
