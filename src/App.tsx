import { Routes, Route } from 'react-router-dom';
    import Home from './pages/Home';
    import Calendar from './pages/Calendar';
    import History from './pages/History';
    import Account from './pages/Account';
    import Layout from './components/Layout';

    function App() {
      return (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/history" element={<History />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Layout>
      );
    }

    export default App;
