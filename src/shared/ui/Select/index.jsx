import { styleList } from './config/styleList';
import Select from 'react-select';
import PropTypes from 'prop-types';

export const SelectUI = ({ onChange, ...rest }) => {
  const options = [
    { value: 'unread', label: 'Unread' },
    { value: 'in-progress', label: 'In progress' },
    { value: 'done', label: 'Done' },
    { value: 'all', label: 'All books' },
  ];
  return (
    <Select
      defaultValue={options[options.length - 1]}
      options={options}
      styles={styleList}
      onChange={(choice) => onChange(choice.value)}
      {...rest}
    />
  );
};

SelectUI.propTypes = {
  onChange: PropTypes.func,
};
