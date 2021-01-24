import React from 'react';

import * as dateHelper from '../../helpers/dateHelpers';

export default function Task({ children: task, onClick }) {
  const { date, description, done } = task;

  const doneColor = done ? 'green lighten-4' : 'red lighten-4';
  const data = dateHelper.formatDateBR(date);

  const handleTask = () => {
    onClick(task);
  };

  return (
    <div
      style={styles.task}
      className={`card horizontal ${doneColor}`}
      onClick={handleTask}
    >
      <span>
        <strong>{data}</strong> {description}
      </span>
    </div>
  );
}

const styles = {
  task: {
    backgroundColor: '#f3e5f5',
    margin: '10px',
    padding: '20px',
    fontSize: '20px',
    fontFamily: 'Consolas',
    cursor: 'pointer',
  },
};
