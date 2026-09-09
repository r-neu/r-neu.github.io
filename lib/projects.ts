export type Project = {
  slug: string;
  title: string;
  type: string;
  deck: string;
  reality: string;
  meta: string[];
  artifact: 'integration' | 'inbound' | 'shopping';
  repo: string;
  demo?: string;
  intro: string;
  problem: string;
  flow: { title: string; body: string }[];
  truth: { built: string; data: string };
  decisions: { title: string; body: string }[];
  testing: string;
  stack: string;
};

export const projects: Project[] = [
  {
    slug: 'integration-ops',
    title: 'Integration Ops',
    type: 'B2B operations',
    deck: 'A recovery tool for support teams, customer admins, and engineers when a live integration fails.',
    reality: 'Working demo. The provider failures are simulated.',
    meta: ['Incident recovery', 'Role-based workflow', 'Live demo'],
    artifact: 'integration',
    repo: 'https://github.com/r-neu/Integration-Ops',
    demo: 'https://ops-mvp.ran-yi-contact.workers.dev/access',
    intro: 'Most integration demos stop once data starts moving. This project starts later, when a live connection fails and several people have to coordinate the recovery.',
    problem: 'A retry button is not enough. A customer may need to fix source data or reconnect an account. An engineer may need to change a mapping or roll out a connector patch. They need one view of the incident, but they should not have the same controls.',
    flow: [
      { title: 'Open the incident', body: 'The team sees who is affected and what failed.' },
      { title: 'Work out who can fix it', body: 'The next step may belong to the customer, support, engineering, or an automatic retry.' },
      { title: 'Apply the right recovery', body: 'The prototype supports data approval, reconnection, selective replay, and a controlled rollout.' },
      { title: 'Keep everyone updated', body: 'Recovery state and customer messages stay with the incident.' },
    ],
    truth: {
      built: 'A role-based incident workspace with five recovery paths, isolated demo runs, customer updates, selective retries, and rollout controls.',
      data: 'Salesforce Easy Spaces sample records. All failure events are simulated; the HubSpot, Google Sheets, and Slack cases follow public provider behavior.',
    },
    decisions: [
      { title: 'The incident is the starting point', body: 'The first screen shows customer impact and the next action. Integration settings and technical detail remain available without taking over the recovery flow.' },
      { title: 'The recovery depends on the failure', body: 'Missing source data stays quarantined. Expired access sends the customer to reconnect. A mapping error goes to engineering.' },
      { title: 'A connector change needs rollout controls', body: 'A shared connector can affect more than one customer. The Slack recovery path includes a canary, health checks, staged rollout, and rollback.' },
    ],
    testing: 'I built five repeatable failure paths and tests for role permissions, isolated demo runs, retry behavior, exposure checks, and rollout gates.',
    stack: 'React, TypeScript, Vinext, Cloudflare Workers, D1, Drizzle, Tailwind CSS',
  },
  {
    slug: 'inbound-response-desk',
    title: 'Inbound Response Desk',
    type: 'B2B workflow',
    deck: 'A first-response tool for website inquiries.',
    reality: 'Working portfolio MVP. Tested with synthetic inquiries.',
    meta: ['Inquiry triage', 'Draft preparation', 'Human review'],
    artifact: 'inbound',
    repo: 'https://github.com/r-neu/inbound-response-desk',
    intro: 'Responding to a website inquiry means reading the request, deciding its priority, finding the right product information, and writing a reply. This prototype prepares that first response for review.',
    problem: 'The same small decisions recur with every inquiry. Response speed and quality can depend on who happens to pick it up and how much other work they have at the time.',
    flow: [
      { title: 'Website inquiry', body: 'A visitor submits the form.' },
      { title: 'Draft and priority', body: 'The request enters the queue with a draft, priority, and reply target.' },
      { title: 'Team review', body: 'The team checks the request, edits the draft if needed, and replies by email.' },
    ],
    truth: {
      built: 'A website form and response queue that prepare a priority, reply target, and draft for review.',
      data: 'Synthetic website inquiries and product information written for the prototype.',
    },
    decisions: [
      { title: 'The scope stops at a reply ready for review', body: 'I left routing, ownership, CRM records, and reporting out of the core flow. Those features depend on the team and tools around the product.' },
      { title: 'Priority and timing come from rules', body: 'The model reads the inquiry and writes the draft. Rules set the priority and reply target, and they check the draft for unsupported claims.' },
      { title: 'The review stays on the main screen', body: 'The request, draft, priority, and reply target appear together so the user can make the final call from one screen.' },
    ],
    testing: 'The tests cover the API, priority rules, draft validation, and browser workflow. Synthetic cases are used to catch classification errors, unsupported claims, repeated wording, and awkward replies.',
    stack: 'React, TypeScript, FastAPI, SQLite, LangGraph, Ollama, Qwen 3.5 9B',
  },
  {
    slug: 'shopping-assistant',
    title: 'Shopping Assistant',
    type: 'E-commerce',
    deck: 'A shopping agent for people who have a rough idea but do not know what to search for yet.',
    reality: 'Working local prototype with a 100-product demo catalog.',
    meta: ['Product discovery', 'Catalog retrieval', 'Local inference'],
    artifact: 'shopping',
    repo: 'https://github.com/r-neu/e-commerce-agent-project',
    intro: 'A shopper may begin with a use case, a budget, or a few preferences rather than a product name. The agent uses that rough request to find products and lets the shopper refine the results in the same conversation.',
    problem: 'Keyword search and filters work once the shopper knows what to ask for. They are less useful at the start, when the shopper is still working out the criteria.',
    flow: [
      { title: 'Rough request', body: 'The shopper explains what they know so far.' },
      { title: 'Catalog search', body: 'The agent retrieves relevant products from the demo catalog.' },
      { title: 'Shortlist', body: 'The response uses the retrieved price, brand, features, and rating.' },
      { title: 'Follow-up', body: 'The shopper narrows the results or asks about shipping and returns.' },
    ],
    truth: {
      built: 'A Gradio chat app with catalog retrieval, product shortlists, follow-up questions, and shipping and return answers.',
      data: 'A 100-product demo catalog and a fine-tuning set with 120,000 product Q&A and review-based examples.',
    },
    decisions: [
      { title: 'The scope ends before checkout', body: 'The prototype covers product discovery, comparison, shipping, and returns. Checkout, payment, tracking, and accounts are outside the scope.' },
      { title: 'Catalog facts are retrieved when needed', body: 'Prices, ratings, brands, and features are retrieved when the question arrives. A catalog update does not require another fine-tuning run.' },
      { title: 'Store policies stay outside the model', body: 'Shipping and return answers come from the relevant policy record rather than the model training data.' },
    ],
    testing: 'A 100-question test set covers price, brand, rating, features, shipping, returns, and general product information. Another 20 cases cover vague wording and unsupported requests.',
    stack: 'Python, Llama 3.1, QLoRA, llama.cpp, BGE-M3, Sentence Transformers, Gradio',
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
