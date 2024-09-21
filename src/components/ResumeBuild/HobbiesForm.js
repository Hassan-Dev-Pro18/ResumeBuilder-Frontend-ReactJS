import React, { useState } from "react";

const HobbiesForm = ({ formData, setFormData }) => {
  const [visibleFields, setVisibleFields] = useState(3);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      hobbies: {
        ...prevFormData.hobbies,
        [name]: value
      }
    }));

  };

  const addHobbiesField = () => {
    if (visibleFields < 5) {
      setVisibleFields(visibleFields + 1);
    }
  };

  return (
    <div className="form-section">
      <h2 className="form-title">Hobbies</h2>
      <div className="form-section-skillHobies">
      <div className="AllForm-entry">
        <div className="form-group-container">
          {visibleFields >= 1 && (
            <div className="form-group">
              <label htmlFor="hobby1">Hobby 1</label>
              <input
                type="text"
                name="hobby1"
                value={formData.hobbies.hobby1 || ""}
                onChange={handleChange}
              />
            </div>
          )}
          {visibleFields >= 2 && (
            <div className="form-group">
              <label htmlFor="hobby2">Hobby 2</label>
              <input
                type="text"
                name="hobby2"
                value={formData.hobbies.hobby2 || ""}
                onChange={handleChange}
              />
            </div>
          )}
        </div>
        <div className="form-group-container">
          {visibleFields >= 3 && (
            <div className="form-group">
              <label htmlFor="hobby3">Hobby 3</label>
              <input
                type="text"
                name="hobby3"
                value={formData.hobbies.hobby3 || ""}
                onChange={handleChange}
              />
            </div>
          )}
          {visibleFields >= 4 && (
            <div className="form-group">
              <label htmlFor="hobby4">Hobby 4</label>
              <input
                type="text"
                name="hobby4"
                value={formData.hobbies.hobby4 || ""}
                onChange={handleChange}
              />
            </div>
          )}
        </div>
        
          {visibleFields >= 5 && (
            <div className="form-group">
              <label htmlFor="hobby5">Hobby 5</label>
              <input
                type="text"
                name="hobby5"
                value={formData.hobbies.hobbieshobby5 || ""}
                onChange={handleChange}
              />
            </div>
          )}
         
    
        {visibleFields < 5 && (
          <div className="add-AllForm-text" onClick={addHobbiesField}>
            <p>Add another Hobbies</p>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default HobbiesForm;
