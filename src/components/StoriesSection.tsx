import React, { useState } from 'react';
import { MovementId } from '../types/atlas';
import { ALL_STORIES } from '../data/stories';

interface StoriesSectionProps {
  onSelectMovement: (id: MovementId) => void;
}

export const StoriesSection: React.FC<StoriesSectionProps> = ({ onSelectMovement }) => {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState<number>(0);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const activeStory = ALL_STORIES[selectedStoryIndex] || ALL_STORIES[0];
  const activeStep = activeStory.steps[currentStepIndex] || activeStory.steps[0];

  const handleSelectStory = (idx: number) => {
    setSelectedStoryIndex(idx);
    setCurrentStepIndex(0);
  };

  return (
    <section id="stories-section" className="w-full py-16 px-4 sm:px-6 lg:px-12 border-b border-[#E5E4DF] bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#121212] pb-6 mb-8 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#737373]">
              Section 06 // Narrative Dialectics
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#121212] mt-1">
              Connection Stories
            </h2>
          </div>
          <div className="text-xs font-mono text-[#525252] max-w-md">
            Step-by-step visual narratives illuminating the intense rivalries, cross-continental debates, and ideological migrations that shaped early modernism.
          </div>
        </div>

        {/* Story Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 border-b border-[#E5E4DF]">
          {ALL_STORIES.map((story, idx) => (
            <button
              key={story.id}
              onClick={() => handleSelectStory(idx)}
              className={`px-4 py-2 text-xs font-mono tracking-wider cursor-pointer whitespace-nowrap transition-colors border ${
                selectedStoryIndex === idx
                  ? 'bg-[#121212] text-white border-[#121212] font-semibold'
                  : 'bg-[#FAF9F5] text-[#525252] border-[#DDDCD4] hover:border-[#121212]'
              }`}
            >
              0{idx + 1} // {story.title}
            </button>
          ))}
        </div>

        {/* Active Story Box */}
        <div className="border border-[#121212] bg-[#FAF9F5] p-6 sm:p-10">
          {/* Story Meta Header */}
          <div className="border-b border-[#E5E4DF] pb-6">
            <div className="flex items-baseline justify-between flex-wrap gap-2 text-xs font-mono text-[#737373]">
              <span>TIMEFRAME: {activeStory.timeframe}</span>
              <span>EPISODE 0{selectedStoryIndex + 1} OF 0{ALL_STORIES.length}</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#121212] mt-2">
              {activeStory.title}
            </h3>
            <div className="font-mono text-xs sm:text-sm text-[#525252] mt-1 uppercase tracking-wider">
              {activeStory.subtitle}
            </div>
            <p className="mt-3 text-sm text-[#444] max-w-3xl leading-relaxed">
              {activeStory.summary}
            </p>
          </div>

          {/* Stepper Progress Bar */}
          <div className="my-8">
            <div className="flex items-center justify-between mb-2 text-xs font-mono text-[#737373]">
              <span>STEP {currentStepIndex + 1} OF {activeStory.steps.length}</span>
              <span>{activeStep.yearRange}</span>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {activeStory.steps.map((st, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => setCurrentStepIndex(sIdx)}
                  className={`h-2 transition-all cursor-pointer ${
                    sIdx <= currentStepIndex ? 'bg-[#121212]' : 'bg-[#DDDCD4]'
                  }`}
                  aria-label={`Jump to step ${sIdx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Step Detail Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white border border-[#E5E4DF] p-6 sm:p-8">
            <div className="md:col-span-8">
              <div className="font-mono text-xs font-bold text-[#D82B2B] uppercase tracking-widest mb-1">
                STEP 0{activeStep.stepNumber} // {activeStep.yearRange}
              </div>
              <h4 className="text-2xl font-bold tracking-tight text-[#121212] mb-4">
                {activeStep.subtitle}
              </h4>
              <p className="text-sm sm:text-base text-[#333] leading-relaxed">
                {activeStep.text}
              </p>

              {/* Focal Movements Tags */}
              <div className="mt-6 flex items-center gap-2 flex-wrap">
                <span className="font-mono text-[11px] text-[#8C8C88] uppercase">Movements in Focus:</span>
                {activeStep.focalMovements.map((mId) => (
                  <button
                    key={mId}
                    onClick={() => onSelectMovement(mId)}
                    className="font-mono text-xs px-2.5 py-1 bg-[#F5F4EE] hover:bg-[#121212] hover:text-white border border-[#DDDCD4] cursor-pointer transition-colors"
                  >
                    {mId.toUpperCase()} →
                  </button>
                ))}
              </div>
            </div>

            {/* Graphic Cue Visual Box */}
            <div className="md:col-span-4 border border-[#121212] bg-[#FAF9F5] p-6 text-center flex flex-col justify-center items-center min-h-[180px]">
              <div className="font-mono text-[10px] text-[#8C8C88] uppercase tracking-wider mb-2">
                DIALECTICAL CUE
              </div>
              <div className="font-bold text-base text-[#121212] leading-snug">
                {activeStep.graphicCue}
              </div>
              <div className="mt-4 w-12 h-0.5 bg-[#D82B2B]" />
            </div>
          </div>

          {/* Stepper Navigation Buttons */}
          <div className="mt-8 flex justify-between items-center text-xs font-mono">
            <button
              onClick={() => setCurrentStepIndex(Math.max(0, currentStepIndex - 1))}
              disabled={currentStepIndex === 0}
              className={`px-4 py-2 border border-[#121212] cursor-pointer transition-colors ${
                currentStepIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#121212] hover:text-white'
              }`}
            >
              ← Previous Step
            </button>

            <div className="flex gap-2">
              {activeStory.steps.map((_, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => setCurrentStepIndex(sIdx)}
                  className={`w-7 h-7 text-xs font-mono font-semibold cursor-pointer border ${
                    currentStepIndex === sIdx
                      ? 'bg-[#121212] text-white border-[#121212]'
                      : 'bg-[#FAF9F5] text-[#737373] border-[#DDDCD4] hover:border-[#121212]'
                  }`}
                >
                  {sIdx + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentStepIndex(Math.min(activeStory.steps.length - 1, currentStepIndex + 1))}
              disabled={currentStepIndex === activeStory.steps.length - 1}
              className={`px-4 py-2 border border-[#121212] cursor-pointer transition-colors ${
                currentStepIndex === activeStory.steps.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#121212] hover:text-white'
              }`}
            >
              Next Step →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
