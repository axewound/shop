import React from "react";

const  NavCheckbox = (props,setCheck) => {
    const [rows, setRows] = React.useState([]);

    const handleChecked = (e) => {
        props.setCheck(e.target.checked)
    };



    return (
        <div >
            <div id="filter">
                <div>
                    <input type="checkbox" onChange={handleChecked} />

                </div>
            </div>
        </div>
    );
}
export default  NavCheckbox