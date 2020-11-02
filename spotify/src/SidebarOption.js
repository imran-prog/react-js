import React from 'react';
import './SidebarOption.css';

function SidebarOption({ title, Icon}) {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? <h3>{title}</h3> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption
