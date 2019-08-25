import React, { useState } from "react";
// functional component
const Examples = props => {
  // create state property 'name' and initialize it  
  const [name, setName] = useState("examples");
  const handleNameChange = e => setName(e.target.value);

  return (
    <div>
      <form>
        <label>Name:
          <input
            type="text"
            name="name"
            // set current value of input to current state value
            value={name}
            // refer to event handler on input change
            onChange={handleNameChange}
          />
        </label>
      </form>
    </div>
  );
};

export default Examples;