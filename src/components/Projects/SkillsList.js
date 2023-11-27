import classes from './SkillsList.module.css'
const SkillsList = (props) => {

    return (
     <ul className={classes.list}>{
        props.skills.map((item) => (<li key={props.id + item} className={classes.skill}>
            {item}
        </li>))
     }</ul>
    );
  };
  
  export default SkillsList ;
  