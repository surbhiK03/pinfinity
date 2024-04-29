import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import './styles/Create.css'


function Create(){
  return (
    <>
     <div className='container'>
      <div className='add_pin_container'>

        <div className='side' id='left-side'>


          <div className='section1'>
            <div className='pint_mock_icon_container'>
              <a className='pint_mock_icon'><FontAwesomeIcon icon={faEllipsis} /></a>
            </div>
          </div>


          <div className='section2'>
            <label htmlFor='upload_img' id='upload_img_label'
              
            >
              <div className='upload_img_container'>
                <div id='dotted_border'>
                  <div className='pint_mock_icon_container'>
                    <a className='pint_mock_icon'><FontAwesomeIcon icon={faArrowUp} /></a>
                  </div>
                  <div>Click to upload</div>
                  <div>Recommendation: Use hight-quality .jpg less than 20MB</div>
                </div>
              </div>
              <input type='file' name='upload_img' id='upload_img' value=""></input>
            </label>

            <div className='modals_pin'
           
            >
            <div className='pin_image'>
              <img alt='pin_image' />
            </div>
            </div>
          </div>


          <div className='section3'>
            <div className='save_from_site'>Save from site</div>
          </div>
        </div>


        <div className='side' id='right-side'>
          <div className='section1'>
            <div className='select_size'>
              <select defaultValue="Select" name='pin_size' id="pin_size">
                <option value="">Select</option>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
              </select>
              <div className='save_pin'>Save</div>
            </div>
          </div>


          <div className='section2'>
            <input placeholder='Add your title' type='text' className='new_pin_input' id='pin_title'></input>
            <input placeholder='Tell everyone what your pin is about' type='text' className='new_pin_input' id='pin_description'></input>
            <input placeholder='Add a destination link' type='text' className='new_pin_input' id='pin_destination'></input>
     
          </div>


          <div className='section3'>

          </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Create