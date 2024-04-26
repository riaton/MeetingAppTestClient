import { Auth } from 'aws-amplify';

import { ILoginRepository } from '../domain/Repositories/ILoginRepository';

export class LoginRepository extends ILoginRepository {
    //Jwtトークン取得
    async GetJwtToken() {
        const session = await Auth.currentSession();
        return session.getAccessToken().getJwtToken();
    }
}