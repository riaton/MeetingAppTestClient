import axios from 'axios'

import { IConferenceRepository } from '../domain/Repositories/IConferenceRepository'

export class ConferenceRepository extends IConferenceRepository {

    _ok = "ok"
    _email

    constructor(token, email){
        super()
        axios.defaults.baseURL = process.env.REACT_APP_AWS_API_GATEWAY_ENDPOINT_BASE
        axios.defaults.headers.common['Authorization'] = token
        this._email = email
    }

    //会議室情報 全取得
    async GetAll(room, date){
       return await axios.get(`/getAllMeeting/${room}/${date}`)
       .then((res) => {return res.data})
       .catch((err) => console.log("Failed to fetch. Method = GetAll" + err))
    }

    //会議室情報 個別取得
    async GetOne(room, startAt){
       return await axios.get(`/getOneMeeting/${room}/${startAt}`)
       .then((res) => {return res.data})
       .catch((err) => console.log("Failed to fetch. Method = GetOne" + err))
    }

    //会議室 新規予約
    async Register(time){
        return await axios.post('/registerMeeting', {
            Email: this._email,
            Title: time._title,
            Contents: time._contents,
            Participants: time._members,
            StartAt: time._startAt,
            EndAt: time._endAt,
            Room: time._room,
            Date: time._date
        })
        .then(() => {return this._ok})
        .catch((err) => console.log("Failed to fetch. Method = Register" + err))
    }

    //会議室 予約更新 
    async Update(time){
        return await axios.post('/updateMeeting', {
            Email: this._email,
            Title: time._title,
            Contents: time._contents,
            Participants: time._members,
            StartAt: time._startAt,
            Room: time._room,
            Date: time._date
        })
        .then(() => {return this._ok})
        .catch((err) => console.log("Failed to fetch. Method = Update" + err))
    }
    
    //会議室 予約削除
    async Delete(time){
        return await axios.post('/deleteMeeting', {
            Email: this._email,
            StartAt: time._startAt,
            EndAt: time._endAt,
            Room: time._room,
            Date: time._date
        })
        .then(() => {return this._ok})
        .catch((err) => console.log("Failed to fetch. Method = Delete" + err))
    }
}