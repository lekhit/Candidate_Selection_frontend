import AdapterDateFns from '@mui/lab/AdapterDateFns'; // Depending on the library you picked
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import { Formik, Form, Field } from 'formik';
import { DatePicker, DateTimePicker, TimePicker } from 'formik-mui-lab';
import * as React from 'react';

function App() {
  return (
    <>
    <form action="http://localhost:8000/person/6/update/" data-method="POST" enctype="multipart/form-data" class="form-horizontal" novalidate="">
                          <fieldset>
                            

  
    <div class="form-group ">
  
    <label class="col-sm-2 control-label ">
      Fname
    </label>
  

  <div class="col-sm-10">
    <input name="Fname" class="form-control" type="text" value="ramesh"/>

    

    
  </div>
</div>

  

  
    <div class="form-group ">
  
    <label class="col-sm-2 control-label ">
      Lname
    </label>
  

  <div class="col-sm-10">
    <input name="Lname" class="form-control" type="text" value="sure">
</input>
    

    
  </div>
</div>

  

  
    <div class="form-group ">
  
    <label class="col-sm-2 control-label ">
      Contact Number
    </label>
  

  <div class="col-sm-10">
    <input name="Contact_Number" class="form-control" type="text" value="1234567890"/>

    

    
  </div>
</div>

  

  
    <div class="form-group ">
  
    <label class="col-sm-2 control-label ">
      Email
    </label>
  

  <div class="col-sm-10">
    <input name="Email" class="form-control" type="email" value="b@g.com"/>

    

    
  </div>
</div>

  

  
    <div class="form-group horizontal-checkbox ">
  
    <label class="col-sm-2 control-label ">
      Status
    </label>
  

  <div class="col-sm-10">
    <input type="checkbox" name="Status" value="true" checked=""/>

    

    
  </div>
</div>

  

  
    <div class="form-group ">
  
    <label class="col-sm-2 control-label ">
      About
    </label>
  

  <div class="col-sm-10">
    <textarea name="About" class="form-control">sdf</textarea>

    

    
  </div>
</div>

  

  
    <div class="form-group ">
  
    <label class="col-sm-2 control-label ">
      Experience
    </label>
  

  <div class="col-sm-10">
    <textarea name="Experience" class="form-control">sdf</textarea>

    

    
  </div>
</div>

  

  
    <div class="form-group ">
  
    <label class="col-sm-2 control-label ">
      Educational details
    </label>
  

  <div class="col-sm-10">
    <input name="Educational_details" class="form-control" type="text" value="sdf"/>

    

    
  </div>
</div>

  

  
    <div class="form-group ">
  
    <label class="col-sm-2 control-label ">
      Resume
    </label>
  

  <div class="col-sm-10">
    <input name="Resume" type="file" value="http://localhost:8000/uploads/uploads/2022/09/03/Lekhit_Borole_resume_18th_August_1.pdf"/>

    

    
  </div>
</div>

  

  


                            <div class="form-actions">
                              <button class="btn btn-primary js-tooltip" title="" data-original-title="Make a PUT request on the Person Update Api resource">PUT</button>
                            </div>
                            </fieldset>
                        </form>
    </>
  );
}
export default  App;