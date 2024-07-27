import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const sessions = [
  {
    sessionName: 'Session 1',
    location: 'Mumbai',
    email: 'info@expaiindia.com',
    date: '2024-08-10',
  },
  {
    sessionName: 'Session 2',
    location: 'Delhi',
    email: 'contact@expaiindia.com',
    date: '2024-09-15',
  },
  {
    sessionName: 'Session 3',
    location: 'Bangalore',
    email: 'support@expaiindia.com',
    date: '2024-10-20',
  },
  {
    sessionName: 'Session 4',
    location: 'Kolkata',
    email: 'training@expaiindia.com',
    date: '2024-11-05',
  },
];

export default function Trainer() {
  const handleRegister = () => {
    toast.success('Registered successfully!');
  };

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 bg-red-300 rounded-md p-2">
          <div>
            <h2 className="text-lg font-semibold">Sessions</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all sessions organized by EXPA India. These sessions focus on key aspects of NCC training, including communication, critical thinking, ethics, and gender sensitivity.
            </p>
          </div>

        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        <span>Session Name</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Location
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Select
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {sessions.map((session) => (
                      <tr key={session.sessionName} className="divide-x divide-gray-200">
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{session.sessionName}</div>
                              <div className="text-sm text-gray-500">{session.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900">{session.location}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex space-x-2">
                            <button
                              type="button"
                              className="rounded-md bg-green-100 px-3 py-1 text-xs font-semibold text-green-800"
                              onClick={handleRegister}
                            >
                              REGISTER
                            </button>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                          {session.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 w-full border-gray-300">
          <div className="mt-2 flex items-center justify-end">
            <div className="space-x-2">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
