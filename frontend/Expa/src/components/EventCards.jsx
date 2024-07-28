import React from 'react';

export function EventCards() {
  const events = [
    {
      id: 1,
      title: 'Tech Conference 2024',
      date: 'August 15, 2024',
      description: 'Join us for the biggest tech conference of the year, featuring industry leaders and cutting-edge technology showcases.',
      image: 'https://pbs.twimg.com/media/GQ-g_kfXwAAoGUl?format=jpg&name=large',
    },
    {
      id: 2,
      title: 'Innovation Workshop',
      date: 'September 10, 2024',
      description: 'A hands-on workshop where participants can learn about the latest innovations in technology and how to apply them.',
      image: 'https://www.bnmit.org/wp-content/uploads/2021/03/P8M.jpeg',
    },
    {
      id: 3,
      title: 'Startup Pitch Day',
      date: 'October 5, 2024',
      description: 'An exciting day for startups to pitch their ideas to investors and network with industry professionals.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3OZIsQSzubtWnrndo9_SEXFALlZiVoa5eQ&s',
    },
  ];

  return (
    <div className="flex space-x-4 overflow-x-auto p-4 justify-center">
      {events.map((event) => (
        <div key={event.id} className="w-[300px] rounded-md border">
          <img
            src={event.image}
            alt={event.title}
            className="h-[200px] w-full rounded-md object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold">{event.title}</h1>
            <p className="text-sm text-gray-500">{event.date}</p>
            <p className="mt-3 text-sm text-gray-600">{event.description}</p>
            <button
              type="button"
              className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}