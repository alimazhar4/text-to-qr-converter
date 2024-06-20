"use client";
import { useState } from "react";
import QRCode from "react-qr-code";

const Converter = () => {
  const [text, setText] = useState("Hello World");

  const downloadAsPNG = () => {
    const svg = document.getElementById("QRCode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "QRCode";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="w-full md:w-[48%] flex flex-col gap-2">
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
      <div className="w-full md:w-[48%] flex flex-col mt-10 md:mt-0">
        <div className="p-8 shadow-lg mx-auto rounded-lg">
          <QRCode id="QRCode" value={text} title={text} />
        </div>
        <button
          className="mt-8 py-2 px-6 rounded-lg text-lg font-medium bg-gradient-to-br from-[#00aaFF] to-[#008CFF] mx-auto text-white hover:from-[#008CFF] hover:to-[#008CFF] transitions duration-200"
          onClick={() => downloadAsPNG()}
        >
          Download As PNG
        </button>
      </div>
    </div>
  );
};

export default Converter;
