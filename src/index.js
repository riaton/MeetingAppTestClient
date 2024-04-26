import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify';

import './index.css';
import GetTestPage from './usecase/pages/getTestPage';
import UpdateTestPage from './usecase/pages/updateTestPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
Amplify.configure({
  Auth: {
    region: process.env.REACT_APP_AWS_REGION,
    userPoolId: process.env.REACT_APP_USERPOOL_ID,
    userPoolWebClientId: process.env.REACT_APP_USERPOOL_CLIENT,
  }
});

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<GetTestPage />} />
        <Route path="/update-test" element={<UpdateTestPage />} />
      </Routes>
    </BrowserRouter>
  </>
);
