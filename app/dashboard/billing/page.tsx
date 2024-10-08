"use client";
import React from 'react';
import { CircleCheckBig } from 'lucide-react';

function Billing() {
  return (
    <div>
      <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6 sm:py-8">
        <h2 className="text-center font-extrabold text-4xl text-primary">Upgrade To CogniCreate Prime</h2>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:items-center sm:justify-center px-10">
        <div className="rounded-2xl bg-white border border-gray-200 p-5 hover:border-primary hover:border-2 hover:scale-105">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Free
            </h2>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-primary sm:text-2xl">₹ 0</strong>
              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
          </div>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-1">
              <CircleCheckBig className="text-green-500" />
              <span className="text-gray-700 px-2"> 10,000 Words/Month</span>
            </li>
            <li className="flex items-center gap-1">
              <CircleCheckBig className="text-green-500" />
              <span className="text-gray-700 px-2"> 10+ Content Templates </span>
            </li>
            <li className="flex items-center gap-1">
              <CircleCheckBig className="text-green-500" />
              <span className="text-gray-700 px-2"> Unlimited Download & Copy </span>
            </li>
            <li className="flex items-center gap-1">
              <CircleCheckBig className="text-green-500" />
              <span className="text-gray-700 px-2"> 1 Month of History </span>
            </li>
          </ul>
          <a
            href="/dashboard"
            className="mt-8 block rounded-full border border-indigo-600 px-12 py-3 text-center
            text-md font-medium bg-gray-400 text-white hover:ring-1 hover:ring-indigo-600
            hover:text-black duration-500 focus:outline-none cursor-pointer">
            Currently Active Plan
          </a>
        </div>
        <div className="rounded-2xl bg-white border border-gray-200 p-5 hover:border-primary hover:border-2 hover:scale-105">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Prime
            </h2>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-primary sm:text-2xl">₹ 100</strong>
              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
          </div>
          <ul className="m-6 space-y-2">
            <li className="flex items-center gap-1">
              <CircleCheckBig className="text-green-500" />
              <span className="text-gray-700 px-2"> 10,00,000 Words/Month </span>
            </li>
            <li className="flex items-center gap-1">
              <CircleCheckBig className="text-green-500" />
              <span className="text-gray-700 px-2"> 10+ Content Templates </span>
            </li>
            <li className="flex items-center gap-1">
              <CircleCheckBig className="text-green-500" />
              <span className="text-gray-700 px-2"> Unlimited Download & Copy </span>
            </li>
            <li className="flex items-center gap-1">
              <CircleCheckBig className="text-green-500" />
              <span className="text-gray-700 px-2"> 1 Year of History </span>
            </li>
          </ul>
          <a
            href='https://buy.stripe.com/test_5kA2bp3Vn8medEY8ww'
            className="mt-8 block rounded-full border border-indigo-600 px-12 py-3 text-center
            text-md font-medium text-white bg-gradient-to-r from-indigo-700 to-blue-400
            hover:ring-2 hover:ring-indigo-600 hover:text-black duration-500 focus:outline-none
            cursor-pointer">
            Be Our Prime Member
          </a>
        </div>
      </div>
    </div>
  )
}

export default Billing;