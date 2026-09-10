export type Project = {
  slug: string;
  title: string;
  type: string;
  deck: string;
  artifact: 'integration' | 'inbound' | 'shopping';
  repo: string;
};

export const projects: Project[] = [
  {
    slug: 'integration-ops',
    title: 'Integration Ops',
    type: 'B2B operations',
    deck: 'A shared workspace for teams recovering failed integrations.',
    artifact: 'integration',
    repo: 'https://github.com/r-neu/Integration-Ops',
  },
  {
    slug: 'inbound-response-desk',
    title: 'Inbound Response Desk',
    type: 'B2B workflow',
    deck: 'A workspace for preparing faster, more consistent responses to website inquiries.',
    artifact: 'inbound',
    repo: 'https://github.com/r-neu/inbound-response-desk',
  },
  {
    slug: 'shopping-assistant',
    title: 'Shopping Assistant',
    type: 'E-commerce',
    deck: 'A shopping agent that turns a rough request into a product shortlist.',
    artifact: 'shopping',
    repo: 'https://github.com/r-neu/e-commerce-agent-project',
  },
];
