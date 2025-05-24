import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';
import { email, socialLinks, bottom1stTest, bottom2ndText } from './../vars/contactItems';
import '@testing-library/jest-dom';

// Mock the SocialLinks component
jest.mock('./sub/SocialLinks', () => (props) => (
  <div data-testid="social-links">
    <h3>{props.name}</h3>
    <ul>
      {props.list.map(item => <li key={item.title}>{item.title}</li>)}
    </ul>
  </div>
));

it('renders without crashing', () => {
  render(<Contact />);
});

describe('renders contact information correctly', () => {
  beforeEach(() => {
    render(<Contact />);
  });

  it('displays the "Contact me via Email" text', () => {
    expect(screen.getByText('Contact me via Email')).toBeInTheDocument();
  });

  it('displays the correct email address', () => {
    expect(screen.getByText(email)).toBeInTheDocument();
  });

  it('renders the SocialLinks component with correct props', () => {
    // Check if the mocked SocialLinks component is rendered
    const socialLinksComponent = screen.getByTestId('social-links');
    expect(socialLinksComponent).toBeInTheDocument();
    // Check if the name prop is passed correctly
    expect(screen.getByText('My Other Social Links')).toBeInTheDocument();
    // Check if a few social link titles are present (rendered by the mock)
    if (socialLinks.length > 0) {
      expect(screen.getByText(socialLinks[0].title)).toBeInTheDocument();
    }
    if (socialLinks.length > 1) {
      expect(screen.getByText(socialLinks[1].title)).toBeInTheDocument();
    }
  });

  it('displays the bottom first text', () => {
    expect(screen.getByText(bottom1stTest)).toBeInTheDocument();
  });

  it('displays the bottom second text', () => {
    expect(screen.getByText(bottom2ndText)).toBeInTheDocument();
  });
});
