import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FloatingNav(){
  const nav = useNavigate();
  return (
    <div className="fab-group">
      <div className="flex flex-col items-end">
        <button aria-label="Contact" title="Contact" className="fab" onClick={()=>nav('/learn')}> 
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 10l5 3 5-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 3v7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="fab-label">Contact / Book</div>
      </div>

      <div className="flex flex-col items-end">
        <button aria-label="Learn more" title="Learn more" className="fab fab-small" onClick={()=>nav('/learn')}> 
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 8v4l2 2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="fab-label">Learn more</div>
      </div>

      <div className="flex flex-col items-end">
        <button aria-label="Home" title="Home" className="fab fab-small" onClick={()=>nav('/')}> 
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 9.5L12 4l9 5.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="fab-label">Home</div>
      </div>
    </div>
  )
}
