import React from 'react';

const Node = (props) => {
    
    return (
        <div id={"node-" + props.data.id} className="node">
            <div className="node-title">
                Node {props.data.id + 1}
            </div>
            <div className="node-body">
                {props.data.msg}
            </div>
        </div>
    )
}

export default Node