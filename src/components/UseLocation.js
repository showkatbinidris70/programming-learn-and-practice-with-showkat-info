import React, { useState } from "react";

import { blogsData } from '../data'
import { Link } from "react-router-dom";

export default function UseLocation() {
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
                <h4>Dynamic Routing এর জন্য useParams এর মতই useLocation use হয় কিন্তু useLocation এ ডাটাটা state এর মাধ্যমে pass করা যায় ।</h4>
                {blogs.map((blog) => {
                    const { id, title, body } = blog;
                    return <article key={id}>
                        <h3>{title}</h3>
                        <p>{trauncateStr(body, 100)}</p>
                        <Link to={title} state={{id, title, body}}>learn More</Link>
                    </article>
                })}
            </section>
        </dvi>
    );
}

