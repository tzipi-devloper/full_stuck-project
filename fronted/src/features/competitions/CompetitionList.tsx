import { useSelector } from "react-redux"
import { selectCurrentCompetitionList } from './competitionsSlice'
import CompetitionCard from "./CompetitionCard";

const CompetitionList = () => {
  const currentCompetitionlist = useSelector(selectCurrentCompetitionList);

  return (
    <div>
          {currentCompetitionlist.map(competitionItem => (
                <CompetitionCard 
                    key={competitionItem.id} 
                    competitionItem={competitionItem} 
                />
            ))}          
    </div>
  )
}

export default CompetitionList
