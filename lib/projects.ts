export type Project = {
  slug: string;
  title: string;
  type: string;
  deck: string;
  meta: string;
  artifact: 'integration' | 'inbound' | 'shopping';
  repo: string;
};

export const projects: Project[] = [
  {
    slug: 'integration-ops',
    title: 'Integration Ops',
    type: 'B2B operations',
    deck: 'A shared workspace for teams recovering failed integrations.',
    meta: 'Five recovery paths involving support, customer admins, and engineers',
    artifact: 'integration',
    repo: 'https://github.com/r-neu/Integration-Ops',
  },
  {
    slug: 'inbound-response-desk',
    title: 'Inbound Response Desk',
    type: 'B2B workflow',
    deck: 'A workspace for preparing faster, more consistent responses to website inquiries.',
    meta: 'The team reviews every reply before it is sent',
    artifact: 'inbound',
    repo: 'https://github.com/r-neu/inbound-response-desk',
  },
  {
    slug: 'shopping-assistant',
    title: 'Shopping Assistant',
    type: 'E-commerce',
    deck: 'A shopping agent that turns a rough request into a product shortlist.',
    meta: 'Shoppers can refine results or ask about shipping and returns',
    artifact: 'shopping',
    repo: 'https://github.com/r-neu/e-commerce-agent-project',
  },
];
