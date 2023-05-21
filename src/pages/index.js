import { Suspense } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('/components/Navbar'));
const JohnnyBravoComponent = dynamic(() => import('/components/JohnnyBravoComponent'));
const About = dynamic(() => import('/components/About'));
const Footer = dynamic(() => import('/components/Footer'));

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Navbar/> 
      <Suspense fallback={<div>Loading...</div>}>
        <JohnnyBravoComponent />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}
