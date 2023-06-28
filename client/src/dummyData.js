export const getDateDiff = (
  startDate,
  endDate = new Date().toISOString().split("T")[0]
) => {
  const startYear = new Date(startDate).getFullYear();
  const startMonth = new Date(startDate).getMonth();
  const endYear = new Date(endDate).getFullYear();
  const endMonth = new Date(endDate).getMonth();

  const diffInMonths = (endYear - startYear) * 12 + (endMonth - startMonth);
  const diffInDays = Math.floor(
    (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)
  );

  let result;

  if (diffInDays < 30) {
    result = `${diffInDays} ${diffInDays === 1 ? "day" : "days"}`;
  } else if (diffInMonths < 12) {
    result = `${diffInMonths} ${diffInMonths === 1 ? "month" : "months"}`;
  } else {
    result = `${Math.floor(diffInMonths / 12)} years`;
  }
  return result;
};

export const CategoryOptions = [
  { value: 'Sales', label: 'Sales' },
  { value: 'It Services', label: 'It Services' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'UI/UX Designer', label: 'UI/UX Designer' },
  { value: 'Teacher', label: 'Teacher' },
  { value: 'SaaS', label: 'SaaS' }
]
export const SkillsOptions = [
  { value: 'Node.Js', label: 'NodeJs' },
  { value: 'Express.Js', label: 'ExpressJs' },
  { value: 'React', label: 'React' },
  { value: 'Redux', label: 'Redux' },
  { value: 'Next.Js', label: 'NextJs' },
  { value: 'MongoDB', label: 'MongoDB' },
  { value: 'MySql', label: 'MySql' },
  { value: 'Redux', label: 'Redux' },
  { value: 'JavaScript', label: 'JavaScript' }
]

export const LocationOptions = [
  { value: 'Noida', label: 'Noida' },
  { value: 'Delhi', label: 'Delhi' },
  { value: 'Bangalore', label: 'Bangalore' },
  { value: 'Mumbai', label: 'Mumbai' },
  { value: 'Hyderabad', label: 'Hyderabad' },
  { value: 'Pune', label: 'Pune' },
  { value: 'Chennai', label: 'Chennai' },
]

export const DurationMarks = [
  { value: 1, label: '1', },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6+' },
];

export const StipendMarks = [
  { value: 0, label: '0', },
  { value: 5, label: '5k' },
  { value: 10, label: '10k' },
  { value: 20, label: '20k' },
  { value: 25, label: '40k' },
  { value: 60, label: '60k+' },
];
export const ApplicantMarks = [
  { value: 0, label: '0', },
  { value: 10, label: '10' },
  { value: 25, label: '25' },
  { value: 50, label: '50' },
  { value: 100, label: '100' },
  { value: 250, label: '250+' },
];




export const customStyles = {
  control: (provided) => ({
    ...provided,
    width: '28vw', // Set the desired width here
    border: '1px solid gray',
    borderRadius: '4px',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid gray',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'blue' : 'white',
    color: state.isSelected ? 'white' : 'black',
    '&:hover': {
      backgroundColor: state.isSelected ? 'blue' : 'lightgray',
    },
  }),
  // Add more custom styles as needed
};

export const handleCheckboxChange = (event,key,setState) => {
  const { value, checked } = event.target;
  if (checked) {
    setState((prev) => ({...prev,[key]:[...(prev[key] || []), value]}));
  } else {
    setState((prev) =>({...prev,[key]:
      (prev[key] || []).filter((option) => option !== value)
    }));
  }
};










