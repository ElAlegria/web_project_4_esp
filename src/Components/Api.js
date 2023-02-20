export default class Api {
  constructor(options) {
    this.options = options;
  }
  handleUserProfile() {
    fetch("https://around.nomoreparties.co/v1/web_es_cohort_04/users/me", {
      method: "GET",
      headers: {
        authorization: "7b89216e-03f6-4244-8235-930eb464c231",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
  getInitialCards() {
    fetch("https://around.nomoreparties.co/v1/web_es_cohort_04/cards", {
      method: "GET",
      headers: {
        authorization: "7b89216e-03f6-4244-8235-930eb464c231",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
  handleEditProfile(value) {
    fetch("https://around.nomoreparties.co/v1/web_es_cohort_04/users/me", {
      method: "PATCH",
      headers: {
        authorization: "7b89216e-03f6-4244-8235-930eb464c231",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${value.name}`,
        about: `${value.about}`,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
  handleAddCards(value) {
    fetch("https://around.nomoreparties.co/v1/web_es_cohort_04/cards", {
      method: "POST",
      headers: {
        authorization: "7b89216e-03f6-4244-8235-930eb464c231",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${value.title}`,
        link: `${value.link}`,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
  handleDelateCard(cardId) {
    fetch(
      `https://around.nomoreparties.co/v1/web_es_cohort_04/cards/${cardId}`,
      {
        method: "DELETE",
        headers: {
          authorization: "7b89216e-03f6-4244-8235-930eb464c231",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  countLink() {
    //earring
  }

  testedDelate() {
    this.handleUserProfile();
    this.getInitialCards();
    this.handleAddCards("");
    this.handleEditProfile("");
    this.handleDelateCard("");
  }
}
