import React, { useState } from "react";
import Image_1 from "../assets/images/image-1.png";
import Markdown from "react-markdown";

export default function UseState() {
  const [counts, setCounts] = useState(0);

  const increment = () => {
    setCounts(counts + 1);
  };
  const decrement = () => {
    setCounts(counts - 1);
  };
const markDown1=`
const a = React.useState(0)

console.log("useState",  a) -----> [0, f()] // output`
  return (
    <div>
      <h2 className="py-3">Use of useState</h2>
      <p className="fs-5">
        এই hook টি সবথেকে বেশি ব্যাবহার করে থাকি আমাদের অ্যাপে। কারণ আমরা এটির
        মাধ্যমেই আমরা আমাদের ইন্টারনাল স্টেট মেনেজ করে থাকি।{" "}
      </p>
      <img src={Image_1} className="img-fluid" />
      <p className="fs-5">
        আমরা প্রথমে এই লাইনের ব্যাখ্যায় আসি;{" "}
        <span className="text-primary">
          const [count, setCount] = useState(0)
        </span>
      </p>
      <p></p>
      <p className="fs-5">
        এখানে আমরা দেখতে পারছি, useState(0) হচ্ছে একটি ফাংশন যেটি এটি একটি
        initial value গ্রহন করে। তো আমাদের ক্ষেত্রে আমাদের ষ্টেটের initial value
        হচ্ছে 0।
      </p>
      <p className="fs-5">
        এই ফাংশনটি আসলে কি রিটার্ন করে আমাদের জন্যে? useState এক জোড়া (২টি)
        value রিটার্ন করে এবং এই জোড়া value টি একটি array টাইপে রিটার্ন হয়ে
        আসে যেটার ভিতরে ২টি এলেমেন্ট থাকে। আমরা যদি console.log দিয়ে এটার
        রিটার্ন দেখি তাহলে বুঝতে আরও সুবিধা হবে।
      </p>
      <p className="py-2 px-3 rounded markdownBgColor"><Markdown>{markDown1}</Markdown></p>
      <p className="fs-5">
        আমরা দেখতে পারছি আমরা যদি console.log করি আমাদের useState কে, তাহলে আমরা
        রিটার্ন এ একটি array পাই যেটার ভিতরে ২ টি এলেমেন্ট আছে, ফার্স্ট ইনডেক্সে
        আমাদের initial value 0 পাই এবং সেকেন্ড ইনডেক্সে আমরা একটি ফাংশন পাচ্ছি
        এবং এই ফানশনের মাধ্যমেই আমরা আমাদের ষ্টেট ডাটা আপডেট করি। কমন প্রাকটিস
        হচ্ছে আমরা সবসময় এই ২টি value কে array destructuring এর মাধ্যমে ২টি
        ভেরিয়েবেলে সেট করে দেই।
      </p>
      <p className="fs-5">
        আমরা যে এতক্ষণ ষ্টেট ষ্টেট করলাম, আসলে ষ্টেট টা কি? এটার সংজ্ঞায় বলা
        যায় যে, ষ্টেট হচ্ছে এমন একটি ডাটা অথবা ভেলু যেটা চেঞ্জ হয় সময়ের সাথে।
        তাহলে আসলে কিভাবে চেঞ্জ হয় আমাদের ষ্টেট। আমরা যদি আমাদের Counterএ ফিরে
        যাই তাহলে দেখব আমরা যখন বাটন ক্লিক করছি তখন আমরা একটি ফাংশন কল করছি,
        সেটি হল increment এবং এই ফাংশনের ভিতরে আমরা আমাদের ষ্টেটকে আপডেট করে
        দিচ্ছে আমাদের setCount এর মাধ্যমে। এই setCount কিন্তু আমরা সেই প্রথমেই
        destructuring করে পেয়েছি এবং এই ফাংশনের কাজই হচ্ছে আমাদের count ষ্টেটকে
        আপডেট করা।
      </p>
      <p className="fs-5">
        ওকে, তাহলে আমরা ষ্টেট পেলাম আবার ষ্টেট কে আপডেটও করলাম, তাহলে এখন কি
        হবে? এখানেই আসলে React এর মজা। আমরা যখন setCount ফাংশনটি call করি তখন
        আসলে আমরা React কে বলি যে আমাদের state আপডেট হয়েছে, React তখন পুরো
        Counter কে আবার রেন্ডার করে, আর যখন এটি re-render হয় তখন আমাদের পুরো
        কম্পোনেন্ট ফাংশনটি আবার re-run হয়। এবং এই re-run হওয়ার মাধ্যমে আমরা
        আমাদের আপডেটেড ষ্টেট value টি পাই।
      </p>
      <p className="fs-5">
        প্রথমে আমাদের counter state এর value হচ্ছে 0, পরে setCount কল হলে আমরা
        এটার value ১ বাড়িয়ে দেই। React তখন পুরো Counter কম্পোনেন্টকে আবার
        রেন্ডার করে এবং নেক্সট রানে আমাদের counter এর value হয় ১। এই counter এর
        value কম্পোনেন্ট রিমুভ হওয়ার আগে পর্যন্ত বিদ্যমান থাকে।
      </p>
      <p></p>
      <p></p>
      <h4>Initial Value : {counts}</h4>
      <div className="d-flex gap-3 py-3">
        <button className="btn btn-primary" onClick={increment}>
          increment
        </button>
        <button className="btn btn-primary" onClick={decrement}>
          decrement
        </button>
      </div>
    </div>
  );
}
