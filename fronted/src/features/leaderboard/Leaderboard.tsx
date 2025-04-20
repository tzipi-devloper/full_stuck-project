import { useDispatch} from "react-redux"
import { show } from './leaderboardSlice'
const Leaderboard = () => {
   const dispatch = useDispatch()
  return (
    <div>
     <button onClick={()=>dispatch(show())}>Leader board</button>
    </div>
  )
}

export default Leaderboard
