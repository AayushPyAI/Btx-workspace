<template>

     <div>
              <div>

             <div>
                <p>Get Project</p>
                <p></p>
             </div>


             <div>
                <p>Project: Web Development and Digital
Marketing</p>

  <p>Created: 11.05.2024</p>
  <p>Due: 11.08.2024</p>
  <p>Assigned To: Kalim Hussain</p>
             </div>

             <div>
              <div>High</div>
              <div>
                <img src="" alt="">
              </div>
             </div>

             <div>

                <div>

                <div>
                    <span v-html="chainIcon"></span>
                    <p>8</p>
                </div>

                  <div>
                    <span></span>
                    <p>8</p>
                </div>

                </div>

            <p>Client: John Company</p>

             </div>




              </div>
        </div>

</template>


<script>

import { chainIcon,messageIcon } from '../../assets/icons';

export default{

    data(){
    return{
        chainIcon,messageIcon
    }
}

}
</script>