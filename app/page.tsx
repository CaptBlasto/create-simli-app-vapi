"use client";
import React, { useState } from "react";
import SimliVapi from "@/app/SimliVapi";
import SimliHeaderLogo from "./Components/Logo";
import Navbar from "./Components/Navbar";
import Image from "next/image";

interface avatarSettings {
  vapi_agentid: string;
  simli_faceid: string;
}

const avatar: avatarSettings = {
  vapi_agentid: "763ce219-2778-46f6-ac49-21fd241b4f56",
  simli_faceid: "0c2b8b04-5274-41f1-a21c-d5c98322efa9",
};

const Demo: React.FC = () => {
  const [showDottedFace, setShowDottedFace] = useState(true);
  const [isCallActive, setIsCallActive] = useState(false);

  const onStart = () => {
    console.log("Starting interview...");
    setShowDottedFace(false);
    setIsCallActive(true);
  };

  const onClose = () => {
    console.log("Interview ended...");
    setShowDottedFace(true);
    setIsCallActive(false);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center font-abc-repro font-normal text-sm text-white p-8">
      <SimliHeaderLogo />
      <Navbar />

      <div className="absolute top-[32px] right-[32px]">
        <span className="font-bold text-xl">RoleplayAI</span>
      </div>

      {/* Main Content Area */}
      {!isCallActive ? (
        // Landing Page - Before Interview
        <div className="flex flex-col items-center justify-center flex-1 w-full max-w-[800px] gap-8">
          {/* Sarah's Image */}
          <div className="relative w-[300px] h-[300px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/characters/sarah-compressed.jpg"
              alt="Sarah - AI Interviewer"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Landing Content */}
          <div className="flex flex-col items-center text-center gap-6">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_#00eaff]">
              AI Interview Simulation
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-[600px]">
              Experience a realistic, high-pressure interview conducted by a live AI interviewer.
              Train your communication. Improve your clarity. Build confidence under pressure.
            </p>

            <button 
              onClick={onStart}
              className="bg-white text-black px-8 py-4 rounded-xl shadow-lg hover:shadow-[0_0_30px_#9d00ff] hover:scale-105 transition-all duration-300 font-semibold text-lg mt-4"
            >
              BEGIN SIMULATION
            </button>

            <p className="text-sm text-gray-500 mt-2">
              Professional interview environment · Real-time AI conversation · Performance-driven practice
            </p>
          </div>
        </div>
      ) : (
        // Interview Active - Show SimliVapi
        <div className="flex flex-col items-center gap-6 bg-effect15White p-6 pb-[40px] rounded-xl w-full mt-8">
          <SimliVapi
            agentId={avatar.vapi_agentid}
            simli_faceid={avatar.simli_faceid}
            onStart={onStart}
            onClose={onClose}
            showDottedFace={showDottedFace}
          />
        </div>
      )}
    </div>
  );
};

export default Demo;