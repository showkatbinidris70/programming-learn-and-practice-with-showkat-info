import React, { useRef, useState } from "react";
import Image_1 from "../assets/images/reducer.png";
import Markdown from "react-markdown";

export default function () {
  const [count, setCount] = useState(0);

 const markdown1 =`
 
 `
 const markdown2=`
 
 `
  return (
    <div>
      <p className="fs-5">বেশিরভাগ ক্ষেত্রে আমাদের useState দিয়েই কাজ চলে যায়। কিন্তু যদি <br/><span> 
আমাদের ষ্টেট কমপ্লেক্স হয়ে যায়,</span>
<br/><span>ষ্টেটের যদি মাল্টিপেল সাবভেলু থাকে</span>
এবং যদি একটি ষ্টেট আরেকটি ষ্টেটের উপর নির্ভর করে সেক্ষেত্রে useReducer ব্যাবহার করা প্রেফারেবেল।
নিচে useReducer এর একটা ছোট উদাহরণ দেখানো হল। যেহেতু এই কাজের জন্যে useReducer এর দরকার নেই কিন্তু useReducer বুঝানোর জন্যে এখানে দেয়া হল। এই ছবিটি ভালমত লক্ষ্য করি আমরা। এখানে একসাথে অনেক কিছু হচ্ছে।</p>
<img src={Image_1} className="img-fluid"/>
</div>
);
}
