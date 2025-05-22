<template>
 
 <Navbar/>


 <div>
      
    <div>
        <div>
            <h3>Projects</h3>
            <p>See through your project and the progress</p>
        </div>

        <div>
            <div>
                <span v-html="phoneIcon"></span>
            </div>
            <div>
                <span v-html="messageBoxIcon"></span>
            </div>
        </div>
    </div>

    <div>
        <div>App > project</div>

        <div>
            <div>
                <input type="text" placeholder="Search everything...">
            </div>

            <div>

                <span v-html="projectIcon"></span>

            </div>


            <div>
                 <span v-html="projectIcon"></span>

                </div>

                <div>
                     <span v-html="projectIcon"></span>

                </div>
        </div>
    </div>

 </div>


 <div v-for="item in submenu" >
    <div>
        <p>{{item}}</p>
    </div>

 </div>





</template>


<script>
import { projectIcon } from '../../assets/icons';
import { phoneIcon,messageBoxIcon } from '../../assets/icons';
import Navbar from './Navbar.vue'

const submenu=["Overview",
    "Details","Task","Milestones","Notes"
];




export default{


    data(){
        return{
                projectIcon,
                dashboard,
                phoneIcon,
                messageBoxIcon,
                submenu
        }
    }
    ,
    components: {
        Navbar
    },
    
}



</script>