'use client';

import { useState } from 'react';

// Client-side component
export function ClientComp({ randomValue }: { randomValue: number }) {
  const [dummyValue, setDummyValue] = useState(0); // just of the sake of having a state
  console.log('ClientComp: randomValue', randomValue);

  return <p>Random Value: {randomValue}</p>;
}
