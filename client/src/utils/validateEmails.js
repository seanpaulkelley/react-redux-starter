//import _ from 'lodash';

// see http://emailregex.com/ for email validation options
//const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default function(emails) {
  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => re.test(email) === false || !email.length);

  if (invalidEmails.length) {
    return `These emails are invalid ${invalidEmails}`;
  }
}
