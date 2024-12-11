import React, { useState } from "react";

const ReferenceForm = ({ formData, setFormData, errors, setErrors }) => {
  console.log(errors.reference1);
  const [visibleFields, setVisibleFields] = useState(2);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      reference: {
        ...prevFormData.reference,
        [name]: value,
      },
    }));
    // Clear errors as user types
    const newErrors = { ...errors };

    // Check if there are any errors for the current field
    if (newErrors[name]) {
      delete newErrors[name]; // Delete the specific error for the current field
      setErrors(newErrors); // Update the state with the new errors
    }
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
                <div className="label-container-resume-build">
                  <label htmlFor="reference">Reference 1</label>
                  {errors.reference1 && (
                    <span className="error-message">{errors.reference1}</span>
                  )}
                </div>
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
                <div className="label-container-resume-build">
                  <label htmlFor="reference">Reference 2</label>
                  {errors.reference2 && (
                    <span className="error-message">{errors.reference2}</span>
                  )}
                </div>
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
              <div className="label-container-resume-build">
                  <label htmlFor="reference">Reference 3</label>
                  {errors.reference3 && (
                    <span className="error-message">{errors.reference3}</span>
                  )}
                </div>
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
