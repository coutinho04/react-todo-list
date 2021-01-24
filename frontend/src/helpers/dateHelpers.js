const YEARS = [2019, 2020, 2021];
const MONTHS = [
  {
    id: 1,
    name: 'JAN',
  },
  {
    id: 2,
    name: 'FEV',
  },
  {
    id: 3,
    name: 'MAR',
  },
  {
    id: 4,
    name: 'ABR',
  },
  {
    id: 5,
    name: 'MAI',
  },
  {
    id: 6,
    name: 'JUN',
  },
  {
    id: 7,
    name: 'JUL',
  },
  {
    id: 8,
    name: 'AGO',
  },
  {
    id: 9,
    name: 'SET',
  },
  {
    id: 10,
    name: 'OUT',
  },
  {
    id: 11,
    name: 'NOV',
  },
  {
    id: 12,
    name: 'DEZ',
  },
];

function getAllYears() {
  return YEARS;
}

function getAllMonths() {
  return MONTHS;
}

function formatDateBR(date) {
  const objDate = new Date(`${date} 23:59:59`);
  return objDate.toLocaleDateString('pt-BR');
}

export { getAllYears, getAllMonths, formatDateBR };
