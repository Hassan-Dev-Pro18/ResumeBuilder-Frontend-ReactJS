import React, { useState } from "react";

const HobbiesForm = ({ formData, setFormData, errors, setErrors }) => {
  const [visibleFields, setVisibleFields] = useState(3);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      hobbies: {
        ...prevFormData.hobbies,
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
                <div className="label-container-resume-build">
                  <label htmlFor="skills">Hobby 1</label>
                  {errors.hobby1 && (
                    <span className="error-message">{errors.hobby1}</span>
                  )}
                </div>
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
                <div className="label-container-resume-build">
                  <label htmlFor="skills">Hobby 2</label>
                  {errors.hobby2 && (
                    <span className="error-message">{errors.hobby2}</span>
                  )}
                </div>
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
                <div className="label-container-resume-build">
                  <label htmlFor="skills">Hobby 3</label>
                  {errors.hobby3 && (
                    <span className="error-message">{errors.hobby3}</span>
                  )}
                </div>
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
                <div className="label-container-resume-build">
                  <label htmlFor="skills">Hobby 4</label>
                  {errors.hobby4 && (
                    <span className="error-message">{errors.hobby4}</span>
                  )}
                </div>
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
              <div className="label-container-resume-build">
                  <label htmlFor="skills">Hobby 5</label>
                  {errors.hobby5 && (
                    <span className="error-message">{errors.hobby5}</span>
                  )}
                </div>
              <input
                type="text"
                name="hobby5"
                value={formData.hobbies.hobby5 || ""}
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
