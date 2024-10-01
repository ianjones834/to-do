function init() {
  $('#newlistoverlay').hide();
  if (localStorage.getItem("lists") != "") {
    const lists = JSON.parse(localStorage.getItem("lists"));
  }
  else {
    return [];
  }
}