import React from 'react'
import {Link, useNavigate} from "react-router-dom"

const Login = () => {
   const navigate = useNavigate()
  return (
    <div className='w-full p-3 mx-auto mt-7 flex justify-center'>
        <form class="bg-white p-4 rounded-lg shadow-lg w-[500px] max-w-md border-2">
          <h2 class="text-2xl font-bold mb-4 text-gray-800">Login User...</h2>

          <div class="mb-4">
              <label for="first-name" class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input type="text" id="first-name" name="first-name" required placeholder='First name'
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"/>
          </div>

          <div class="mb-4">
              <label for="last-name" class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input type="text" id="last-name" name="last-name" required placeholder='Last name'
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"/>
          </div>

          <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" id="email" name="email" required placeholder='Your email'
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"/>
          </div>

          <div class="mb-4">
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input type="tel" id="phone" name="phone" required placeholder='Your phone number'
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"/>
          </div>

          <div class="mb-4">
              <label for="gender" class="block text-sm font-medium text-gray-700 mb-1">Gender</label>
              <select id="gender" name="gender" required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
              </select>
          </div>

          <button type="submit"
              class="w-full bg-violet-900 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:outline-none">
              Submit
          </button>
          <div className='grid grid-cols-2 py-4 gap-6'>
            <button onClick={()=> navigate("/")} className='bg-green-500 py-2 text-white rounded-md'>Go home</button>
            <button onClick={()=> navigate(-1)} className='bg-cyan-600 text-white py-2 rounded-md'>Go back</button>
          </div>
        </form>
    </div>
  )
}

export default Login