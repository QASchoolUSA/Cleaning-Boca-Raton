"use client";

import PriceCalculator from './PriceCalculator';
import { DEFAULT_PRICING_CONFIG, type PricingConfig } from '@/lib/pricing';

/** Passes server-resolved prices into the client calculator. */
const PriceCalculatorLoader = ({
  config = DEFAULT_PRICING_CONFIG,
}: {
  config?: PricingConfig;
}) => <PriceCalculator config={config} />;

export default PriceCalculatorLoader;
