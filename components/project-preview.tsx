type ProjectPreviewProps = {
  kind: 'integration' | 'inbound' | 'shopping';
  large?: boolean;
};

export function ProjectPreview({ kind, large = false }: ProjectPreviewProps) {
  if (kind === 'integration') {
    return (
      <div className={`preview integration-preview ${large ? 'preview-large' : ''}`}>
        <div className="preview-topline">
          <span>Integration Ops</span>
          <span className="preview-status"><i /> Live incident</span>
        </div>
        <div className="incident-layout">
          <div className="incident-main">
            <span className="ui-label">Customer impact</span>
            <strong>Slack file delivery has stopped</strong>
            <p>23 affected workflows · Easy Spaces</p>
            <div className="incident-steps">
              <span className="done">Issue scoped</span>
              <span className="active">Canary running</span>
              <span>Fleet rollout</span>
            </div>
          </div>
          <div className="incident-side">
            <span className="ui-label">Next decision</span>
            <strong>Review canary health</strong>
            <div className="health-row"><span>Success rate</span><b>99.4%</b></div>
            <div className="health-row"><span>Error delta</span><b>+0.1%</b></div>
            <button type="button" tabIndex={-1}>Continue rollout</button>
          </div>
        </div>
      </div>
    );
  }

  if (kind === 'inbound') {
    return (
      <div className={`preview inbound-preview ${large ? 'preview-large' : ''}`}>
        <div className="preview-topline"><span>Response desk</span><span>3 open</span></div>
        <div className="inbound-layout">
          <div className="inbound-list">
            <div className="inquiry-row selected"><span className="priority high">High</span><strong>Security review before trial</strong><small>Northstar Labs</small></div>
            <div className="inquiry-row"><span className="priority">Normal</span><strong>Pricing for a 40-person team</strong><small>Archway</small></div>
            <div className="inquiry-row"><span className="priority">Normal</span><strong>Product availability</strong><small>Studio Nine</small></div>
          </div>
          <div className="draft-panel">
            <div className="draft-head"><span>Draft reply</span><b>Reply by 3:30 PM</b></div>
            <p>Hi Maya, thanks for reaching out. I can help with the security review...</p>
            <div className="draft-lines"><i /><i /><i /></div>
            <button type="button" tabIndex={-1}>Review draft</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`preview shopping-preview ${large ? 'preview-large' : ''}`}>
      <div className="preview-topline"><span>Shopping Assistant</span><span>Catalog / 100 items</span></div>
      <div className="shopping-layout">
        <div className="chat-column">
          <div className="chat-bubble user-bubble">I need a cookware set for a small apartment. Good quality, not too expensive.</div>
          <div className="chat-bubble agent-bubble">I found three compact sets under $250. Do you prefer stainless steel or nonstick?</div>
        </div>
        <div className="product-strip">
          <div className="product-tile rust"><i /><strong>10-piece set</strong><span>$189</span></div>
          <div className="product-tile blue"><i /><strong>8-piece set</strong><span>$224</span></div>
          <div className="product-tile yellow"><i /><strong>7-piece set</strong><span>$149</span></div>
        </div>
      </div>
    </div>
  );
}
