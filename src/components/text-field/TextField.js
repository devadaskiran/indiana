import React from 'react';
import styles from './TextField.module.scss';

const TextField = ({ label, type, name, value, onChange, required, options }) => {
    const renderInput = () => {
        switch (type) {
            case 'text':
            case 'tel':
            case 'email':
                return (
                    <input
                        type={type}
                        id={name}
                        name={name}
                        value={value}
                        onChange={onChange}
                        required={required}
                    />
                );
            case 'select':
                return (
                    <select
                        id={name}
                        name={name}
                        value={value}
                        onChange={onChange}
                        required={required}
                    >
                        <option value="labelOption" selected>{label}</option>
                        {options.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles.wrapper}>
            <label htmlFor={name}>{label}</label>
            {renderInput()}
        </div>
    );
};

export default TextField;
