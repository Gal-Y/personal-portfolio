import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const renderPortfolio = () => render(<MemoryRouter><Portfolio /></MemoryRouter>);

test('renders the Charlie project in the portfolio grid', () => {
  renderPortfolio();

  const projectHeading = screen.getByRole('heading', { name: /charlie intelligence platform/i });
  const projectCard = projectHeading.closest('article');

  expect(projectHeading).toBeInTheDocument();
  expect(projectCard).not.toBeNull();
  expect(within(projectCard).getByRole('link', { name: /source code/i })).toHaveAttribute(
    'href',
    'https://github.com/shawn-wjh/SENG3011_W13A_Charlie'
  );
  expect(within(projectCard).getByText('AWS CDK')).toBeInTheDocument();
});

test('switches between projects and certifications', async () => {
  renderPortfolio();

  const projectsTab = screen.getByRole('button', { name: 'Projects' });
  const certificationsTab = screen.getByRole('button', { name: 'Certifications' });

  expect(projectsTab).toHaveAttribute('aria-pressed', 'true');
  expect(certificationsTab).toHaveAttribute('aria-pressed', 'false');

  fireEvent.click(certificationsTab);

  expect(certificationsTab).toHaveAttribute('aria-pressed', 'true');
  expect(await screen.findByRole('heading', { name: 'AWS Certified Solutions Architect - Associate' })).toBeInTheDocument();
});

test('clearly separates live and private projects', () => {
  renderPortfolio();

  const healthcareCard = screen.getByRole('heading', { name: 'Healthcare Referral Demo Platform' }).closest('article');
  const dataLabCard = screen.getByRole('heading', { name: 'Data Engineering Prep Lab' }).closest('article');

  expect(within(healthcareCard).getByText('Private prototype')).toBeInTheDocument();
  expect(within(healthcareCard).queryByRole('link', { name: /live demo/i })).not.toBeInTheDocument();
  expect(within(dataLabCard).getByText('Live on GitHub Pages')).toBeInTheDocument();
  expect(within(dataLabCard).getByRole('link', { name: /live demo/i })).toHaveAttribute(
    'href',
    'https://gal-y.github.io/quantium-data-engineer-prep/'
  );
});

test('renders the contact form instead of the coming soon placeholder', () => {
  render(<Contact />);

  expect(screen.getByRole('textbox', { name: 'Name' })).toBeInTheDocument();
  expect(screen.getByRole('textbox', { name: 'Email' })).toBeInTheDocument();
  expect(screen.getByRole('textbox', { name: 'Message' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  expect(screen.queryByText(/coming soon/i)).not.toBeInTheDocument();
});
