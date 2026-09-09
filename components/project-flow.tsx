type ProjectFlowProps = {
  title: string;
  steps: string[];
  note: string;
  large?: boolean;
};

export function ProjectFlow({ title, steps, note, large = false }: ProjectFlowProps) {
  return (
    <div className={`workflow-panel ${large ? 'workflow-panel-large' : ''}`}>
      <div className="workflow-heading">
        <span>Prototype flow</span>
        <span>{title}</span>
      </div>
      <ol>
        {steps.map((step, index) => (
          <li key={step}>
            <span>0{index + 1}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>
      <p>{note}</p>
    </div>
  );
}
