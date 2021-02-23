export default function spoilerClick(teamToHide) {
  const members = document.querySelectorAll(`.${teamToHide}`);
  const firstRow = document.querySelector(`.${teamToHide}.team-first-row`);
  const spoilerButton = document.querySelector(
    `.${teamToHide} .team-info-cell__collapse`
  );
  members.forEach((item) => {
    if (!item.classList.contains('team-first-row')) {
      item.classList.toggle('hide');
    }
  });
  firstRow.classList.toggle('closed');
  spoilerButton.classList.toggle('active');
}
