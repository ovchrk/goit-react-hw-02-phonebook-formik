import PropTypes from 'prop-types';

export const List = ({ filteredContacts, handleDelete }) => {
  return (
    <div>
      {filteredContacts.length > 0 ? (
        <ul className='p-10 mt-10 font-light text-lg'>
          {filteredContacts.map(({ id, name, number}) => (
            <li key={id}>
              &#8728; {name}: {number}{' '}
              <button
                type="button"
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div>Contacts not found</div>
      )}
    </div>
  );
};

List.propTypes = {
  filteredContacts: PropTypes.array,
  handleDelete: PropTypes.func.isRequired,
};