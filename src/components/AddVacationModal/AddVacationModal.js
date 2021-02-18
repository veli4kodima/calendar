import changeModalVis from '../../utils/changeModalVis/changeModalVis';

export default function AddVacationModal() {
  return (
    <>
      <div className="modal__overlay"></div>

      <div className="modal">
        <div className="modal__header">
          <div className="modal__name">Vacation Request</div>
          <div className="modal__days">8 Days</div>
        </div>
        <div className="modal__body">
          <div className="modal__title">Dates</div>
          <div className="modal_dates_inner">
            <div className="modal__column">
              <div className="modal__subtitle">From</div>
              <div className="modal__date">15.06.2020</div>
            </div>
            <div className="modal__column">
              <div className="modal__subtitle">To</div>
              <div className="modal__date">18.06.2020</div>
            </div>
          </div>
          <div className="modal__title">Vac Type</div>
          <select className="modal__menu">
            <option>Paid</option>
            <option>Unpaid</option>
          </select>
          <div className="modal__footer">
            <div
              className="modal__btn modal__btn-cancel"
              onClick={changeModalVis}
            >
              Cancel
            </div>
            <div
              className="modal__btn modal__btn-send modal__btn-green"
              onClick={changeModalVis}
            >
              Send
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
