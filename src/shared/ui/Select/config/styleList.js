export const styleList = {
  option: (base, state) => ({
    ...base,
    color: state.isSelected ? '#f9f9f9' : `#686868`,
    fontSize: 14,
    lineHeight: '129%',
    paddingTop: 8,
    '&:hover': {
      color: state.isSelected ? '#f9f9f9' : '#A6A6A6',
    },
    backgroundColor: '#262626',
    borderRadius: 14,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    maxHeight: 'none',
  }),
  container: (base) => ({
    ...base,

    [`@media (min-width: 320px)`]: {
      width: '120px',
    },

    [`@media (min-width: 768px)`]: {
      width: '153px',
    },
  }),
  control: (base) => ({
    ...base,
    borderRadius: '12px',
    backgroundColor: 'transperent',
    border: '1px solid #3e3e3e',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#3e3e3e',
    },

    [`@media (min-width: 320px)`]: {
      height: '40px',
    },

    [`@media (min-width: 768px)`]: {
      height: '46px',
    },
    lineHeight: '129%',
    paddingLeft: 6,
    // border: '1px solid rgba(25, 26, 21, 0.1)',
    // '&:hover': { backgroundColor: 'rgba(25, 26, 21, 0.1)' },
  }),
  dropdownIndicator: (base, state) => ({
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
    ...base,
  }),
  menuList: (base) => ({
    ...base,
    '::-webkit-scrollbar': {
      width: 0,
    },
    '::-webkit-scrollbar-thumb': {
      display: 'none',
    },

    '::-webkit-scrollbar-thumb:hover': {
      display: 'none',
    },
    padding: 0,
  }),
  menu: (base) => ({
    ...base,
    paddingRight: 8,

    borderRadius: 14,
    overflow: 'hidden',
    border: '1px solid rgba(18, 20, 23, 0.05)',
    boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02);',
    maxHeight: 180,
    backgroundColor: '#262626',
    padding: 0,
    right: 0,
    paddingLeft: 6,
  }),
  singleValue: (base) => ({
    ...base,

    // fontWeight: 500,

    [`@media (min-width: 320px)`]: {
      fontSize: 12,
    },

    [`@media (min-width: 768px)`]: {
      fontSize: 14,
    },
    color: '#f9f9f9',
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
};
