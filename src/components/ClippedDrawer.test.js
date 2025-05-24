import React from 'react';
import { render, screen } from '@testing-library/react';
// MemoryRouter is not explicitly needed here if ClippedDrawer already includes it for its internal routing.
// However, ClippedDrawer uses <Link to="..."> which requires a Router context.
// The App component provides this context in the actual application.
// For isolated testing of ClippedDrawer, if its internal MemoryRouter doesn't cover the Links in the Drawer itself,
// we might need to wrap it. Let's assume for now its internal router is sufficient or test and see.
// After reviewing ClippedDrawer.js, it does NOT have its own MemoryRouter. It expects one from a parent.
// So, MemoryRouter is needed here.
import { MemoryRouter } from 'react-router-dom';
import ClippedDrawer from './ClippedDrawer';
import { upperItems, lowerItems } from './../vars/drawerItems';
import { myName, myGithub } from './../vars/homeItems';
import '@testing-library/jest-dom';

it('renders without crashing', () => {
  render(
    <MemoryRouter>
      <ClippedDrawer />
    </MemoryRouter>
  );
});

it('renders the AppBar with correct title and GitHub link', () => {
  render(
    <MemoryRouter>
      <ClippedDrawer />
    </MemoryRouter>
  );
  // Check for AppBar title (myName)
  expect(screen.getByText(myName, { selector: 'h6' })).toBeInTheDocument();

  // Check for GitHub link by href attribute
  // The IconButton has an href={myGithub}
  // The most reliable way to find a link by its destination is by role and href
  const githubLink = screen.getByRole('link', { name: /view source code on github/i }); // aria-label
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('href', myGithub);
});

describe('renders upper navigation links correctly', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ClippedDrawer />
      </MemoryRouter>
    );
  });

  upperItems.forEach(item => {
    it(`renders link for "${item.myName}" with correct href to "${item.to}"`, () => {
      const linkElement = screen.getByRole('link', { name: item.myName });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', item.to);
    });
  });
});

describe('renders lower social links correctly', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ClippedDrawer />
      </MemoryRouter>
    );
  });

  it('renders the "My Social Links" heading', () => {
    // This text is a ListSubheader, not directly queryable by text role.
    // It's better to query for its presence if it's visually a heading.
    // Let's assume it's identifiable by its text content.
    expect(screen.getByText('My Social Links')).toBeInTheDocument();
  });

  lowerItems.forEach(item => {
    it(`renders link for "${item.myName}" with correct href to "${item.URL}"`, () => {
      const linkElement = screen.getByRole('link', { name: item.myName });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', item.URL);
      expect(linkElement).toHaveAttribute('target', '_blank');
    });
  });
});
