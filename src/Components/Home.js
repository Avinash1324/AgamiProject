import React,{useState ,useEffect} from 'react'
import './main.css';
const Home = () => {
    const [userlist, setUserlist] = useState('')
    useEffect(() => {
        getData();
    })
    const getData = async () => {
        let result = await fetch('http://localhost:5000/entry', {
            method: 'GET'
        })
        result = await result.json();
        setUserlist(result);

    }

    return (
        <div className='users'>
            <ul className='userList'>
                <li>S No.</li>
                <li>Name</li>
                <li>Project Name</li>
                <li>Date</li>
                <li>Time</li>
            </ul>
            {
                Array.isArray(userlist) &&
                userlist.map((item, index) => (
                    <ul className='userList' key={index}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.projectName}</li>
                        <li>{item.date}</li>
                        <li>{item.time}</li>
                    </ul>
                ))
            }
        </div>

    )
}

export default Home
