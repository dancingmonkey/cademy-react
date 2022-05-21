import React from 'react';
import { BestSeller } from './BestSeller';

export default class BookList extends React.Component {
  render() {
    return (
      <div className="mx-auto mt-32 max-w-lg">
        <h1>Best Sellers</h1>
        <div>
          <ol className="list-decimal">
            <BestSeller
              title="Glory and War Stuff for Dads"
              author="Sir Eldrich Van Hoorsgaard"
              weeksOnList={10}
            />
            <BestSeller
              title="The Crime Criminals!"
              author="Brenda Sqrentun"
              weeksOnList={2}
            />
            <BestSeller
              title="Subprime Lending For Punk Rockers"
              author="Malcolm McLaren"
              weeksOnList={600}
            />
          </ol>
        </div>
      </div>
    );
  }
}
