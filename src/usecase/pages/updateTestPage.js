import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';

import HeaderOrganism from '../../components/organisms/headerOrganism';
import UpdateTestOrganism from '../../components/organisms/updateTestOrganism';

//テストクライアント 更新系テストページ
const UpdateTestPage = ({signOut, user}) => {
    
  return(
    <>
      <HeaderOrganism signOut={signOut} />
      <UpdateTestOrganism user={user} />
    </>
  )
}

export default withAuthenticator(UpdateTestPage);