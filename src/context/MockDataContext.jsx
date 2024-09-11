import React, { useState } from "react";
import { PropTypes } from 'prop-types';

export const MockDataContext = React.createContext({
  useMock: false,
  setUseMock: () => {},
});

export const MockDataProvider = ({ children }) => {
  const [useMock, setUseMock] = useState(false);

  return (
    <MockDataContext.Provider value={{ useMock, setUseMock }}>
      {children}
    </MockDataContext.Provider>
  );
};
// PropTypes validation
MockDataProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that 'children' is required and must be valid React node
};