import React, { useState } from 'react';

export default function EditProfile() {
  const [profile, setProfile] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    alert(JSON.stringify(profile, '', 2));
  };

  return (
    <div className="mx-auto mt-32 max-w-lg rounded-sm bg-slate-800 p-2">
      <form onSubmit={handleSubmit} className="flex flex-col text-white">
        <input
          className="m-1 rounded-sm border border-secondary bg-primaryDark p-1 outline-none"
          onChange={handleChange}
          value={profile.firstName || ''}
          name="firstName"
          type="text"
          placeholder="First Name"
        />
        <input
          className="m-1 rounded-sm border border-secondary bg-primaryDark p-1 outline-none"
          onChange={handleChange}
          value={profile.lastName || ''}
          type="text"
          name="lastName"
          placeholder="Last Name"
        />
        <input
          className="m-1 rounded-sm border border-secondary bg-primaryDark p-1 outline-none"
          onChange={handleChange}
          value={profile.bday || ''}
          type="date"
          name="bday"
        />
        <input
          className="m-1 rounded-sm border border-secondary bg-primaryDark p-1 outline-none"
          onChange={handleChange}
          value={profile.password || ''}
          type="password"
          name="password"
          placeholder="Password"
        />
        <button
          className="m-1 rounded-sm border border-transparent bg-secondary text-primary hover:border hover:border-secondary hover:bg-primaryDark hover:text-white"
          type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
