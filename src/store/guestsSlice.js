import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   guestList: localStorage.getItem("guest")
      ? JSON.parse(localStorage.getItem("guest"))
      : {
         value: {},
         styleSubDropdown: 'hidden',
         styleArrow: 'btn',
         guestText: 'Сколько гостей',
         totalTextAdult: [
            "Гость",
            "Гостя",
            "Гостей"
         ],
      },
};

export const guestSlice = createSlice({
   name: 'guest',
   initialState,
   reducers: {
      toggleOpenDropdoun: (state, data) => {
         let thisStyle = data.payload;
         thisStyle === 'hidden' ? state.guestList.styleSubDropdown = 'sub-dropdown__wrap' : state.guestList.styleSubDropdown = 'hidden';
         return state;
      },
      toggleOpenArrow: (state, data) => {
         let thisStyle = data.payload;
         thisStyle === 'btn' ? state.guestList.styleArrow += ' open' : state.guestList.styleArrow = 'btn';
         return state;
      },
      minus: (state, data) => {
         let mark = data.payload;
         if (state.guestList.value[mark] >= 1) state.guestList.value[mark]--;
         return state;
      },
      plus: (state, data) => {
         let mark = data.payload;
         if (state.guestList.value[mark] === undefined) state.guestList.value[mark] = 1;
         else if (state.guestList.value[mark] <= 9) state.guestList.value[mark]++;
         return state;
      },
      btnClear: (state) => {
         Object.keys(state.guestList.value).forEach(function (mark) {
            delete state.guestList.value[mark];
         });
         state.guestList.guestText = 'Сколько гостей';
         return state;
      },
      totalTextGuest: (state, data) => {
         let sum = data.payload;
         let isAdults = 0;
         if (!sum.childrens) {
            isAdults = sum.adults;
         } else isAdults = sum.adults + sum.childrens;

         let adultText = ``;
         if (isAdults === 1) {
            adultText = `${isAdults} ${state.guestList.totalTextAdult[0]}`;
         } else if (isAdults > 1 && isAdults < 5) {
            adultText = `${isAdults} ${state.guestList.totalTextAdult[1]}`;
         } else if (isAdults >= 5 && isAdults < 10) {
            adultText = `${isAdults} ${state.guestList.totalTextAdult[2]}`;
         }

         let babyText = ``;
         if (sum.babies === 1) {
            babyText = `${sum.babies} Младенец`;
         } else if (sum.babies > 1 && sum.babies <= 4) {
            babyText = `${sum.babies} Младенеца`;
         }

         sum.adults > 0 ? state.guestList.guestText = `${adultText} ${babyText} ` : state.guestList.guestText = 'Сколько гостей';
         return state;
      },
   }
});

export const { minus, plus, totalTextGuest, totalSum, btnClear, toggleOpenDropdoun, toggleOpenArrow } = guestSlice.actions;
export const selectGuest = state => state.guest.guestList.value;
export const guestText = state => state.guest.guestList.guestText;
export const stateDropdown = state => state.guest.guestList.styleSubDropdown;
export const stateArrow = state => state.guest.guestList.styleArrow;
export const selectGuestArr = state => state.guest.guestList;
export default guestSlice.reducer;