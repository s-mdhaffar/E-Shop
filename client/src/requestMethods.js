import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGQyMTI2NDcyY2JkOTFiYTRjNTgyMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTUzNzI0MywiZXhwIjoxNjQ1Nzk2NDQzfQ.EEQ5DHqPZSbdJM9GrfR2dZCasr347i4z4zlC-kX2e-o';

export const publicRequest = axios.create({
	baseURL : BASE_URL
});

export const userRequest = axios.create({
	baseURL : BASE_URL,
	header  : { token: `Bearer ${TOKEN}` }
});
