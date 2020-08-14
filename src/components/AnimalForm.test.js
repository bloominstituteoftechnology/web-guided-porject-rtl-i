
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import AnimalForm from './AnimalForm';

test('AnimalForm adds new animals to the list', () => {
  render(<AnimalForm />);
//type into all three inputs
//1. query for all inputs
//2. run the change event to add text 
  const speciesInput = screen.getByLabelText(/species/i);
  const ageInput = screen.getByLabelText(/age/i);
  const notesInput = screen.getByLabelText(/notes/i);

//events with RTL
  fireEvent.change(speciesInput, {target: {value: 'Cheetah'}})
  fireEvent.change(ageInput, {target: {value: '9'}})
  fireEvent.change(notesInput, {target: {value: 'Fast'}})

//click submit button
//1. query for the button
//2. run the event on the button
const submitButton = screen.getByText(/submit!/i);
fireEvent.click(submitButton);

//assert that my new animal is in the list
//1. query for the new animal text
//2. assert that it is being rendered
  const newAnimal = screen.getByText(/cheetah/i);
  expect(newAnimal).toBeInTheDocument();
})