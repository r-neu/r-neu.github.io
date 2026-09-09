type ProjectArtifactProps = {
  kind: 'integration' | 'inbound' | 'shopping';
  large?: boolean;
};

const failures = [
  ['Salesforce', 'Missing required value', 'Customer admin'],
  ['HubSpot', 'Authorization expires', 'Customer admin'],
  ['Salesforce', 'Mapped value rejected', 'Integration engineer'],
  ['Google Sheets', 'HTTP 429', 'Platform'],
  ['Slack', 'File upload endpoint retired', 'Integration engineer + Support'],
];

export function ProjectArtifact({ kind, large = false }: ProjectArtifactProps) {
  if (kind === 'integration') {
    return (
      <figure className={`artifact integration-artifact ${large ? 'artifact-large' : ''}`}>
        <figcaption><span>Demo coverage</span><span>5 recovery paths</span></figcaption>
        <div className="failure-list">
          {failures.map(([provider, failure, owner]) => (
            <div className="failure-row" key={`${provider}-${failure}`}>
              <strong>{provider}</strong><span>{failure}</span><small>{owner}</small>
            </div>
          ))}
        </div>
        <p>From the working demo</p>
      </figure>
    );
  }

  if (kind === 'inbound') {
    return (
      <figure className={`artifact inbound-artifact ${large ? 'artifact-large' : ''}`}>
        <figcaption><span>Synthetic evaluation case</span><span>pricing_without_timeline</span></figcaption>
        <blockquote>“Could you send pricing information for a 30 person team?”</blockquote>
        <dl className="evaluation-result">
          <div><dt>Expected intent</dt><dd>Pricing</dd></div>
          <div><dt>Expected signal</dt><dd>Medium</dd></div>
          <div><dt>Expected priority</dt><dd>Medium</dd></div>
        </dl>
        <p>From backend/evals/cases.json</p>
      </figure>
    );
  }

  return (
    <figure className={`artifact shopping-artifact ${large ? 'artifact-large' : ''}`}>
      <figcaption><span>Demo catalog test</span><span>Home &amp; Kitchen</span></figcaption>
      <blockquote>“Is Cuisinart Cookware Set - Kitchen Appliances professional grade?”</blockquote>
      <div className="catalog-record">
        <div><span>Retrieved product</span><strong>Cuisinart Cookware Set - Kitchen Appliances</strong></div>
        <dl>
          <div><dt>Price</dt><dd>$261.67</dd></div>
          <div><dt>Rating</dt><dd>4.1</dd></div>
          <div><dt>Feature</dt><dd>Easy Clean</dd></div>
        </dl>
      </div>
      <p>From the 100-product demo catalog and test set</p>
    </figure>
  );
}
