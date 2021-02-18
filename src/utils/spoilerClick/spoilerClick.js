export default function spoilerClick(teamToHide) {
  const members = document.querySelectorAll(`.${teamToHide}`);
  members.forEach((item) => {
    item.classList.toggle('hide');
  });
}
