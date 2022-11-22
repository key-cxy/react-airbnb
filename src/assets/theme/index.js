const theme = {
  color: {
    primary: "#FF385C",
    secondary: "#008489",
  },
  textColor: {
    primary: "#222222",
    secondary: "#484848",
  },
  mixin: {
    boxShadow: `
    transition: box-shadow 200ms ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    }
    `,
  },
};

export default theme;
