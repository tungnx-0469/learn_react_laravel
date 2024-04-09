import React from 'react'
import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'
import { useState } from 'react'
import { router } from '@inertiajs/react'
function MyLogin() {
    const [email, setEmail] = useState();
    const [password, setPassWord] = useState();

    const handleLogin = (event) => {
        event.preventDefault();
        router.post('/my-login', {email,password})
    }

  return (
    <div className="max-w-3/4 mx-auto justify-content-center p-5 block container">
        <div className="gap-8 columns-2 ...">
            <img src='https://img.freepik.com/free-vector/winter-landscape-background_23-2147714196.jpg?w=1060'/>
            <div className='align-middle justify-content-center'>
            Login page
            <form onSubmit={handleLogin}>
                <InputLabel htmlFor="email" value="Email" />
                <TextInput name="email"  type="email" isFocused={true} value={email} onChange={(e) => setEmail(e.target.value)}/>

                <InputLabel htmlFor="password" value="Password" />
                <TextInput name="password"  type="password" value={password} onChange={(e) => setPassWord(e.target.value)}/>
                <button type="submit" className='bg-blue-400 p-3 m-5 rounded text-white fw-bold'>Login</button>
            </form>
            </div>    
        </div>
    </div>
  )
}

export default MyLogin