"use client";
import React, { useEffect, useState } from "react";
import SimliVapi from "@/app/SimliVapi";
import DottedFace from "./Components/DottedFace";
import SimliHeaderLogo from "./Components/Logo";
import Navbar from "./Components/Navbar";
import Image from "next/image";
import GitHubLogo from "@/media/github-mark-white.svg";

interface avatarSettings {
  vapi_agentid: string;
  simli_faceid: string;
}

// Customize your avatar here
const avatar: avatarSettings = {
  vapi_agentid: "763ce219-2778-46f6-ac49-21fd241b4f56",
  simli_faceid: "0c2b8b04-5274-41f1-a21c-d5c98322efa9",
};

const Demo: React.FC = () => {
  const [showDottedFace, setShowDottedFace] = useState(true);

  const onStart = () => {
    console.log("Setting setshowDottedface to false...");
    setShowDottedFace(false);
  };

  const onClose = () => {
    console.log("Setting setshowDottedface to false...");
    setShowDottedFace(false);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center font-abc-repro font-normal text-sm text-white p-8">
      <SimliHeaderLogo />
      <Navbar />

      <div className="absolute top-[32px] right-[32px]">
        <text className="font-bold mb-8 text-xl leading-8">
          RoleplayAI
        </text>
      </div>
      <div className="flex flex-col items-center gap-6 bg-effect15White p-6 pb-[40px] rounded-xl w-full">
        <div>
          {showDottedFace && <DottedFace />}
          <SimliVapi
            agentId={avatar.vapi_agentid}
            simli_faceid={avatar.simli_faceid}
            onStart={onStart}
            onClose={onClose}
            showDottedFace={showDottedFace}
          />
        </div>
      </div>

      <div className="max-w-[600px] flex flex-col items-center text-center mt-10">

  <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_#00eaff]">
    AI Interview Simulation
  </h1>

  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
    Experience a realistic, high-pressure interview conducted by a live AI interviewer.
    Train your communication. Improve your clarity. Build confidence under pressure.
  </p>

  <div className="bg-white text-black px-8 py-4 rounded-xl shadow-lg hover:shadow-[0_0_30px_#9d00ff] hover:scale-105 transition-all duration-300 cursor-pointer font-semibold text-lg">
    BEGIN SIMULATION
  </div>

  <p className="text-sm text-gray-500 mt-6">
    Professional interview environment · Real-time AI conversation · Performance-driven practice
  </p>

</div>
  );
};

export default Demo;
