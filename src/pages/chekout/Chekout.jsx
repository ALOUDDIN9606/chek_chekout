import React from 'react'

const Chekout = () => {
  return (
    <div className='container min-h-[80vh] flex flex-wrap justify-center items-center'>
          <form class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md border-2">
              <h2 class="text-2xl font-bold mb-4 text-gray-800">Chekout</h2>

              <div class="mb-4">
                  <label for="first-name" class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" id="first-name" name="first-name" required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"/>
              </div>

              <div class="mb-4">
                  <label for="last-name" class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" id="last-name" name="last-name" required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"/>
              </div>

              <div class="mb-4">
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"/>
              </div>

              <button type="submit"
                  class="w-full bg-violet-900 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none">
                  Send message
              </button>
          </form>
      </div>
        
  )
}

export default Chekout

