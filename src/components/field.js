import React from 'react';
import CheckBox from './checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import '../components/field.css'
const  Field = ({children}) => {
    return (<div className='field'>
        <span className='field-icon' icon=""><FontAwesomeIcon icon={faEllipsisVertical} /></span>
        <hr style={{marginTop: '22px'}}></hr>
        {children}
    </div>)
};

export default Field;