const { Given } = require('@cucumber/cucumber');

// Fake login service
function fakeLoginService(role) {
  const roles = {
    admin: 'Admin Dashboard',
    user: 'User Dashboard'
  };
  return roles[role] || 'Guest Dashboard';
}

Given('I am logged in as {string}', function (userRole) {
  this.dashboard = fakeLoginService(userRole);
});

Given('I navigate to {string}', function (pageName) {
  // Implement navigation logic here
});