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
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-purple-900 to-black flex flex-col items-center font-abc-repro font-normal text-sm text-white p-8 relative overflow-hidden">
      {/* Cyberpunk grid background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e510_1px,transparent_1px),linear-gradient(to_bottom,#4f46e510_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <SimliHeaderLogo />
        <Navbar />

        <div className="absolute top-[32px] right-[32px]">
          <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            RoleplayAI
          </span>
        </div>

        {/* Main Content */}
        {!isCallActive ? (
          <div className="flex flex-col items-center justify-center flex-1 w-full max-w-[900px] gap-10 mt-20">
            
            {/* Sarah's Image with Cyberpunk Frame */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-[320px] h-[320px] rounded-2xl overflow-hidden shadow-2xl bg-black/50 backdrop-blur-sm border border-cyan-500/30">
                <Image
                  src="/characters/sarah-compressed.jpg"
                  alt="Sarah - AI Interviewer"
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    console.log("Image failed to load");
                    // Fallback to gradient if image fails
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* Landing Content */}
            <div className="flex flex-col items-center text-center gap-8 px-4">
              <h1 className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(0,234,255,0.5)] leading-tight">
                AI Interview Simulation
              </h1>

              <p className="text-xl text-gray-200 leading-relaxed max-w-[650px] drop-shadow-lg">
                Experience a realistic, high-pressure interview conducted by a live AI interviewer.
                Train your communication. Improve your clarity. Build confidence under pressure.
              </p>

              {/* CTA Button */}
              <button 
                onClick={onStart}
                className="group relative bg-white text-black px-12 py-5 rounded-2xl font-bold text-xl shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:shadow-[0_0_60px_rgba(139,92,246,0.9)] hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">BEGIN SIMULATION</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <p className="text-sm text-cyan-300/70 mt-2 tracking-wider">
                Professional interview environment · Real-time AI conversation · Performance-driven practice
              </p>
            </div>
          </div>
        ) : (
          // Interview Active
          <div className="flex flex-col items-center gap-6 bg-black/40 backdrop-blur-md border border-cyan-500/30 p-8 rounded-3xl w-full mt-8 shadow-[0_0_50px_rgba(0,234,255,0.3)]">
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
    </div>
  );
};

export default Demo;// Force rebuild
