class AverageSessions {
  constructor(data) {
    this._userId = data.userId;
    this._sessions = data.sessions;
  }

  get userId() {
    return this._userId;
  }

  get sessions() {
    return this._sessions.map((session) => {
      let weekday = " ";

      switch (session.day) {
        case 1:
          weekday = "L";
          break;
        case 2:
          weekday = "M";
          break;
        case 3:
          weekday = "M";
          break;
        case 4:
          weekday = "J";
          break;
        case 5:
          weekday = "V";
          break;
        case 6:
          weekday = "S";
          break;
        case 7:
          weekday = "D";
          break;
        default:
          return session.day;
      }

      return {
        day: weekday,
        sessionLength: session.sessionLength,
      };
    });
  }
}

export default AverageSessions;
