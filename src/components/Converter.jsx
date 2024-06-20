"use client";
import { useState } from "react";
import QRCode from "react-qr-code";

const Converter = () => {
  const [text, setText] = useState("Hello World");

  return (
    <div className="flex flex-row justify-between">
      <div className="w-[48%] flex flex-col gap-2">
        <h1 className="text-4xl text-left font-extrabold bg-gradient-to-br from-[#00D8FF] to-[#008CFF] inline-block text-transparent bg-clip-text py-2">
          Convert Text or Links Into QR Codes Which You Can Even Download
        </h1>
        <p className="text-lg text-black">
          Welcome to the QR Code Converter! In this section, you can enter any
          text or link that you want to convert into a QR code. After generating
          the QR code, you can download it and use it wherever you need, making
          sharing and accessing information more convenient than ever.
        </p>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          className="mt-6 rounded-lg text-md p-4 border border-slate-400"
        />
      </div>
      <div className="w-[48%] flex flex-col">
        <div className="p-8 shadow-lg mx-auto">
          <QRCode value={text} title={text} />
        </div>
      </div>
    </div>
  );
};

export default Converter;
