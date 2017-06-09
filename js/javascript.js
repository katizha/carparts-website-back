
// One more comment for attendants
// Last comment for attendants
// Another comment for attendants
// New comment for attendants
/*****
****** Email subscription / form handling
*/
function validateEmailAddress(address){
  var error = false;
  var emailFilter = /^.+@.+\..{2,6}$/;

  // check email address
  if (!(emailFilter.test(address))) {
    error = true;
  }

  // return valid or not valid
  return !error;
}
