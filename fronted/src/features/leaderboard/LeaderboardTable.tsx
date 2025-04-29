import { useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";

type Leader = {
  name: string;
  score: number;
  file: string;
};

const leaders: Leader[] = [
  { name: "Dana", score: 98, file: "/img1.jpg" },
  { name: "Yossi", score: 95, file: "/img2.jpg" },
  { name: "Rina", score: 92, file: "/img3.jpg" }
];

const LeaderboardTable = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Leader | null>(null);

  const handleClick = (leader: Leader) => {
    setSelected(leader);
    setOpen(true);
  };

  return (
    <div>
      <h3>המובילים</h3>
      <table>
        <thead>
          <tr><th>שם</th><th>דירוג</th><th></th></tr>
        </thead>
        <tbody>
          {leaders.map((leader, idx) => (
            <tr key={idx}>
              <td>{leader.name}</td>
              <td>{leader.score}</td>
              <td><button onClick={() => handleClick(leader)}>צפה בתוצר</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>תוצר מוביל</DialogTitle>
        <DialogContent>
          {selected && (
            <img src={selected.file} alt="תוצר" width={200} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LeaderboardTable;
