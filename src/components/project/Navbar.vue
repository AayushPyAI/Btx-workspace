<template>

    <nav >

    <div v-html="projectIcon"></div>

    <div>
        
        <span v-html="projectIcon"></span>
        <input type="text" placeholder="Search everything...">

    </div>

    <div>
        <div> <span></span></div>

        <div>
            <img src="" alt="">
        </div>
    
        
    </div>
</nav>



<div>
    
    <div>
       <p>Dashboard</p>
    
       <div>
    
           <div v-for:="item in dashboard">
                   <p>{{item}}</p> 
           </div>
    
       </div>
    </div>
    
    <div>
    
         <select name="" id="">
    
           <option value="">Select</option>
           <option value="">Option 1</option>
           <option value="">Option 2</option>
           <option value="">Option 3</option>
           <option value="">Option 4</option>
    
    
         </select>
    
         <select name="" id="">
           <option value="">Select</option>
           <option value="">Option 1</option>
           <option value="">Option 2</option>
           <option value="">Option 3</option>
           <option value="">Option 4</option>
         </select>
    
         <button>Apply</button>
    </div>
</div>



</template>


<script>

import { projectIcon } from '../../assets/icons';

const dashboard=["TimeTracker","Project","Calender","Benefits","Teams"];


export default{


    data(){
        return{
                projectIcon,
                dashboard
        }
    }
    
}

</script>