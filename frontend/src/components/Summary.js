import React from 'react';

export default function Summary({ children: tasks, year, month }) {
  const totalTasks = tasks.length;
  const totalDone = tasks.filter((task) => task.done === true).length;
  const totaUndone = totalTasks - totalDone;

  return (
    <div style={styles.flexBox}>
      <spam style={styles.item}>Total de tarefas: {totalTasks}</spam>
      <spam style={styles.item}>Tarefas cumpridas: {totalDone}</spam>
      <spam style={styles.item}>Tarefas não cumpridas: {totaUndone}</spam>
    </div>
  );
}

const styles = {
  flexBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  item: {
    margin: '10px',
    padding: '10px',
    fontSize: '1.2rem',
    fontFamily: 'Consolas',
  },
};
