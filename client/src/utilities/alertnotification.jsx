import Noty from "noty";

export const showSuccess = (message) => {
  return new Noty({
    type: "success",
    timeout: 5000,
    theme: 'bootstrap-v4',
    layout: "topCenter",
    text: message,
    progressBar: false,
    closeWith: ['button']
  }).show();
};

export const showError = (message) => {
  return new Noty({
    type: "error",
    timeout: 5000,
    theme: 'bootstrap-v4',
    layout: "topCenter",
    text: message,
    progressBar: false,
    closeWith: ['button']
  }).show();
};
