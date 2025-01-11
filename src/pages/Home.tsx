import SearchBar from '../components/SearchBar';
    import StaffCard from '../components/StaffCard';
    import { staffData } from '../data/staff';

    export default function Home() {
      return (
        <div className="home-page">
          <div className="hero-section">
            <h1>Find the Right Staff for Your Needs</h1>
            <SearchBar />
          </div>
          
          <div className="featured-staff">
            <h2>Featured Staff Members</h2>
            <div className="staff-grid">
              {staffData.map((staff, i) => (
                <StaffCard key={i} {...staff} />
              ))}
            </div>
          </div>
        </div>
      );
    }
