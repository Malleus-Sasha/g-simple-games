type Events = Record<string, unknown>;
type Listener<Data = any> = (data: Data) => void;

export class EventEmitter<EventsData extends Events> {
  private listeners: Map<keyof EventsData, Set<Listener>> = new Map();
  // off(event: string, callback: (data: any) => void);
  on<Key extends keyof EventsData>(
    event: Key,
    callback: Listener<EventsData[Key]>
  ) {
    let eventListenersSet = this.listeners.get(event);

    if (!eventListenersSet) {
      eventListenersSet = new Set([callback]);
      this.listeners.set(event, eventListenersSet);
    } else {
      eventListenersSet.add(callback);
    }

    return () => {
      eventListenersSet.delete(callback);
    };
  }
  // emit<Key extends keyof EventsData>(event: string, data: EventsData[Key]) {
  //   const eventListenersSet = this.listeners.get(event);

  //   if (eventListenersSet) {
  //     eventListenersSet.forEach((listener) => {
  //       listener(data);
  //     })
  //   }
  // };
  emit<Key extends keyof EventsData>(
    event: Key,
    ...args: EventsData[Key] extends void ? [] : [EventsData[Key]]
  ) {
    const eventListenersSet = this.listeners.get(event);

    if (eventListenersSet) {
      eventListenersSet.forEach((listener) => {
        listener(args[0]);
      });
    }
  }
}

const v = new EventEmitter<{
  click: { name: string; value: number };
  delete: string;
  test: string;
  v: void;
}>();


// Testing
v.on("click", (data) => console.log("Click: ", data.value));
v.emit("click", { name: "ttt", value: 11 });

v.on("test", (data: string) => console.log("log: " + data));
v.emit("test", "test 1");

v.on("v", () => {});
v.emit("v");
