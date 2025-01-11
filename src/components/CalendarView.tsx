import { useState } from 'react';
    import { format, addDays, startOfWeek } from 'date-fns';
    import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

    export default function CalendarView() {
      const [currentWeek, setCurrentWeek] = useState(new Date());

      const weekDays = Array.from({ length: 7 }).map((_, i) =>
        addDays(startOfWeek(currentWeek), i)
      );

      const handleWeekChange = (direction: 'prev' | 'next') => {
        setCurrentWeek(prev => 
          addDays(prev, direction === 'prev' ? -7 : 7)
        );
      };

      return (
        <div className="calendar-view">
          <div className="calendar-header">
            <button onClick={() => handleWeekChange('prev')}>
              <FiChevronLeft />
            </button>
            <h3>{format(currentWeek, 'MMMM yyyy')}</h3>
            <button onClick={() => handleWeekChange('next')}>
              <FiChevronRight />
            </button>
          </div>
          <div className="week-grid">
            {weekDays.map((day, i) => (
              <div key={i} className="day-cell">
                <div className="day-header">
                  {format(day, 'EEE')}
                  <span>{format(day, 'd')}</span>
                </div>
                <div className="availability">
                  {/* Render available staff for this day */}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
