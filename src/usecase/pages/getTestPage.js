import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';

import HeaderOrganism from '../../components/organisms/headerOrganism';
import GetTestOrganism from '../../components/organisms/getTestOrganism';

// テストクライアント 取得系テストページ
const GetTestPage = ({ signOut, user }) => {

  return(
    <>
      <HeaderOrganism signOut={signOut} />
      <GetTestOrganism user={user} />
    </>
  )
}

export default withAuthenticator(GetTestPage)