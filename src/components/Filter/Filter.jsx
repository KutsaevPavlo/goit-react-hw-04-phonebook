import PropTypes from 'prop-types';
import { StyledFilter } from './Filter.styled';

export const Filter = ({ updateFilter, createFilterData }) => {
  const handleChange = ({ target }) => {
    updateFilter(target.value);
  };

  return (
    <>
      <StyledFilter>
        Find contacts by name
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handleChange}
          value={createFilterData}
        />
      </StyledFilter>
    </>
  );
};

Filter.propTypes = {
  createFilterData: PropTypes.string.isRequired,
  updateFilter: PropTypes.func.isRequired,
};
