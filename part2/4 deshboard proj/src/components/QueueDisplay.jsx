// import "./App.css"
import React from 'react'

function QueueDisplay({queue, onUpdataStates, onRemove}) {

  const getStatusColor = (status) => {
    switch (status) {
      case "Waithing": 
        return 'var(--warning)';
      case "serving": 
        return 'var(--success)';
      case "completed": 
        return 'var(--info)';    
      default: 
        return "var(--text)";
    }
  }

  return (
    <div className='queue-display'>
      <h2>current queue</h2>

        {queue.length === 0 ? (
          <p className='empty-queue'> No cutoner data </p>
        ) : (
          <div className='queue-list'> {queue.map(customer => (
            <div key={customer.id} className='queue-item'>
                <div className='customer-info'></div>
            </div>
        ))} </div>) }
    </div>
  )
}

export default QueueDisplay