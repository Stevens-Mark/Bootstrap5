import PropTypes from 'prop-types'

/**
 * CSS for component using styled.components
 */
// const Ulist = styled.ul`
//   list-style: none;
//   padding-inline-start: 0px;
// `;

/**
 * Creates an unordered list
 * @function ListCreate
 * @param {string} group: list group name (functionality, constraints, etc)
 * @param {array} data: for list
 * @returns 
 */
const ListCreate = ( { group, data } ) => {
  return (
    <ul className="list-unstyled" aria-label={group}>{data.map((item, index) => (
      <li className="py-1" key={`${group}-${index}`}>{item}</li> ))}
    </ul>
  )
}

export default ListCreate

// Prototypes
ListCreate.propTypes = {
  group: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
}
