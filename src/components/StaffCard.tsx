import { motion } from 'framer-motion';
    import { FaStar } from 'react-icons/fa';

    interface StaffCardProps {
      name: string;
      photo: string;
      rating: number;
      skills: string[];
      rate: number;
      available: boolean;
    }

    export default function StaffCard({
      name,
      photo,
      rating,
      skills,
      rate,
      available
    }: StaffCardProps) {
      return (
        <motion.div 
          className="staff-card"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="card-header">
            <img src={photo} alt={name} />
            <div className="status-badge" data-available={available}>
              {available ? 'Available' : 'Unavailable'}
            </div>
          </div>
          <div className="card-body">
            <h3>{name}</h3>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < rating ? 'filled' : ''} />
              ))}
            </div>
            <div className="skills">
              {skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="card-footer">
            <span className="rate">${rate}/hr</span>
            <button className="btn-primary">View Profile</button>
          </div>
        </motion.div>
      );
    }
