import { CompetitionItem } from "./competitionsTypes"
const CompetitionCard = ({ competitionItem }: { competitionItem: CompetitionItem }) => {
  return (
    <div>
      <h1>{competitionItem.name}</h1>
    </div>
  )
}

export default CompetitionCard
