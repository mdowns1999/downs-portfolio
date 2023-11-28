import { useParams } from "react-router-dom";


const ProjectDetailPage = () => {
  const params = useParams();
    return (
     <><p>PROJECT ID: {params.id}</p></>
    );
  };
  
  export default ProjectDetailPage ;
  