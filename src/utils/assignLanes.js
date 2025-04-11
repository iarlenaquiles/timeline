/**
 * Takes an array of items and assigns them to lanes based on start/end dates.
 * @returns an array of arrays containing items.
 */
export function assignLanes(items) {
    const sortedItems = [...items].sort((a, b) =>
      new Date(a.start) - new Date(b.start)
    );
    const lanes = [];
  
    for (const item of sortedItems) {
      let assigned = false;
      for (let i = 0; i < lanes.length; i++) {
        const lane = lanes[i];
        const lastItem = lane[lane.length - 1];
        if (new Date(lastItem.end) < new Date(item.start)) {
          lane.push(item);
          item.lane = i;
          assigned = true;
          break;
        }
      }
  
      if (!assigned) {
        item.lane = lanes.length;
        lanes.push([item]);
      }
    }
  
    return sortedItems; // Agora com .lane em cada item
  }