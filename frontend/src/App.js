import React, { Fragment, useEffect, useState } from 'react';

import * as api from './api/apiService';
import * as dateHelper from './helpers/dateHelpers';

import Button from './components/button/Button';
import ButtonContainer from './components/button/ButtonContainer';
import TaskContainer from './components/task/TaskContainer';
import Summary from './components/Summary';

export default function App() {
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await api.getTasksByYearMonth(selectedYear, selectedMonth);
      setTasks(tasks);
    };

    getTasks();
  }, [selectedYear, selectedMonth]);

  const handleYearsClick = (yearSelected) => {
    setSelectedYear(yearSelected);
    setSelectedMonth(0);
  };

  const handleMonthsClick = (monthSelected) => {
    setSelectedMonth(monthSelected);
  };

  const handleTaskDone = (taskSelected) => {
    const { id, done } = taskSelected;
    const didUpdate = api.putTaskDone(taskSelected);

    if (didUpdate) {
      const newTasks = [...tasks];

      const index = tasks.findIndex((task) => task.id === id);

      newTasks[index].done = !done;
      setTasks(newTasks);
    }
  };

  const years = dateHelper.getAllYears();
  const months = dateHelper.getAllMonths();

  return (
    <Fragment>
      <div className="container center">
        <h1>React To Do List</h1>

        <ButtonContainer>
          {years.map((year) => (
            <Button
              key={year}
              description={year}
              value={year}
              selected={selectedYear}
              color="purple lighten-2"
              onClick={handleYearsClick}
            />
          ))}
        </ButtonContainer>

        {selectedYear !== 0 && (
          <ButtonContainer>
            {months.map((month) => (
              <Button
                key={month.id}
                description={month.name}
                value={month.id}
                selected={selectedMonth}
                color="purple lighten-2"
                onClick={handleMonthsClick}
              />
            ))}
          </ButtonContainer>
        )}

        {selectedMonth !== 0 && (
          <Fragment>
            <Summary year={selectedYear} month={selectedMonth}>
              {tasks}
            </Summary>
            <TaskContainer onClick={handleTaskDone}>{tasks}</TaskContainer>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}
