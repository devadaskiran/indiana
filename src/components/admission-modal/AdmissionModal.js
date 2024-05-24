import React, { useState } from 'react';
import { Modal } from 'components';
import backgroundImage from 'assets/images/2151065226.jpg';
import styles from './Admission.module.scss';

const AdmissionModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    class: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.text();
      console.log('Server response:', data);
      setFormData({
        name: '',
        contact: '',
        class: '',
      });
      onClose(); // Close the modal
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  return (
    <Modal onClose={onClose} image={backgroundImage}>
      {/* <h4>Apply for Admission</h4>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="contact">Email/Phone Number:</label>
          <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleInputChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="class">Select Class/Standard:</label>
          <select id="class" name="class" value={formData.class} onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="Class 1">Class 1</option>
            <option value="Class 2">Class 2</option>
            <option value="Class 3">Class 3</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form> */}
    </Modal>
  );
};

export default AdmissionModal;
