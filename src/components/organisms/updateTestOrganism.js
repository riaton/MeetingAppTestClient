import { React, useState } from 'react';

import { ConferenceRepository } from '../../infrastructure/conferenceRepository';
import { LoginRepository } from '../../infrastructure/loginRepository';
import { Input } from '../molucles/input';
import { TextArea } from '../molucles/textArea';
import { Time } from '../../domain/Models/time';

export const UpdateTestOrganism = (props) => {
  const { user } = props
  const [title, setTitle] = useState("")
  const [members, setMembers] = useState([""])
  const [room, setRoom] = useState("")
  const [contents, setContents] = useState("")
  const [date, setDate] = useState("")
  const [startAt, setStartAt] = useState("")
  const [endAt, setEndAt] = useState("")
  const [message, setMessage] = useState("")
  var loginRepository = new LoginRepository()
  
  const Update = async(operation) => {
    const time = new Time(date, startAt, endAt, 
        title, contents, members, room)
    setMessage("送信中")
    if(time._date === undefined){
        setMessage("正しく入力してください")
        return
    }
    var token = await loginRepository.GetJwtToken()
    var conferenceRepository = new ConferenceRepository(token, user.attributes.email)
    var result
    switch(operation){
      case 'register':
        result = await conferenceRepository.Register(time)
        break
      case 'update':
        result = await conferenceRepository.Update(time)
        break
      case 'delete':
        result = await conferenceRepository.Delete(time)
        break
      default:
        break
    }
    if(!result){
      setMessage("エラー")
      return
    }
    setMessage("OK")
  }

  return(
    <div id="updateTestOrganism">
      <h1>更新系テストページ</h1>
      <h3>{message}</h3>
      <Input field="Title" size={100} data={title} func={setTitle} />
      <Input field="Room" size={100} data={room} func={setRoom} />
      <Input field="Date" size={100} data={date} func={setDate} />
      <Input field="StartAt" size={100} data={startAt} func={setStartAt} />
      <Input field="EndAt" size={100} data={endAt} func={setEndAt} />
      <TextArea field="Contents" cols={99} rows={3} data={contents} func={setContents} />
      <Input field="Members" size={100} data={members} func={setMembers} />
      <br></br>
      <button onClick={() => { Update('register') }}>Register</button>
      <button onClick={() => { Update('update') }}>Update</button>
      <button onClick={() => { Update('delete') }}>Delete</button>
    </div>
  )
}

export default UpdateTestOrganism;