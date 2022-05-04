import React from 'react';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let ProductPages = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <div>
{/*        <div>
            {pages.map(p => {
                return <span
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>*/}
        {console.log(props)}
        {
            props.products.map(u => <div key={u.id}>
                <span>
                    <div>
                       <NavLink to={'/product/' + u.id}>

                           <img src={u.image != null ? u.image : null}
                           />
                       </NavLink>
                    </div>
{/*                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress
                                .some(id => id === u.id)}
                                      onClick={() => { props.unfollow(u.id) }}>
                                Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => { props.follow(u.id) }}>
                                Follow</button>}

                    </div>*/}
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default ProductPages;