import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from './Projects'; // This is the component we are testing
import { androidApps, androidLibs, desktopApps, webApps, NDAs, others } from './../vars/projectItems'; // Import the project lists
import '@testing-library/jest-dom';

// Mock the ProjectGridItems component (aliased as WorksGridItems in Projects.js)
jest.mock('./sub/ProjectGridItems', () => (props) => (
  <div data-testid="project-grid-items"> {/* Use a consistent testid */}
    <h2>{props.name}</h2>
    <ul>
      {props.list.map(item => <li key={item.title}>{item.title}</li>)}
    </ul>
  </div>
));

it('renders without crashing', () => {
  render(<Projects />);
});

describe('renders project categories with correct items', () => {
  beforeEach(() => {
    render(<Projects />);
  });

  it('renders correct number of ProjectGridItems components', () => {
    // androidApps, androidLibs, desktopApps, webApps, NDAs, others -> 6 categories
    expect(screen.getAllByTestId('project-grid-items')).toHaveLength(6);
  });

  it('renders "Android Apps" section with correct projects', () => {
    expect(screen.getByText('Android Apps')).toBeInTheDocument();
    if (androidApps.length > 0) {
      expect(screen.getByText(androidApps[0].title)).toBeInTheDocument();
    }
  });

  it('renders "Android Libraries" section with correct projects', () => {
    expect(screen.getByText('Android Libraries')).toBeInTheDocument();
    if (androidLibs.length > 0) {
      expect(screen.getByText(androidLibs[0].title)).toBeInTheDocument();
    }
  });

  it('renders "Desktop Apps/Scripts" section with correct projects', () => {
    expect(screen.getByText('Desktop Apps/Scripts')).toBeInTheDocument();
    if (desktopApps.length > 0) {
      expect(screen.getByText(desktopApps[0].title)).toBeInTheDocument();
    }
  });

  it('renders "Web Apps" section with correct projects', () => {
    expect(screen.getByText('Web Apps')).toBeInTheDocument();
    if (webApps.length > 0) {
      expect(screen.getByText(webApps[0].title)).toBeInTheDocument();
    }
  });

  it('renders "NDAs (Non Disclosure Agreements)" section with correct projects', () => {
    expect(screen.getByText('NDAs (Non Disclosure Agreements)')).toBeInTheDocument();
    if (NDAs.length > 0) {
      expect(screen.getByText(NDAs[0].title)).toBeInTheDocument();
    }
  });

  it('renders "Others" section with correct projects', () => {
    expect(screen.getByText('Others')).toBeInTheDocument();
    if (others.length > 0) {
      expect(screen.getByText(others[0].title)).toBeInTheDocument();
    }
  });
});
