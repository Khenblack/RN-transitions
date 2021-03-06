import React from 'react';

import PropTypes from 'prop-types';

const UserTemplate = (props) => {
  console.log(props);
  return (
    <div>
      User template
    </div>
  );
};

UserTemplate.propTypes = {
  name: PropTypes.string,
  lastname: PropTypes.string,
  age: PropTypes.number,
  hobbies: PropTypes.array,
  spanish: PropTypes.bool,
  message: PropTypes.func,
  car: PropTypes.object
}

export default UserTemplate;