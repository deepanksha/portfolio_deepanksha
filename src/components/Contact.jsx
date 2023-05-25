import React, { useState } from 'react';
import vg from "../assets/vg.png";
import  toast  from 'react-hot-toast';
import{ motion} from 'framer-motion';
import {addDoc, collection} from "firebase/firestore";
import {db} from "../firebase";


const Contact = () => {
  const  [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [message , setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false) ;

   const submitHandler =async(e) =>{
     e.preventDefault(); 
      setDisableBtn(true);
      try {
        await addDoc(collection(db, "contacts"),{
          name,
          email,
          message,
        });
        setName("");
        setEmail("");
        setMessage("");

        toast.success(`Thank you dear ${name}, Your message has been sent successfully!`);
        setDisableBtn(false);
      } catch (error) {
        toast.error(`Sorry dear ${name},Please try again!`);
        setDisableBtn(false);
        console.log(error )

      }
     
   }

   const animations = {
    form:{
      initial:{
       x:"-100%",
       opacity:0,
      },
      whileInView:{
        x:0,
        opacity:1,
      }
    },
    button:{
      initial:{
       y:"-100%",
       opacity:0,
      },
      whileInView:{
        y:0,
        opacity:1,
      }
    },
   }

  return (
    <div id='contact'>

      <section>
        <motion.form onSubmit = {submitHandler} {...animations.form}>
           <h2 className='gradientText'>Contact Me</h2> 
           <input type="text" placeholder='Your Name' required  
           value={name} 
           onChange={(e) =>setName(e.target.value)}
           />
           <input type="email" placeholder='Your Email' required
            value={email} 
            onChange={(e) =>setEmail(e.target.value)}
           />
           <textarea name="" id="" cols="40" rows="5"placeholder='Your Message...' required 
            value={message} 
            onChange={(e) =>setMessage(e.target.value)}
           ></textarea>
           <motion.button 
           disabled={disableBtn} 
           type="submit" {...animations.button}
           className={disableBtn ? "disableBtn" : ""}
           >  Send</motion.button>
        </motion.form>
      </section> 

      <aside>
        <img src={vg} alt="Graphics" />
      </aside>


    </div>
  )
}

export default Contact



