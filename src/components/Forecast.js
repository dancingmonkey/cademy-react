import React, { useState, useEffect } from 'react';
import { get } from '../mockBackend/fetch';

export default function Forecast() {
  const [data, setData] = useState();
  const [notes, setNotes] = useState({});
  const [forecastType, setForecastType] = useState('/daily');

  useEffect(() => {
    // alert('Requested data from server...');
    get(forecastType).then(response => {
      // alert('Response: ' + JSON.stringify(response,'',2));
      setData(response.data);
    });
  }, [forecastType]);

  const handleChange =
    index =>
    ({ target }) =>
      setNotes(prev => ({
        ...prev,
        [index]: target.value,
      }));

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mx-auto mt-32 w-1/2 max-w-lg rounded-md border border-secondary bg-slate-800 p-4 ">
      <h1 className="text-xl font-bold">My Weather Planner</h1>
      <div className="flex justify-start pt-2 pb-2 text-primary">
        <button
          onClick={() => setForecastType('/daily')}
          className="mr-2 rounded-sm border-2 border-white  bg-slate-700 p-2  text-white hover:bg-secondary hover:text-primary">
          5-day
        </button>
        <button
          onClick={() => setForecastType('/hourly')}
          className="rounded-sm border-2  border-white bg-slate-700 p-2 text-white  hover:bg-secondary hover:text-primary">
          Today
        </button>
      </div>
      <table className="mt-2 w-full text-left">
        <thead className="">
          <tr className="">
            <th>Summary</th>
            <th>Avg Temp</th>
            <th>Precip</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.summary}</td>
              <td> {item.temp.avg}°F</td>
              <td>{item.precip}%</td>
              <td>
                <input
                  className="bg-slate-700 p-1"
                  placeHolder="note"
                  value={notes[item.id] || ''}
                  onChange={handleChange(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
