import React from 'react';

const ViewChoices = ({ choices }) => {
  return (
    <div>
      <h1>Employee Choices</h1>
      {choices.length === 0 ? (
        <p>No choices submitted yet.</p>
      ) : (
        choices.map((choice, index) => (
          <div key={index}>
            <h2>{new Date(choice.date).toDateString()}</h2>
            <p>
              {choice.employeeName} chose {choice.choices.join(', ')}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewChoices;
