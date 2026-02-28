/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-light font-sans selection:bg-brand-cream selection:text-brand-brown">
      <Navbar />
      <div id="inicio">
        <Hero />
      </div>
      <Features />
      <Products />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
