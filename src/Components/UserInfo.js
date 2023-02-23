export default class UserInfo {
  constructor({userName, userOcupation,userImage}) {
    this._userName = document.querySelector(userName);
    this._userOcupation = document.querySelector(userOcupation);
    this._userImage = document.querySelector(userImage)
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userOcupation: this._userOcupation.textContent,
      userImage: this._userImage.src
    };
  }

  setUserInfo(data) {
    const {userName, userOcupation,userImage} = data;
    this._userName.textContent = userName;
    this._userOcupation.textContent = userOcupation;
    this._userImage.src = userImage
  }
}
