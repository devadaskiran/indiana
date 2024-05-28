import React, { useState } from 'react';
import { Button, Modal, TextField } from 'components';
import backgroundImage from '@assets/images/2151065226.jpg';
import styles from './Admission.module.scss';

const AdmissionModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    student: '',
    parent: '',
    phone: '',
    class: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number length
    if (formData.phone.length < 10) {
      alert('Phone number must be at least 10 characters long.');
      return; // Prevent form submission
    }

    // Update sending state and button label
    setSending(true);
    const submitButton = e.target.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    console.log('Form submitted:', formData);
    const data = new FormData();
    data.append('student', formData.student);
    data.append('parent', formData.parent);
    data.append('phone', formData.phone);
    data.append('class', formData.class);

    const Sheet_Url = "https://script.google.com/macros/s/AKfycbwPfJAHIiGw_YQRB-ctrkVcSbKkg0U04fjKPeSJwmC4LnirX-UaOQilJYtcNKeCgo8_-w/exec"
    try {
      await fetch(Sheet_Url, {
        method: 'POST',
        body: data,
        muteHttpExceptions: true,
      });

      // Reset the form and display submission success message
      setFormData({
        student: '',
        parent: '',
        phone: '',
        class: ''
      });
      setSubmitted(true);
    } catch (error) {
      console.log(error);
      // Re-enable the submit button and revert its label
      submitButton.disabled = false;
      submitButton.textContent = 'Send Now';
    } finally {
      // Reset sending state
      setSending(false);
    }
  };

  const handleApplyAgain = () => {
    setSubmitted(false);
  };

  return (
    <Modal onClose={onClose} image={backgroundImage} className={styles.wrapper}>
      {submitted ? (
        <div>
          <h3 className='mb-1'>
            Thank you for your submission!
          </h3>
          <p>Your admission inquiry has been received successfully. We'll be in touch with you to discuss the next steps..</p>
          <Button type="button" className="mt-2" onClick={handleApplyAgain} color="primary" label="Apply Again for Another Admission" />
        </div>
      ) : (
        <div>
          <h3 className='mb-1'>
            Admission Enquiry
          </h3>
          <form onSubmit={handleSubmit}>
            <TextField label="Student's Name" type="text" name="student" value={formData.student} onChange={handleChange} required />
            <TextField label="Parent's Name" type="text" name="parent" value={formData.parent} onChange={handleChange} required />
            <TextField label="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            <TextField
              label="Select class"
              type="select"
              name="class"
              value={formData.class}
              onChange={handleChange}
              required
              options={[
                { value: 'prekg', label: 'Pre-KG' },
                { value: 'lkg', label: 'LKG' },
                { value: 'ukg', label: 'UKG' },
                { value: 'one', label: 'First Std' },
                { value: 'two', label: 'Second Std' },
                { value: 'three', label: 'Third Std' },
                { value: 'four', label: 'Fourth Std' },
                { value: 'five', label: 'Fifth Std' },
                { value: 'six', label: 'Sixth Std' },
                { value: 'seven', label: 'Seventh Std' },
                { value: 'eight', label: 'Eighth Std' },
                { value: 'nine', label: 'Ninth Std' },
                { value: 'ten', label: 'Tenth Std' },
                { value: 'eleven', label: 'Eleventh Std' },
                { value: 'twelve', label: 'Twelfth Std' },
              ]}
            />

            <Button type="submit" className={`mt-2 ${sending && styles['loading-button']}`} color="primary" label={sending ? <>Sending... </> : "Send Now"} disabled={sending} />
          </form>
        </div>
      )}
    </Modal>
  );
};

export default AdmissionModal;
