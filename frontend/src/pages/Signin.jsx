
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart, signInFailure, signInSuccess } from '../redux/user/userSlice'

export default function SignIn() {
  const [formData, setFormData] = useState({}) // to save and handle

  const { loading, error } = useSelector((state) => state.user)// using redux instead of individual loading and error state

  const navigate = useNavigate();// for navigation

  const dispatch = useDispatch();

  const handleChange = (e) => { // to handle changes in form
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value
      }
    )
  }

  const handleSubmit = async (e) => {// to handle submission
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message))
        return;
      }
      dispatch(signInSuccess(data))
      navigate("/home");
    } catch (error) {
      dispatch(signInFailure(error))
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='text' placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange} />
        <input type='text' placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-80 disabled:opacity-70'
        >{loading ? 'Loading....' : 'Sign-in'}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont Have an account?</p>
        <Link to={"/sign-up"}>
          <span className='text-blue-500'>SignUp</span>
        </Link>
      </div>
      {error && <p className='text-red-700 mt-5'>{error}</p>}
    </div>
  )
}

