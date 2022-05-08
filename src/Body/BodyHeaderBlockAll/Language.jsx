import React from 'react';

const LanguageSelected = (props) => {
    return (
        <div>
            <form>
                <select id="language_select" value={props.value} >
                    <option value="US">US</option>
                    <option value="UA">UA</option>
                    <option value="BY">BY</option>
                </select>
            </form>
        </div>
    )
}


export default LanguageSelected;