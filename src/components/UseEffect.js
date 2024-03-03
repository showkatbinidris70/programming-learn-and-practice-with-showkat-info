import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0)


  useEffect(() => {
    console.log('use effect being called')
  })

  const [name, setName] = useState("");
  useEffect(() => {
    console.log('use effect being called')
  }, [])

  useEffect(() => {
    console.log("use effect depends on count");
  }, [count]);

  useEffect(() => {
    console.log("use effect depends on name");
  }, [name]);

  const markdown1 = `
  useEffect(() => { // 1 -> callback function

    // your side-effect code here.

  }, [] // 2 -> dependency array)
  `;
  const markdown2 = `
  export default function App() {

    const [count, setCount] = useState(0)
    
    useEffect(() => {

      console.log('use effect being called')

    })
  
    return (

      <div className="App">

        <button onClick={()=>setCount(count+1)}>Click</button>

      </div>

    );

  }
  `;
  const markdown3 = `
   const [count, setCount] = useState(0);

  const [name, setName] = useState("");

  useEffect(() => {

    console.log("use effect depends on count");

  }, [count]);

  useEffect(() => {

    console.log("use effect depends on name");

  }, [name]);
  `
  const markdown4 =`
     return(
        <button onClick={() => setCount(count + 1)}>Set count</button>

      <button style={{ marginLeft: 20 }} onClick={() => setName("saad")}>

        Set name
        
      </button>
     );
  `
  const markdown5 =`
    const [count, setCount] = useState(0)
  
  useEffect(() => {

    console.log('use effect being called')

  }, [])

  return (

    <div className="App">

      <button onClick={()=>setCount(count+1)}>Click</button>

    </div>

  );

  `
  return (
  
    <div>
      <h2>Use of UseEffect</h2>
      <p>
        useEffect হচ্ছে React এর একটি বিল্ট-ইন hook যেটার মাধ্যমে আমরা আমাদের
        যেকোনো কাস্টম কোড রান করাতে পারি React render এবং re-render এর পরে।
      </p>
      <p className="py-2 px-3 rounded" style={{ backgroundColor: "#edf2ef" }}>
        <Markdown>{markdown1}</Markdown>
      </p>
      <p className="fs-5f">উপড়ের কোডের ভিতরে আমরা একটু খেয়াল করে দেখি যে আমি ১, ২ দিয়ে ২ টি জায়গায় লেবেলিং করেছি। আমাদেরকে <span className="text-primary">useEffect</span> এর কাজ বুঝতে হলে এই ১ এবং ২ পয়েন্ট ২টী ভালমতো বুঝা লাগবে।</p>
      <p>
        <span className="fw-bold">১। কলব্যাক ফাংশনঃ</span> আমরা দেখতে পাচ্ছি
        প্রথমে যে <span className="text-primary">useEffect </span> একটি কলব্যাক ফাংশন একসেপ্ট করে, মূলত এই
        ফাংশনের ভিতরেই আমরা আমাদের সাইড এফেক্ট কোডের লজিক লিখে থাকি। এখন প্রশ্ন
        হচ্ছে সাইড এফেক্ট অথবা এফেক্ট বলতে আমরা কি বুঝাচ্ছি? সাইড এফেক্ট বলতে
        আমরা এমন যেকোনো কিছুকে বুঝাই যেটা ফাংশনের স্কোপের বাহিরের কোন কিছুর উপর
        প্রভাব ফেলে। উদাহরণস্বরূপ নেটওয়ার্ক রিকোয়েস্ট, সাবস্ক্রিপ্সন সেটআপ, DOM
        কে ম্যানুয়ালি চেঞ্জ করা ইত্যাদি।
      </p>
      <p>
        আচ্ছা তাহলে এখন প্রশ্ন আসতে পারে আমরা তো এই useEffect কে আমাদের
        কম্পোনেন্টের ভিতরে কোথাও call ই তো করছি না তাহলে এটা কখন রান হবে? কারন
        আমরা জানি কোন ফাংশনকে কল করলেই সেটি শুধুমাত্র রান হয়। এখানেই তো
        useEffect এর আসল কাহিনী। useEffect ফাংশনটি প্রতিবার render এবং re-render
        এর পরে কল হয়। এটা আমাদের কল করা লাগে না, React নিজেই এটা কল করে থাকে।
      </p>
      <p className="py-2 px-3 rounded markdownBgColor"><Markdown>{markdown2}</Markdown></p>
      <h2>Initial Value {count}</h2>
      <button className="btn btn-primary p-2" onClick={() => setCount(count + 1)}>Click Here</button>
      <p className="fs-5">আমরা যদি উপড়ের এই কোডটি লিখে রান করি তাহলে দেখব আমরা আমাদের কম্পোনেন্ট মাউন্ট হওয়ার পরে console এ ‘use effect being called’ এই লাইনটা দেখতে পারছি। আবার আমরা প্রত্যেকবার বাটন ক্লিক করার পর যখন ষ্টেট আপডেট করছি তার পরেও কনসোলে এই সেইম লগটি দেখতে পারব। কারণ আমরা আগেই বলেছি যে React প্রতিবার render and re-render এর পরে আমাদের useEffect কে কল করে থাকে</p>
      <p className="fs-5"><span className="fw-bold fs-5">২। effect dependencies </span> এখন আমরা ২ নং লেবেলিং এর দিকে খেয়াল করি। আমরা দেখতে পারছি সেখানে একটি ফাকা array ডিক্লেয়ার করা আছে। এটার কাজ কি আসলে? এটা কে বলা হয় dependency array. এটাকে dependency array বলার কারণ হচ্ছে আমাদের useEffect কল হবে কি না হবে সেটি এই array এর ইনপুট এর উপর depend করে। একটু আগে আমরা দেখে আসলাম যে useEffect প্রতিবার render এবং re-render হওয়ার পরেই কিন্তু কল হচ্ছে, কারণ সেখানে আমরা কোন dependency array ব্যাবহার করিনি, তাই এটি সবসময় কল হচ্ছিল।
      </p>
      <p className="fs-5">কিন্তু আমরা চাইলেই আমাদের useEffect এর কলব্যাক ফাংশনকে কিছু ইনপুটের উপর নির্ভরশীল করে দিতে পারি। এই ইনপুট হতে পারে যেকোনো state, props or function. আমরা নিচের উদাহরণটি তাহলে দেখি</p>
      <p className="py-2 px-3 rounded markdownBgColor"><Markdown>{markdown3}</Markdown></p>
       <p className="py-2 px-3 rounded markdownBgColor"><Markdown>{markdown4}</Markdown></p>
      <p className="fs-5">এখানে আমরা দেখতে পারছি যে 2টি useEffect ব্যাবহার করা হয়েছে। প্রথমটার dependency array এর ইনপুট হচ্ছে count state এবং দ্বিতীয়টি ইনপুট হচ্ছে name state. তারমানে আমরা বুঝাচ্ছি যে প্রথম useEffect শুধুমাত্র তখনি কল হবে যখন ইনপুটের count value change হয়, ঠিক তেমনি দ্বিতীয় useEffect শুধুমাত্র তখনি কল হবে যখন ইনপুটের name value change হয়. এই ভিডিওটি দেখলে ব্যাপারটি ক্লিয়ার হবে। খেয়াল করি আমরা কখন কোনটি লগ হচ্ছে কনসোলে।</p>
     <div className="d-flex gap-3"> <p>{count}</p>
     <p>{name}</p></div>
      <div>
      <button onClick={() => setCount(count + 1)}>Set count</button>
      <button style={{ marginLeft: 20 }} onClick={() => setName("Showkat")}>
        Set name
      </button>
    </div>
      <p className="fs-5">আশা করি তাহলে আমরা dependency array সম্পর্কেও একটি পরিষ্কার ধারনা পেলাম। এখানে আরেকটি জিনিস আমরা মাঝে মাঝেই খেয়াল করে থাকি যে আমাদের dependency array হচ্ছে ফাকা, মানে []
আমরা এরকম ফাকা তখনি রাখি যখন আমরা চাই আমাদের useEffect শুধুমাত্র একবার কম্পোনেন্ট mount হওয়ার পরে কল হবে। যেমন আমরা এখানে API call করতে পারি, অর্থাৎ আমরা যখন খালি প্রথম একবার এটি রান করাতে চাই তখন আমাদের dependency array কে [] ফাকা রেখে দেই।
</p>
         <p className="py-2 px-3 rounded markdownBgColor"><Markdown>{markdown5}</Markdown></p>

      <p> <button className="btn btn-primary" onClick={()=>setNumber(number+1)}>Click</button></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
}
