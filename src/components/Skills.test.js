import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from './Skills';
import { languages, frameworks, others } from './../vars/skillItems'; // Import the skill lists
import '@testing-library/jest-dom';

// Mock the SkillGridItems component
jest.mock('./sub/SkillGridItems', () => (props) => (
  <div data-testid="skill-grid-items">
    <h2>{props.name}</h2>
    <ul>
      {props.list.map(item => <li key={item.title}>{item.title}</li>)}
    </ul>
  </div>
));

it('renders without crashing', () => {
  render(<Skills />);
});

describe('renders skill categories with correct items', () => {
  beforeEach(() => {
    render(<Skills />);
  });

  it('renders three SkillGridItems components', () => {
    expect(screen.getAllByTestId('skill-grid-items')).toHaveLength(3);
  });

  it('renders "Programming/Markup Languages" section with correct skills', () => {
    expect(screen.getByText('Programming/Markup Languages')).toBeInTheDocument();
    // Check for a few specific skills from the languages list
    if (languages.length > 0) {
      expect(screen.getByText(languages[0].title)).toBeInTheDocument();
    }
    if (languages.length > 1) {
      expect(screen.getByText(languages[1].title)).toBeInTheDocument();
    }
  });

  it('renders "Libraries/Frameworks" section with correct skills', () => {
    expect(screen.getByText('Libraries/Frameworks')).toBeInTheDocument();
    // Check for a few specific skills from the frameworks list
    if (frameworks.length > 0) {
      expect(screen.getByText(frameworks[0].title)).toBeInTheDocument();
    }
    if (frameworks.length > 1) {
      expect(screen.getByText(frameworks[1].title)).toBeInTheDocument();
    }
  });

  it('renders "Others" section with correct skills', () => {
    expect(screen.getByText('Others')).toBeInTheDocument();
    // Check for a few specific skills from the others list
    if (others.length > 0) {
      expect(screen.getByText(others[0].title)).toBeInTheDocument();
    }
    if (others.length > 1) {
      expect(screen.getByText(others[1].title)).toBeInTheDocument();
    }
  });
});
