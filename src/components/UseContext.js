import React, { useRef, useState } from "react";
import Image_1 from "../assets/images/carbon-10.png";
import Markdown from "react-markdown";

export default function useContext() {
  const [count, setCount] = useState(0);
  const numberRef = useRef(0)

  const onCountPress = () => {
    setCount(count + 1)
  }
  const onNumberRefPress = () => {
    numberRef.current = numberRef.current + 1
    console.log('numberRef --', numberRef.current)
  }

  
  console.log('count --', count)

 const markdown1 =`
 <div style={{padding: 40}}>

      <p>count - {count}</p>

      <p>numberRef - {numberRef.current}</p>

      <p style={{height: 20}} ></p>

      <button className="btn btn-primary" onClick={onCountPress}>set count</button>

      <p style={{height: 20}}></p>

      <button className="btn btn-primary" onClick={onNumberRefPress} >set number ref</button>

    </div><div style={{padding: 40}}>

    <p>count - {count}</p>

    <p>numberRef - {numberRef.current}</p>

    <p style={{height: 20}} ></p>

    <button className="btn btn-primary" onClick={onCountPress}>set count</button>

    <p style={{height: 20}}></p>

    <button className="btn btn-primary" onClick={onNumberRefPress} >set number ref</button>

  </div>
 `
 const markdown2=`
 const [count, setCount] = useState(0);

 const numberRef = useRef(0)

 const onCountPress = () => {

   setCount(count + 1)

 }
 const onNumberRefPress = () => {

   numberRef.current = numberRef.current + 1

   console.log('numberRef --', numberRef.current)

 }
 
 console.log('count --', count)
 `
  return (
    
    <div>
     <p className="fs-5"><span className="text-primary">useRef hook </span>আমাদের একটি mutable রেফ (ref) অবজেক্ট রিটার্ন করে, তাহলে আমাদের বুঝা লাগবে রেফ অবজেক্টটি আসলে কি? সহজ ভাষায় রেফ আমাদের কে DOM অথবা React Element কে access করার একটা উপায় করে দেয়। মানে হচ্ছে আমরা আমাদের যেসব React Element গুলোকে render করে থাকি সেগুলোকে ধরে ব্যাবহার করার একটা সুযোগ করে দেয়। একটা উদাহরণ দিয়ে আমরা সহজে বুঝতে পারব।</p>
     <p className="fs-5">আমরা ধরে নেই আমাদের কম্পোনেন্টে একটা TextInput আছে, এখন আমরা চাচ্ছি যে আমাদের কম্পোনেন্ট যখন load হবে তখন আমরা আমাদের ইনপুটটাকে ফোকাস করবো। এখন আমরা এটাও জানি যে ইনপুটকে ফোকাস করার জন্যে আমাদের focus() ফাংশনকে call করা লাগবে। কিন্তু প্রশ্ন হচ্ছে আমাদেরকে তো আসলে প্রথমে TextInput টাকে ধরা লাগবে এবং সেটাকে ধরেই focus() ফাংশনকে call করা লাগবে। ঠিক এখানেই আমাদের useRef এর দরকার। আমরা আগেই বলেছি useRef hook আমাদের একটি mutable রেফ (ref) অবজেক্ট রিটার্ন করে এবং এই ref অবজেক্টের সাহায্যে আমরা React Element কে ধরতে পারি, কাজেই আমরা এখন সেই কাজটি করবো । নিচের কোডটি আমরা প্রথমে দেখি।</p>
     <img src={Image_1} className="img-fluid" />
<p className="fs-5">DOM access ছাড়া ref এর আরেকটি ব্যাবহার হচ্ছে আমরা যদি আমাদের কম্পোনেন্টে কোন ভেরিয়েবেলকে লাইফটাইম রাখতে চাই অর্থাৎ সেটার value কে আমরা parsist করতে চাই re-render ছাড়াই। আমরা জানি useState ব্যাবহার করলে আমাদের কম্পোনেন্ট কিন্তু প্রতিবার re-render হবেই। কিন্তু আমরা অনেক সময়ই এরকম চাই যে একটা value কে আপডেট করবো এবং সেটাকে আমরা কম্পোনেন্ট লাইফ সাইকেল জুড়ে ট্র্যাক করবো, কিন্তু আমি সেটার উপর ডিপেন্ড করে বারবার আমার কম্পোনেন্টকে render করবো না, সেক্ষেত্রে আমরা আমাদের value কে useRef এ রেখে দিব।</p>
<p className="py-2 px-3 rounded markdownBgColor"><Markdown>{markdown2}</Markdown></p>
      <p className="py-2 px-3 rounded markdownBgColor"><Markdown>{markdown1}</Markdown></p>
<div style={{padding: 40}}>
      <p>count - {count}</p>
      <p>numberRef - {numberRef.current}</p>
      <p style={{height: 20}} ></p>
      <button className="btn btn-primary" onClick={onCountPress}>set count</button>
      <p style={{height: 20}}></p>
      <button className="btn btn-primary" onClick={onNumberRefPress} >set number ref</button>
    </div>
</div>
);
}
