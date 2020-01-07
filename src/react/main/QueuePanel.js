import React from 'react';
import { useGlobalState } from '../State';

const Producer = () => {
    const [rstate, dispatch] = useGlobalState().reducer
    const state = useGlobalState().state
  
    return (
        <div id="queue-panel">
            <input type="text" id="queueName" className="" name="queueName" onChange={e => state.setQueue(e.target.value)} />
            <button id="addQueue" type="button" className="btn" onClick={() => dispatch({type: "addQueue", payload: { name: state.queue }})}>
                Add queue
            </button>
            <button id="removeQueue" type="button" className="btn" onClick={() => dispatch({type: "removeQueue", payload: { name: state.queue }})}>
                Remove queue
            </button>
        </div>
    )
}

export default Producer