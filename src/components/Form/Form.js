import './form.scss';
import '../scss/button.scss';

function Form(props) {

   let dataArray = props.formData.data;
   let totalSum = props.formData.sumTotal;
   let dropdownStyle = props.formData.dropdownStyle;
   let guestsText = props.formData.guestText;
   let styleArrow = props.formData.arrowClass;

   return (
      <>
         <div className='form__form-header'>
            <h4 className='form__title'>{dataArray.title}</h4>
            <h5 className='form__subtitle'>{dataArray.subtitle}</h5>
            <button className={styleArrow}>{guestsText}</button>
         </div>
         <div className='sub-dropdown'>
            <div className={dropdownStyle}>
               {dataArray.btnText.map((item, id) =>
                  <div key={id} className='sub-dropdown__inner-between'>
                     <span>{item.headingBtn}</span>
                     <div className="sub-dropdown__btn-box btn-box">
                        <button data-key={item.caption} className="sub-dropdown__minus">-</button>
                        <input className="sub-dropdown__num"
                           defaultValue={totalSum.hasOwnProperty(item.caption) ? totalSum[item.caption] : 0}
                           type="button" />
                        <button data-key={item.caption} className="sub-dropdown__plus">+</button>
                     </div>
                  </div>
               )}
               <p className="sub-dropdown__buttons">
                  <button type="button" className="sub-dropdown__btn-clear">очистить</button>
                  <button type="button" className="sub-dropdown__btn-use">применить</button>
               </p>
            </div>
         </div>

      </>
   )
}
export default Form;