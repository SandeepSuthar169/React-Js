import "./App.css"
import { useState } from "react"
import QueueForm   from "./components/QueueForm.jsx"
import QueueDisplay from "./components/QueueDisplay.jsx";

export default function App(){
  
  const [queue, setQueue] = useState([1, 2, 3]);

  const addToQueue = (customer) => {
      setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }]);
  };

  const updateStatus = (id, newStatus) => {
    setQueue(queue.map(customer => 
      customer.id === id ? { ...customer, status: newStatus } : customer
    ));
  };

  const removeFromQueue = (id) => {
    setQueue(queue.filter(customer => customer.id !== id));
  };

  return (
    <div className="app">
      <header>
        <h1>Queue Management Application</h1>
        <p>Manage your customers efficiently</p>
      </header>
      <main>
        <QueueForm onAdd={addToQueue} />
        <QueueDisplay queue={queue}
        onUpdataStates={updateStatus}
        onRemove={removeFromQueue}
        />

        {/* <h1>QueueDisplay</h1> */}
      </main>
    </div>
  )
}