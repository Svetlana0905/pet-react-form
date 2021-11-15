import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import dataArray from '../data/data.json';
import { minus, plus, totalTextGuest, btnClear, toggleOpenDropdoun, toggleOpenArrow } from '../store/guestsSlice';
import { selectGuest, guestText, stateDropdown, selectGuestArr, stateArrow } from '../store/guestsSlice';
import Form from '../components/Form/Form';


function GuestList() {
   const dispatch = useDispatch();
   const totalSumGuest = useSelector(selectGuest);
   const textGuests = useSelector(guestText);
   const openDropdown = useSelector(stateDropdown);
   const transformArrow = useSelector(stateArrow);
   const guest = useSelector(selectGuestArr);

   useEffect(() => {
      localStorage.setItem("guest", JSON.stringify(guest));
   }, [guest]);

   function clickHandler(event) {
      event.preventDefault();
      let t = event.target;
      switch (true) {
         case (t.classList.contains('sub-dropdown__plus')):
            dispatch(plus(t.getAttribute('data-key')));
            break;
         case (t.classList.contains('sub-dropdown__minus')):
            dispatch(minus(t.getAttribute('data-key')));
            break;
         case (t.classList.contains('sub-dropdown__btn-use')):
            dispatch(totalTextGuest(totalSumGuest));
            dispatch(toggleOpenDropdoun(openDropdown));
            dispatch(toggleOpenArrow(transformArrow));
            break;
         case (t.classList.contains('sub-dropdown__btn-clear')):
            dispatch(btnClear(totalSumGuest));
            dispatch(toggleOpenDropdoun(openDropdown));
            dispatch(toggleOpenArrow(transformArrow));
            break;
         case (t.classList.contains('btn')):
            dispatch(toggleOpenDropdoun(openDropdown));
            dispatch(toggleOpenArrow(transformArrow));
            break;
         default:
            return true;
      };
   }

   const dataForm = {
      data: dataArray,
      guestText: textGuests,
      sumTotal: totalSumGuest,
      dropdownStyle: openDropdown,
      arrowClass: transformArrow
   }

   return (
      <form className='form' onClick={clickHandler}>
         <Form formData={dataForm} />
         <div className='form__form-button'>
            <button className="form__btn btn btn__green">{dataArray.btnSubmit}</button>
         </div>
      </form>
   )
}

export default GuestList;