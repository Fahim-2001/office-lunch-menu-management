const ViewChoices = ({ choices }) => {
  return (
    <div className="view-choices">
      <h2>Employee Choices</h2>
      {choices.length === 0 ? (
        <p>No choices submitted yet.</p>
      ) : (
        choices.map((choice, index) => (
          <div key={index} className="choice-item">
            <h3>{new Date(choice.date).toDateString()}</h3>
            <p style={{marginTop:"5px"}}>
              {choice.employee_name} chose {choice.choices.join(', ')}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewChoices;
