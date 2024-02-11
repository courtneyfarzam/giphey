import Homepage from '@/components/Homepage';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giphey | Home',
  description: 'Home page for Giphey.',
};

export default function Home() {
  return (
    <>
      <Homepage />
    </>
  );
}