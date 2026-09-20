import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { myName, myOccupation } from './vars/homeItems';
import { upperItems as drawerItems } from './vars/drawerItems';

// Mock AnimatedSwitch
jest.mock('react-router-transition', () => {
  const ActualReactRouterDom = jest.requireActual('react-router-dom');
  return {
    ...ActualReactRouterDom, // Export all of react-router-dom
    AnimatedSwitch: ActualReactRouterDom.Switch // Alias Switch to AnimatedSwitch
  };
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders ClippedDrawer', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(myName)).toBeInTheDocument();
});

describe('Navigation', () => {
  test('renders Home page by default', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(myName)).toBeInTheDocument();
    expect(screen.getByText(myOccupation)).toBeInTheDocument();
  });

  test('navigates to Skills page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const skillsLink = screen.getByRole('link', { name: drawerItems.find(item => item.to === '/skills').myName });
    fireEvent.click(skillsLink);
    expect(screen.getByText(drawerItems.find(item => item.to === '/skills').myName)).toBeInTheDocument();
  });

  test('navigates to Projects page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const projectsLink = screen.getByRole('link', { name: drawerItems.find(item => item.to === '/projects').myName });
    fireEvent.click(projectsLink);
    expect(screen.getByText(drawerItems.find(item => item.to === '/projects').myName)).toBeInTheDocument();
  });

  test('navigates to Contact page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const contactLink = screen.getByRole('link', { name: drawerItems.find(item => item.to === '/contact').myName });
    fireEvent.click(contactLink);
    expect(screen.getByText(drawerItems.find(item => item.to === '/contact').myName)).toBeInTheDocument();
  });
});
