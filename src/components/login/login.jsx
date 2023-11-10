import React, {useState} from "react";
import styles from './login.module.scss'

const Login =()=>{
const [rotate, setRotate]=useState(false)

    return(
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={rotate?`${styles.subcontainer} ${styles.subregister}`:styles.subcontainer}>
                    {!rotate?
                    <div>
            <h1 className={styles.title}>Login</h1>

            <div>
                <input className={styles.inputmail} type='text' placeholder='Email'/><br />
                <input className={styles.inputmail} type='password' placeholder='Password'/><br />
                <div className={styles.buttoncontainer}>
                <button>Submit</button>
                <button onClick={()=> {
                   setTimeout(()=>{
                    setRotate(!rotate)

                   },1)
                      
                      }}>Regester</button>
                </div>
            </div>
            </div>:
            <div>
                 <div className={styles.backcard}>
            <h1 className={styles.title}>Regester</h1>

            <div >
                <input className={styles.inputmail} type='text' placeholder='Email'/><br />
                <input className={styles.inputmail} type='password' placeholder='Password'/><br />
                <div className={styles.buttoncontainer}>
                <button>Submit</button>
                <button onClick={(e)=> {
                   setTimeout(()=>{
                    setRotate(!rotate)
                   },1)
                      
                      
                      }}>SIGN IN</button>
                </div>
            </div>
            </div>
                </div>}
            </div>
            </div>


        </div>
    )
}

export default Login