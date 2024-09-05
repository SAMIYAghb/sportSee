import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import style from './Score.module.css';

const Score = () => {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <div className={style.score}>
      score
      <ResponsiveContainer width="100%" height="100%">
      {/* <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}> */}
      <PieChart width={800} height={400} >
        <Pie
          data={data}
          cx="50%"  // centrer horizontalement
          cy="50%"  // centrer verticalement
          innerRadius={70}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        
      </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Score





// const Score = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Score
