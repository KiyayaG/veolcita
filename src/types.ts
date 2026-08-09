/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: string;
  category: string;
  image: string;
  specs: {
    power: string;         // e.g. "510 HP"
    acceleration: string;  // e.g. "3.4 sn"
    topSpeed: string;      // e.g. "318 km/s"
    engine: string;        // e.g. "6 Boxer"
  };
  description: string;
  features: string[];      // e.g. ["PDK Şanzıman", "Karbon Seramik Fren"]
  gallery: string[];
  deliveryTime: string;    // e.g. "~4-6 Hafta"
  isCustomAI?: boolean;
  pinterestUrl?: string;
}

export interface SearchItem {
  id: string;
  brand: string;
  model: string;
  timestamp: string;      // formatted date/time
  timeAgo: string;        // human readable
  carData: Car;
}

export function resolveCarImage(url: string | undefined): string {
  if (!url) return "";
  const trimmed = url.trim();
  // Check if it's already proxied to avoid double-proxying
  if (trimmed.startsWith("/api/pinterest-image?url=")) {
    return trimmed;
  }
  // If it's a direct pinimg asset URL, return directly
  if (trimmed.includes("i.pinimg.com")) {
    return trimmed;
  }
  // Check if it is a Pinterest pin webpage link
  if (
    trimmed.includes("pinterest.com") ||
    trimmed.includes("pinimg.com")
  ) {
    return `/api/pinterest-image?url=${encodeURIComponent(trimmed)}`;
  }
  return trimmed;
}

