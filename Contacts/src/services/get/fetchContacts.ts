import axios from 'axios';
import {ContactType} from '../../types';

const fetchContacts = (): Promise<{data: Array<ContactType>}> =>
  axios.request({
    url: 'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json',
  });

export {fetchContacts};
