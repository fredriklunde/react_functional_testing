import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { greet } from './greet'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Testing greet.js', () => {

  it('returns message + name', () => {
    expect(greet("bob")).toEqual("Hello bob");
  });

  it('is null safe', () => {
    expect(greet(null)).toEqual("Hello, my friend");
  })

  it('handles Uppercase', () => {
    expect(greet("BOB")).toEqual("HELLO BOB");
  })

  it('handles two names', () => {
    expect(greet(["Jill", "Jane"])).toEqual("Hello Jill and Jane");
  })

  it('handles multiple names', () => {
    expect(greet(["Jill", "Jane", "James"])).toEqual("Hello Jill, Jane and James");
  })
});