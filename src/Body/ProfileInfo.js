import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

    return (
        <div>
            }
            <div>

                <img className={styles.imgOneProduct} src={props.profile.image}/>
            </div>
            <div >
                {props.products.title}
                {props.profile.title}
            </div>
        </div>
    )
}

export default ProfileInfo;