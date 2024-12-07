import React from 'react'
import { useStateValue } from '../../context'
import { useNavigate } from 'react-router-dom'

const Help = () => {
  const navigate = useNavigate()
  return (
    <div class="help-section p-6 container py-5 min-h-[80vh] flex flex-wrap justify-center items-center">
       <div className='bg-slate-200 p-8 rounded-md w-[70%]'>
          <h1 class="text-2xl font-bold mb-4">How Can We Help You?</h1>

          <div>
              <h2 class="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
              <ul>
                  <li><a href="#account-help" class="text-blue-500">How to create an account?</a></li>
                  <li><a href="#payment-issues" class="text-blue-500">What to do if a payment fails?</a></li>
              </ul>
          </div>

          <div class="mt-6">
              <h2 class="text-xl font-semibold mb-2">Contact Us</h2>
              <p>Email: <a href="mailto:support@example.com" class="text-blue-500">support@example.com</a></p>
              <p>Phone: +123-456-7890</p>
          </div>

          <form class="mt-6">
              <label for="query" class="block text-sm font-medium">Describe your issue:</label>
              <textarea required id="query" name="query" rows="4" class="w-full p-2 border rounded-lg"></textarea>
              <button type="submit" class="mt-4 bg-blue-500 text-white py-2 px-7 rounded">Submit</button>
          </form>
          <div className='text-center'>
            <button className='hover:text-red-600 px-8 py-2 text-[18px] rounded-md text-violet-900' onClick={() => navigate("/")}>Go Home</button>
          </div>
        </div>
    </div>
  )
}

export default Help