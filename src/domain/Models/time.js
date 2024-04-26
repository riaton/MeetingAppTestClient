export class Time {
    _date
    _startAt
    _endAt
    _title
    _members
    _contents
    _room

    constructor(date, startAt, endAt, title, 
        contents, members, room){
        this._members = this.SetMembers(members)
        this._room = room
        this._contents = contents
        this._title = title
        this._startAt = startAt
        this._endAt = endAt
        this._date = date
        if(this._title === "" || this._startAt === "" ||
         this._endAt === "" || this._date === ""){
            this._date = undefined
            return
        }
    }

    //参加者の配列作成
    SetMembers(members){
        if(members === null || members === undefined || 
            members === ""){
            return []
        }
        var stringMembers = String(members)
        return stringMembers.split(',')
    }
}