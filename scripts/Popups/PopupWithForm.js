import Popups from "./popup.js";

Popups

class PopupWithForm extends Popups {
    constructor(popupSelector,buttonSubmit){
        super(popupSelector);
        this._buttonSubmit = buttonSubmit;
    }
}

