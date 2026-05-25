import { render, screen, within } from '@testing-library/react';
import Portfolio from './components/Portfolio';

test('renders the Charlie project in the portfolio grid', () => {
  render(<Portfolio />);

  const projectHeading = screen.getByRole('heading', { name: /charlie intelligence platform/i });
  const projectCard = projectHeading.closest('article');

  expect(projectHeading).toBeInTheDocument();
  expect(projectCard).not.toBeNull();
  expect(within(projectCard).getByRole('link', { name: /view project/i })).toHaveAttribute(
    'href',
    'https://github.com/shawn-wjh/SENG3011_W13A_Charlie'
  );
  expect(within(projectCard).getByText('AWS CDK')).toBeInTheDocument();
});
