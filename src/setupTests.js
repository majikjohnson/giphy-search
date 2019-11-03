// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
global.fetch = require('jest-fetch-mock');

