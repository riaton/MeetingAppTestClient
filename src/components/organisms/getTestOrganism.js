import { React, useState } from 'react';

import { ConferenceRepository } from '../../infrastructure/conferenceRepository';
import { LoginRepository } from '../../infrastructure/loginRepository';
import { Input } from '../molucles/input';
import "./organism.css";

export const GetTestOrganism = (props) => {
  const { user } = props

  const [message, setMessage] = useState("")
  const [room, setRoom] = useState("")
  const [date, setDate] = useState("")
  const [startAt, setStartAt] = useState("")
  var loginRepository = new LoginRepository()

  const Get = async (operation) => {
    var token = await loginRepository.GetJwtToken()
    var conferenceRepository = new ConferenceRepository(token, user.attributes.email)
    var result
    setMessage("送信中")
    switch(operation){
      case 'getone':
        result = await conferenceRepository.GetOne(room, startAt)
        break
      case 'getall':
        result = await conferenceRepository.GetAll(room, date)
        break
      default:
        break
    }
    console.log(result)
    if(!result){
      setMessage("読み込み失敗")
      return
    }
    setMessage("ok")
  }

  return(
    <div id="getTestOrganism">
      <h1>取得系テストページ</h1>
      <a href="/update-test">更新系のテストへ</a>
      <Input field="Room" size={20} data={room} func={setRoom} />
      <Input field="Date" size={20} data={date} func={setDate} />
      <Input field="StartAt" size={20} data={startAt} func={setStartAt} />
      <button onClick={() => { Get('getone') }}>個別取得</button>
      <button onClick={() => { Get('getall') }}>全取得</button>
      <h3>{message}</h3>
    </div>
  )
}

export default GetTestOrganism;