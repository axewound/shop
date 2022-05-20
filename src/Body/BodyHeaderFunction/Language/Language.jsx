import React from 'react';
import styles from './Language.module.css';

const LanguageSelected = (props) => {
    return (
        <div className={styles.languages_container}>
            <span>Change Language</span>
                <select id="language_select" value={props.value} >
                    <option value="US">US</option>
                    <option value="UA">UA</option>
                    <option value="BY">BY</option>
                </select>
        </div>
    )
}


export default LanguageSelected;