import React from 'react';

const ProfileInfo = (props) => {

    return (
        <div>
            {console.log(props.products)
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