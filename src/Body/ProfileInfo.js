import React from 'react';

const ProfileInfo = (props) => {

    return (
        <div>
            }
            <div>

                <img src={props.products.image}/>
            </div>
            <div >
                {props.products.title}
            </div>
        </div>
    )
}

export default ProfileInfo;