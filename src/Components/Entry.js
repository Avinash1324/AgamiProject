import React, { useState } from 'react'

const Entry = () => {
  const [name, setName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('');
  const auth = localStorage.getItem('user');
  
  

  const updatetimeSheet = async () => {
    console.log(name, projectName, date.trim(), time);
    let result = await fetch('http://localhost:5000/entry', {
      method: 'POST',
      body: JSON.stringify({ name, projectName, date, time }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    result = await result.json();
    if (result) {
      console.log(result);
      setName('');
      setProjectName('');
      setDate('');
      setTime('');
    }

  }
  return (
    <div className='register'>
      <form className='form'>
        <input className='item' type='text' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input className='item' type='text' placeholder='Enter Project Name' value={projectName} onChange={(e) => setProjectName(e.target.value)} />
        <input className='item' type='date' value={date} onChange={(e) => setDate(e.target.value)} />
        <input className='item' type='time' value={time} onChange={(e) => setTime(e.target.value)} />
      </form>
      <button onClick={updatetimeSheet} >Add</button>
    </div>
  )
}

export default Entry
