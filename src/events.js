const eventHandlers = {};

export function subscribe(event, handler) {
  if (!eventHandlers[event]) {
    eventHandlers[event] = [];
  }
  eventHandlers[event].push(handler);
}

export function unsubscribe(event, handler) {
  if (eventHandlers[event]) {
    eventHandlers[event] = eventHandlers[event].filter((h) => h !== handler);
  }
}

export function emit(event, data) {
  if (eventHandlers[event]) {
    eventHandlers[event].forEach((handler) => {
      handler(data);
    });
  }
}