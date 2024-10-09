import Link from 'next/link'
import React from 'react'

export default function SignupPage() {
  return (
      <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
              <div className=" my-6">
                  <h2 className="text-center text-3xl font-extrabold text-white">Sign Up Your Account</h2>
              </div>

              <form className="mt-8 space-y-6" action="#" method="POST">
                  <input type="hidden" name="remember" value="true" />

                  <div>
                      <label htmlFor="password" className=" text-xl font-semibold text-white">
                          Full Name
                      </label>
                      <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete='current-name'
                          required
                          className="rounded-lg relative block w-full px-3 py-2 bg-white text-black placeholder-gray-400 focus:ring-primary border-4 border-primary"
                          placeholder="Full Name.."
                      />
                  </div>

                  <div className="rounded-md shadow-sm -space-y-px">
                      <div className=" my-8">
                          <label htmlFor="email-address" className=" text-white text-xl font-semibold">
                              Email address
                          </label>
                          <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              required
                              className="rounded-lg relative block w-full px-3 py-2 bg-gray-800 text-white placeholder-gray-400 focus:ring-primary border-4 border-primary"
                              placeholder="Email address"
                          />
                      </div>
                  </div>

                  
                      <div>
                          <label htmlFor="password" className=" text-xl font-semibold text-white">
                              Password
                          </label>
                          <input
                              id="password"
                              name="password"
                              type="password"
                              autoComplete="current-password"
                              required
                              className="rounded-lg relative block w-full px-3 py-2 bg-gray-800 text-white placeholder-gray-400 focus:ring-primary border-4 border-primary"
                              placeholder="Password"
                          />
                      </div>

                  <div className="flex items-center justify-between">

                      <div className="text-sm flex gap-4">
                          <div>
                              Already have an Account?
                          </div>
                          <Link href="/auth/login">
                              <div className="font-medium text-primary hover:text-yellow-600">Login</div>
                          </Link>
                      </div>
                  </div>

                  <div>
                      <button
                          type="submit"
                          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-primary hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                      >
                          Sign Up
                      </button>
                  </div>
              </form>
          </div>
      </div>
  )
}
