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
  const [imageError, setImageError] = useState(false);

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
    <div 
      className="min-h-screen flex flex-col items-center font-abc-repro font-normal text-sm text-white p-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1e1b4b 0%, #581c87 50%, #000000 100%)'
      }}
    >
      {/* Cyberpunk grid background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7c3aed10_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed10_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <SimliHeaderLogo />
        <Navbar />

        <div className="absolute top-[32px] right-[32px]">
          <span className="font-bold text-xl text-purple-400">
            RoleplayAI
          </span>
        </div>

        {/* Main Content */}
        {!isCallActive ? (
          <div className="flex flex-col items-center justify-center flex-1 w-full max-w-[900px] gap-10 mt-20">
            
            {/* Sarah's Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div 
                className="relative w-[320px] h-[320px] rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm border border-purple-500 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(147,51,234,0.3) 0%, rgba(236,72,153,0.3) 100%)' }}
              >
                {!imageError ? (
                  <Image
                    src="/characters/sarah-compressed.jpg"
                    alt="Sarah - AI Interviewer"
                    fill
                    className="object-cover"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="text-9xl font-black text-white opacity-40">S</div>
                )}
              </div>
            </div>

            {/* Landing Content */}
            <div className="flex flex-col items-center text-center gap-8 px-4">
              <h1 
                className="text-6xl font-black leading-tight"
                style={{
                  background: 'linear-gradient(90deg, #c084fc 0%, #ec4899 50%, #a855f7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 40px rgba(168,85,247,0.6))'
                }}
              >
                AI Interview Simulation
              </h1>

              <p className="text-xl text-purple-100 leading-relaxed max-w-[650px]">
                Experience a realistic, high-pressure interview conducted by a live AI interviewer.
                Train your communication. Improve your clarity. Build confidence under pressure.
              </p>

              <button 
                onClick={onStart}
                className="bg-white text-black px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-300"
                style={{ boxShadow: '0 0 40px rgba(168,85,247,0.6)' }}
              >
                BEGIN SIMULATION
              </button>

              <p className="text-sm text-purple-300 mt-2 tracking-wider opacity-70">
                Professional interview environment · Real-time AI conversation · Performance-driven practice
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 bg-black bg-opacity-40 backdrop-blur-md border border-purple-500 p-8 rounded-3xl w-full mt-8">
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

export default Demo;