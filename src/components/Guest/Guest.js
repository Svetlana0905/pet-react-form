import GuestList from "../../containers/GuestsList";
import { useSelector, useDispatch } from 'react-redux';
import { toggleOpenDropdoun, toggleOpenArrow } from '../../store/guestsSlice';
import { stateDropdown, stateArrow } from '../../store/guestsSlice';
import './guest.scss';

function Guest() {
   const dispatch = useDispatch();
   const openDropdown = useSelector(stateDropdown);
   const transformArrow = useSelector(stateArrow);

   function closeDrop(event) {
      let t = event.target;
      if (openDropdown === 'sub-dropdown__wrap') {
         switch (true) {
            case (!t.closest('form')):
               dispatch(toggleOpenDropdoun(openDropdown));
               dispatch(toggleOpenArrow(transformArrow));
               break;
            default:
               return true;
         };
      }
   }
   return (
      <main className='main__guest' role='main' onClick={closeDrop}>
         <section className='container container__home'>
            <GuestList />
            <p className='text'>Лучшие номера для вашей работы, <br />отдыха и просто вдохновения</p>
         </section>
      </main>
   )
}

export default Guest;
