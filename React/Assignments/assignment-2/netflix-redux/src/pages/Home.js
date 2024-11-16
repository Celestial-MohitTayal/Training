import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../redux/userSlice';
import store from '../redux/store';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(store => store.user.name)
  const navigate = useNavigate()

  return (
    <div>
      Home
      <h1>{userName}</h1>
      <button onClick={() => {dispatch(removeUser()); navigate('/') } }>signout</button>
    </div>
  )
}

export default Home
