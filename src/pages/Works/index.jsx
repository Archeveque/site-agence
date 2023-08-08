import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudyCase from './../../components/Studies'
const Works = () => 
<div class="container">
    <h1>Works</h1>
    <h3>Au fil des années, nous avons pu accompagner les meilleurs.</h3>
    <p>
Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.</p>
</div>

const Studycase = () => {
    const { StudySlug } = useParams();
    const [currentStudy, setCurrentStudy] = useState(undefined)
    useEffect(() => {
      const foundStudy = StudyCase.find((study) => study.slug === studySlug);
      setCurrentStudy(foundstudy);
    }, [studySlug])
}  
;
export default Works;