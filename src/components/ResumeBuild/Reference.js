import React, { useState } from "react";

const ReferenceForm = ({ formData, setFormData }) => {
  const [visibleFields, setVisibleFields] = useState(2);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      reference: {
        ...prevFormData.reference,
        [name]: value
      }
    }));

  };

  const addReferenceField = () => {
    if (visibleFields < 3) {
      setVisibleFields(visibleFields + 1);
    }
  };

  return (
    <div className="form-section">
      <h2 className="form-title">Reference</h2>
      <div className="form-section-skillHobies">
      <div className="AllForm-entry">
        <div className="form-group-container">
          {visibleFields >= 1 && (
            <div className="form-group">
              <label htmlFor="reference">Reference 1</label>
              <input
                type="text"
                name="reference1"
                value={formData.reference.reference1 || ""}
                onChange={handleChange}
              />
            </div>
          )}
          {visibleFields >= 2 && (
            <div className="form-group">
              <label htmlFor="reference">Reference 2</label>
              <input
                type="text"
                name="reference2"
                value={formData.reference.reference2 || ""}
                onChange={handleChange}
              />
            </div>
          )}
        </div>
        
          {visibleFields >= 3 && (
            <div className="form-group">
              <label htmlFor="reference">Reference 3</label>
              <input
                type="text"
                name="reference3"
                value={formData.reference.reference3 || ""}
                onChange={handleChange}
              />
            </div>
          )}
        {visibleFields < 3 && (
          <div className="add-AllForm-text" onClick={addReferenceField}>
            <p>Add another Reference</p>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default ReferenceForm;
