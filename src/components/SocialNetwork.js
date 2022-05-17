import React, { useState, useEffect } from 'react';
import { get } from '../mockBackend/fetch';

export default function SocialNetwork() {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    get('/menu').then(response => {
      setMenu(response.data);
    });
  }, []);

  const [newsFeed, setNewsFeed] = useState(null);
  useEffect(() => {
    get('/news-feed').then(response => {
      setNewsFeed(response.data);
    });
  }, []);

  const [friends, setFriends] = useState(null);
  useEffect(() => {
    get('/friends').then(response => {
      setFriends(response.data);
    });
  }, []);

  return (
    <div className="mx-auto mt-32 max-w-3xl pb-16 text-center">
      <h1 className="text-4xl font-bold">My Network</h1>
      {!menu ? (
        <p>Loading..</p>
      ) : (
        <nav className="py-8">
          {menu.map(menuItem => (
            <button
              key={menuItem}
              className="border bg-slate-800 p-4 hover:bg-secondaryLight hover:text-primary">
              {menuItem}
            </button>
          ))}
        </nav>
      )}
      <div className="flex justify-evenly">
        {!newsFeed ? (
          <p>Loading..</p>
        ) : (
          <section>
            {newsFeed.map(({ id, title, message, imgSrc }) => (
              <article key={id}>
                <h3 className="py-2 text-xl font-bold">{title}</h3>
                <p className="">{message}</p>
                <img src={imgSrc} alt="" className="mx-auto" />
              </article>
            ))}
          </section>
        )}
        {!friends ? (
          <p>Loading..</p>
        ) : (
          <aside className="relative text-left">
            <ul>
              {friends
                .sort((a, b) => (a.isOnline && !b.isOnline ? -1 : 0))
                .map(({ id, name, isOnline }) => (
                  <li
                    key={id}
                    className={
                      isOnline
                        ? `pl-6 before:absolute before:left-0 before:text-green-500 before:content-['•']`
                        : `pl-6 before:absolute before:left-0 before:text-red-500 before:content-['•']`
                    }>
                    {name}
                  </li>
                ))}
            </ul>
          </aside>
        )}
      </div>
    </div>
  );
}

// li:before {
//   position: absolute;
//   content: "•";
//   color: green;
//   left: 0;
// }

// li.offline:before {
//   color: red;
// }
