import './App.css'
import Card from './components/Card.jsx'
import Button from './components/Button.jsx'

function App() {

  return (
    <>
      <h1 className='text-blue-600 dark:text-sky-400 border-2 p-4 rounded-xl'>

          Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1>
      <div className='flex gap-2'>
        <Card 
          title="hiiiiiiiiiii"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maxime est, fugiat iure iusto nihil."
        />
        <Card 
          title="helloooooooo"
          paragraph="Set up push notifications or calendar events to stay on track for your learning goals."
        />
        <Card 
          title ="heeeeeeeeee"
          paragraph='Create an online video course, reach students across the globe, and earn money'
        />
      </div>
    </>
  )
}

export default App
