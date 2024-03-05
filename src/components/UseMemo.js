import React, { useState } from "react";
import Message from "./Message";
import Markdown from "react-markdown";
import Component2 from "./Component2";

export default function UseMemo() {
  const [num, setNum] = useState(0);
  console.log("memo render");

  const markdown1 = `
  export default function UseMemo() {

    const [num, setNum] = useState(0);

    console.log("memo render");

    return (

      <div>

        <h1>Initial Value : {num}</h1>

        <button

          className="btn btn-primary"

          onClick={() => {

            setNum((num) => num + 1);

          }}

        >
          Increment

        </button>

        <Message />

      </div>

    );

  }
  
  `;
  return (
    <div>
      <p className="py-2 px-3 rounded markdownBgColor">
        <Markdown>{markdown1}</Markdown>
      </p>
      <p className="fs-5"><span className="text-bold">use memo</span>
      Unnecessary render যত কমানো যায় তত performace ভালো হবে । Parent Component কে render করলে child component ও render হয় । যা child component, parent component এর ওপর র্নিভরশীল নয় । আর এটাকে বন্ধ করতে হবে useMemo এর মাধ্যমে । তবে এক্কে বারে ছোট কোন component এর ক্ষেত্রে না কারলে ও চলে । বড় application এর ক্ষেত্রে অবশ্যই memo use করতে হবে । memo use করা হয় performance issue solve করার জন্য । যে component render না হলে application এ কোন ধরনের সমস্যা হয় না সে সব ক্ষেত্রে render off করতে হয় memo use করে । আবার যদি কোন component কে render করানোর দরকার হয় তাহলে memo use করার দরকার নাই ।
যদি কোন state এর value change হয় তাহলে memo use করলে ও state render off করা যায় না । তাহলে বুঝাগেল যে সব component গুলো শুধুমাত্র render করার দরকার নাই সেগুলোতে memo use করা হয় ।
      </p>
      <h1>Initial Value : {num}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          setNum((num) => num + 1);
        }}
      >
        Increment
      </button>
      <Message initialValueOfMsg={num} />
      <h2>llllll</h2>
      {/* <Component2/> */}
    </div>
  );
}
