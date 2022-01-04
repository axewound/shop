import React from 'react';
import BodyHeaderBlock from "./BodyHeaderBlock";
import NavBarBodyLeft from "./NavBarLeft/NavBarBodyLeft";
import BodyProductBlock from "./BodyProductBlock";

class Body extends React.Component {
    render() {
        return (
            <div>
                <BodyHeaderBlock/>
                <div>
                    <NavBarBodyLeft/>
                    <BodyProductBlock/>
                </div>
            </div>
        )
    }
}

export default Body