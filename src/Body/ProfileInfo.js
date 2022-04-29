import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

    return (
        <div>
            }
            <div>

                <img className={styles.imgOneProduct} src={props.products.image}/>
            </div>
            <div >
                {props.products.title}
            </div>
        </div>
    )
}

export default ProfileInfo;