import React from 'react';

const sessions = [
  {
    sessionName: 'Effective Communication Skills',
    location: 'Mumbai',
    email: 'info@expaiindia.com',
    date: '2024-08-10',
    image:
      'https://images.unsplash.com/photo-1506748686214e9df14a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTE2NzN8MHwxfGFsbHwxfHx8fHx8fHx8MTY4NjA1MTU2MQ&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    sessionName: 'Critical Thinking and Problem Solving',
    location: 'Delhi',
    email: 'contact@expaiindia.com',
    date: '2024-09-15',
    image:
      'https://images.unsplash.com/photo-1589187209784-1c40e2c5f844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTE2NzN8MHwxfGFsbHwxfHx8fHx8fHx8MTY4NjA1MTYwMw&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    sessionName: 'Ethics and Integrity in Leadership',
    location: 'Bangalore',
    email: 'support@expaiindia.com',
    date: '2024-10-20',
    image:
      'https://images.unsplash.com/photo-1576061793051-d4a2b6d32ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTE2NzN8MHwxfGFsbHwxfHx8fHx8fHx8MTY4NjA1MTY1OQ&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    sessionName: 'Gender Sensitivity Training',
    location: 'Kolkata',
    email: 'training@expaiindia.com',
    date: '2024-11-05',
    image:
      'https://images.unsplash.com/photo-1574158622688-f0662f13a6b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTE2NzN8MHwxfGFsbHwxfHx8fHx8fHx8MTY4NjA1MTY4OQ&ixlib=rb-1.2.1&q=80&w=400',
  },
];

export default function Trainer() {
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
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new session
            </button>
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
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={session.image}
                                alt={session.sessionName}
                              />
                            </div>
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
                            >
                              Yes
                            </button>
                            <button
                              type="button"
                              className="rounded-md bg-red-100 px-3 py-1 text-xs font-semibold text-red-800"
                            >
                              No
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
    </>
  );
}