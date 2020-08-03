import React from 'react';
export default ButtonLink;

function ButtonLink(props) {
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}