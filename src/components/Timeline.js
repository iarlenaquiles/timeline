import React, { useState, useMemo } from 'react';
import { assignLanes } from '../utils/assignLanes';
import timelineItems  from '../data/timelineItems';
import '../styles.css';

const DAY_WIDTH = 20;

function daysBetween(start, end) {
  return (new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24);
}

export default function Timeline() {
  const [zoom, setZoom] = useState(1);

  const itemsWithLanes = useMemo(() => assignLanes(timelineItems), []);
  const startDate = useMemo(() => new Date(Math.min(...itemsWithLanes.map(item => new Date(item.start)))), [itemsWithLanes]);
  const endDate = useMemo(() => new Date(Math.max(...itemsWithLanes.map(item => new Date(item.end)))), [itemsWithLanes]);

  const totalDays = daysBetween(startDate, endDate) + 1;

  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <button onClick={() => setZoom(zoom * 1.2)}>🔍 Zoom In</button>
        <button onClick={() => setZoom(zoom / 1.2)} style={{ marginLeft: 8 }}>🔎 Zoom Out</button>
      </div>

      <div className="timeline" style={{ width: totalDays * DAY_WIDTH * zoom }}>
        {itemsWithLanes.map(item => {
          const offset = daysBetween(startDate, item.start);
          const width = daysBetween(item.start, item.end) + 1;
          return (
            <div
              key={item.id}
              className="timeline-item"
              style={{
                top: item.lane * 40,
                left: offset * DAY_WIDTH * zoom,
                width: width * DAY_WIDTH * zoom
              }}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}