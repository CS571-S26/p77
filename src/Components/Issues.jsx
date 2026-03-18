const issues = [
  {
    name: "Stress",
    tip1: "Take a short walk",
    tip2: "Try guided meditation"
  },
  {
    name: "Anxiety",
    tip1: "Deep breathing",
    tip2: "Talk to a friend"
  }
];

function Issues() {
  return (
    <div>
      <h2>Mental Health Issues</h2>
      {issues.map((issue, index) => (
        <div key={index}>
          <h3>{issue.name}</h3>
          <p>Quick Help: {issue.tip1}</p>
          <p>Deeper Help: {issue.tip2}</p>
        </div>
      ))}
    </div>
  );
}

export default Issues;