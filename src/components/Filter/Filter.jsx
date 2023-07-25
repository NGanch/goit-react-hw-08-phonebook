// Імпортуємо хуки useSelector, useDispatch
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { FilterLabel, FilterInput } from './Filter.styled';

export function Filter() {
  // Отримуємо значення фільтру зі стану
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();
  // Зміна значення фільтру
  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={filter} onChange={handleFilterChange} />
    </FilterLabel>
  );
}