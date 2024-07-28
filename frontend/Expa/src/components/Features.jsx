import React from 'react';
import communication from '../assets/communication.svg';
import ethics from '../assets/ethics.svg';
import criticalThinking from '../assets/critical-thinking.svg';
import genderSensitivity from '../assets/genderSenstivity.svg';

export default function Feature() {
  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-8">
      <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
            <img
              className="h-9 w-9"
              src={communication}
              alt="Communication"
            />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Communication</h3>
          <p className="mt-4 text-sm text-gray-600">
            Effective communication strategies to ensure seamless information flow within the organization and with stakeholders.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
            <img
              className="h-9 w-9"
              src={ethics}
              alt="Ethics"
            />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Ethics</h3>
          <p className="mt-4 text-sm text-gray-600">
            Upholding the highest ethical standards in all our operations and interactions, fostering trust and integrity.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <img
              className="h-9 w-9"
              src={criticalThinking}
              alt="Critical Thinking"
            />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Critical Thinking</h3>
          <p className="mt-4 text-sm text-gray-600">
            Encouraging critical thinking to solve problems creatively and make informed decisions that benefit the community.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
            <img
              className="h-9 w-9"
              src={genderSensitivity}
              alt="Gender Sensitivity"
            />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Gender Sensitivity</h3>
          <p className="mt-4 text-sm text-gray-600">
            Promoting gender sensitivity and inclusivity in all our programs, ensuring equal opportunities and respect for all genders.
          </p>
        </div>
      </div>
    </div>
  );
}
