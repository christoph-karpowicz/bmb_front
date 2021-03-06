import { randomString } from '../util/util'
const { ipcRenderer } = window.require('electron');

// App component methods.
const consume = (payload) => {
  ipcRenderer.send('consume', payload);
}

const get = (payload) => {
  ipcRenderer.send('get', payload);
}

const getAll = (payload) => {
  ipcRenderer.send('getAll', payload);
}

const getQueueList = () => {
  ipcRenderer.send('getQueueList');
}

const produce = (payload) => {
  ipcRenderer.send('produce', payload);
}

const addQueue = (payload) => {
  ipcRenderer.send('addQueue', payload);
}

const removeQueue = (payload) => {
  ipcRenderer.send('removeQueue', payload);
}

// Global state reducer.
export const reducer = (state, action) => {
  switch (action.type) {
    case "consume":
      consume(action.payload);
      break;
    case "get":
      get(action.payload);
      break;
    case "getAll":
      getAll(action.payload);
      break;
    case "getQueueList":
      getQueueList();
      break;
    case "produce":
      produce(action.payload);
      break;
    case "produceRandom":
      const randomMsg = randomString();
      action.payload.message = randomMsg;
      produce(action.payload);
      break;
    case "addQueue":
      addQueue(action.payload);
      break;
    case "removeQueue":
      removeQueue(action.payload);
      break;
    case "updateQueue":
      return { nodes: action.payload.queue, queueList: state.queueList };
    case "updateQueueList":
      return { nodes: state.nodes, queueList: action.payload.queueNames };
  }
  return state
}