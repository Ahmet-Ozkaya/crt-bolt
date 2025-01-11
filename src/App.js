import React from 'react';
    import Navbar from './components/Navbar';
    import Hero from './components/Hero';
    import Footer from './components/Footer';

    function App() {
      return (
        <>
          <Navbar />
          <main>
            <Hero />
            {/* Add other sections here */}
          </main>
          <Footer />
        </>
      );
    }

    export default App;
