"use client";

import React from 'react';
import { Calculator } from 'lucide-react';

export default function ScrollToCalculatorButton() {
  return (
    <button
      onClick={() =>
        document.getElementById('instant-pricing')?.scrollIntoView({ behavior: 'smooth' })
      }
      className="btn-coral cursor-pointer"
    >
      <Calculator className="h-5 w-5" />
      Get instant quote
    </button>
  );
}
