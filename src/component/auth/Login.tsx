import { FC, useState } from 'react'
// import cn from 'classnames'
import styles from "./Login.module.css"
import MyButton from '../../component/myButton/MyButton';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { login } from './authAction';
import { Navigate, useNavigate } from 'react-router-dom';

const Login: FC = () => {
  const { user } = useAppSelector(state => state.auth)
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch()
  
  const navigate = useNavigate()
  function handleLogin() {
    
    console.log({ username, password });
    dispatch(login({ username, password }))
    
    navigate('/')
  }

  if (user) {
    return <Navigate to='/' />
  }
  return (
    <div>
      <p>username: 'kminchelle'</p>
      <p>password: '0lelplR'</p>
      <input type="text" placeholder='username' value={username} onChange={(event) => setUsername(event.target.value)} />
      <input type="password" placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)} />
      <MyButton text='войти' onClick={handleLogin} />
    </div>
  )
}

export default Login