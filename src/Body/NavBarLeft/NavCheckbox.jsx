import React from "react";

const  NavCheckbox = (props) => {

    const handleChecked = (e) => {
        props.setCheck(e.target.checked)
    };

    return (
        <div >
            <div>
                <div>
                    <input type="checkbox" onChange={handleChecked} />
                </div>
            </div>
        </div>
    );
}
export default  NavCheckbox