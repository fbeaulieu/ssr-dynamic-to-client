import { getRandomValue } from '@/libs/getRandomValue';
import { ClientComp } from './ClientComp';

// Server-side component
export default async function ServerComp() {
  const randomValue = await getRandomValue();

  console.log('ServerComp: randomValue', randomValue);
  return (
    <div>
      <ClientComp randomValue={randomValue} />
    </div>
  );
}
