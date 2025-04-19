'use client'

import React, { useEffect, useState } from 'react'

export default function Clock() {
    const [timeString, setTimeString] = useState('');
  const [dateString, setDateString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setDateString(now.toLocaleDateString('en-US', { weekday: 'long' }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='text-xs col-span-3'>
        <p>Buenos Aires, Argentina</p>
        <p className='text-[#9B9B9B]'>{dateString}, {timeString} (GMT-3)</p>
    </div>
  )
}
