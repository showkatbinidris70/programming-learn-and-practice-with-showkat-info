import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div>
        <p className="fs-5">
          প্রত্যেকটি hooks এরই কিন্তু নিজস্ব Unique API রয়েছে। কিছু hooks
          শুধুমাত্র একটি value রিটার্ন করে{" "}
          <span className="text-primary">(যেমন useRef এবং useContext)</span>,
          আবার কিছু আছে যারা একটি pair of values রিটার্ন করে থাকে।{" "}
          <span className="text-primary">(যেমন useState and useReducer) </span>
          এবং বাকিরা কিছুই রিটার্ন করে না{" "}
          <span className="text-primary">(যেমন useEffect)</span>।
        </p>
      </div>
      <div className="d-flex gap-5 d-none">
        <div>
          {" "}
          <Link to="/use-state">Use State</Link>
        </div>
        <div>
          {" "}
          <Link to="/use-effect">Use Effect</Link>
        </div>
        <div>
          {" "}
          <Link to="/use-ref">Use Ref</Link>
        </div>
        <div>
          {" "}
          <Link to="/use-reducer">Use Reducer</Link>
        </div>
        <div>
          {" "}
          <Link to="/use-memo">Use Memo</Link>
        </div>
        <div>
          {" "}
          <Link to="/use-callback">Use Callback</Link>
        </div>
      </div>
    </div>
  );
}
