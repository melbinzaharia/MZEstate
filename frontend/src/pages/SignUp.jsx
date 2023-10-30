
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/Oauth';

export default function SignIn() {
  const [formData, setFormData] = useState({}) // to save and handle

  const [error, setError] = useState(null)// to handle error

  const [loading, setLoading] = useState(false)// to show loading

  const navigate = useNavigate();// for navigation

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
      setLoading(true);
     const res = await fetch('/api/auth/signup',
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
      setError(data.message);
      setLoading(false);
      return;
    }
    setLoading(false);
    setError(null);
    navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message)
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='text' placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handleChange} />
        <input type='text' placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange} />
        <input type='text' placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange} />
        <button disabled ={ loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-80 disabled:opacity-70'
        >{loading ? 'Loading....':'Sign-up'}</button>
         <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to = {"/sign-in"}>
          <span className='text-blue-500'>SignIN</span>
        </Link>
       
      </div>
      {error && <p className='text-red-700 mt-5'>{error}</p>}
    </div>
  )
}

