module.exports = {
  "extends": "standard",
  "installedESLint": true,

  "globals": {
    "describe" : true,
    "it": true,
    "beforeEach": true,
    "afterEach": true,
    "before": true,
    "after": true,
    "expect": true,
  },
  "rules": {
    "semi": ["error", "always"]
  },

  "plugins": [
    "standard"
  ]
};
