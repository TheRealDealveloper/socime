import MyIntro from "components/myintro";
import classes from './index.module.css'

export default function LandingPage() {
  return (
    <>
      <MyIntro/>
      <div>
        <img className={classes.mypic} src="/me.png" alt="where is my pic?"/>
      </div>
    </>
  )
}