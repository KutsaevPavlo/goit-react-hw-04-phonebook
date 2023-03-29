import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledForm,
  StyledFormLabel,
  StyledFormInput,
  StyledFormBtm,
} from './ContactForm.styled';

export const ContactForm = ({ createContact }) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('This field does not exist');
        break;
    }
  };

  const reset = () => {
    setNumber('');
    setName('');
  };
  const handleSubmit = e => {
    e.preventDefault();

    const newAddContact = createContact({
      name,
      number,
    });

    newAddContact && reset();
    // reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormLabel>
        Name
        <StyledFormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </StyledFormLabel>
      <StyledFormLabel>
        Number
        <StyledFormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </StyledFormLabel>
      <StyledFormBtm type="submit">Add</StyledFormBtm>
    </StyledForm>
  );
};

ContactForm.propTypes = {
  createContact: PropTypes.func.isRequired,
};
