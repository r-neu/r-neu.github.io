export type Project = {
  slug: string;
  title: string;
  type: string;
  deck: string;
  meta: string[];
  preview: 'integration' | 'inbound' | 'shopping';
  repo: string;
  demo?: string;
  intro: string;
  problem: string;
  flow: { title: string; body: string }[];
  decisions: { title: string; body: string }[];
  testing: string;
  stack: string;
};

export const projects: Project[] = [
  {
    slug: 'integration-ops',
    title: 'Integration Ops',
    type: 'B2B operations',
    deck: 'A shared recovery workspace for the people involved when a customer integration fails.',
    meta: ['Incident recovery', 'Role-based workflow', 'Working demo'],
    preview: 'integration',
    repo: 'https://github.com/r-neu/Integration-Ops',
    demo: 'https://ops-mvp.ran-yi-contact.workers.dev/access',
    intro: 'A customer integration is already live. Something fails. Support, the customer, and engineering need to recover it without replaying bad data or widening the incident.',
    problem: 'The error is only one part of an integration incident. The harder product problem is making ownership clear and giving each person the right action without hiding the technical context they need.',
    flow: [
      { title: 'See the impact', body: 'The incident opens with the affected customer, records, and workflows rather than a raw error log.' },
      { title: 'Find the owner', body: 'The next step is assigned to the customer, support, engineering, or the platform based on the failure.' },
      { title: 'Recover safely', body: 'The fix may be a data approval, reconnection, selective retry, or a gated connector rollout.' },
      { title: 'Close the loop', body: 'Customer updates and recovery state stay with the incident so progress is visible across roles.' },
    ],
    decisions: [
      { title: 'One incident, different controls', body: 'Support, customer admins, and engineers work from the same incident. Each role sees the context and actions it is responsible for.' },
      { title: 'Fix the problem at the right level', body: 'Missing source data stays quarantined. Expired authorization triggers a tenant reconnection. A shared connector change uses a rollout plan.' },
      { title: 'Make rollout part of the recovery flow', body: 'Canary status, health gates, cohort rollout, and rollback are visible product steps rather than background deployment details.' },
    ],
    testing: 'The demo covers five failure paths across Salesforce, HubSpot, Google Sheets, and Slack. Each visitor gets an isolated run, so the full incident can be stepped through without affecting anyone else.',
    stack: 'React, TypeScript, Vinext, Cloudflare Workers, D1, Drizzle, Tailwind CSS',
  },
  {
    slug: 'inbound-response-desk',
    title: 'Inbound Response Desk',
    type: 'B2B workflow',
    deck: 'A first-response tool that prepares a draft, priority, and reply target from a website inquiry.',
    meta: ['Inquiry triage', 'Human review', 'Local model'],
    preview: 'inbound',
    repo: 'https://github.com/r-neu/inbound-response-desk',
    intro: 'Website inquiries repeat the same work: understand the request, decide how quickly it needs a response, find the right product information, and write the first reply.',
    problem: 'This work is easy to delay and inconsistent when it sits alongside everything else a small B2B team handles. The product focuses on getting each inquiry to a useful first response with less manual preparation.',
    flow: [
      { title: 'Receive', body: 'A website inquiry enters the response queue.' },
      { title: 'Prepare', body: 'The system adds a priority, reply target, and draft based on the message and product information.' },
      { title: 'Review', body: 'The team checks the original request, adjusts the draft when needed, and replies by email.' },
    ],
    decisions: [
      { title: 'Keep the MVP on the first response', body: 'Routing, ownership rules, CRM records, and reporting depend on the team around the tool. The core flow stops once a reply is ready to send.' },
      { title: 'Use rules where consistency matters', body: 'The model interprets the inquiry and writes the draft. Priority, reply targets, and unsupported-claim checks stay rule-based.' },
      { title: 'Keep review in the main flow', body: 'The original inquiry, draft, priority, and reply target appear together. The user can make the final judgment without opening a separate model view.' },
    ],
    testing: 'API, workflow, priority, and draft checks are covered by automated tests. Synthetic inquiries are used to catch classification errors, unsupported claims, repeated wording, and replies that are awkward to send.',
    stack: 'React, TypeScript, FastAPI, SQLite, LangGraph, Ollama, Qwen 3.5 9B',
  },
  {
    slug: 'shopping-assistant',
    title: 'Shopping Assistant',
    type: 'E-commerce',
    deck: 'A shopping agent for people who know roughly what they want, but not what to search for.',
    meta: ['Product discovery', 'Fine-tuned model', 'Local inference'],
    preview: 'shopping',
    repo: 'https://github.com/r-neu/e-commerce-agent-project',
    intro: 'Shoppers do not always begin with a product name or a complete set of filters. They may only know the use case, budget, or a few preferences and work out the rest while browsing.',
    problem: 'A search box works best when the shopper already knows the right words. This project lets the conversation begin earlier, when the request is still rough, and uses the first results to help the shopper narrow it down.',
    flow: [
      { title: 'Describe', body: 'The shopper explains what they need in their own words.' },
      { title: 'Compare', body: 'The agent searches the catalog and returns a short list with the details behind each match.' },
      { title: 'Refine', body: 'The shopper adds a preference, changes the budget, or asks about shipping and returns in the same conversation.' },
    ],
    decisions: [
      { title: 'Stay before the purchase', body: 'The first version covers discovery, comparison, shipping, and returns. Checkout, payment, order tracking, and accounts need customer or transaction data outside this prototype.' },
      { title: 'Retrieve catalog facts at query time', body: 'Prices, ratings, brands, and features stay outside the model. The agent retrieves the current product records before writing an answer.' },
      { title: 'Keep policy answers separate', body: 'Shipping and return information comes from store policy files instead of model memory.' },
    ],
    testing: 'The model was fine-tuned on 120,000 product Q&A and review-based examples. A 100-question test set covers price, brand, rating, features, shipping, returns, and general product information, with another 20 cases for ambiguous and unsupported requests.',
    stack: 'Python, Llama 3.1, QLoRA, llama.cpp, BGE-M3, Sentence Transformers, Gradio',
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
