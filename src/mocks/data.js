export function genMetrics(seed=Date.now()){
  const r = (n)=> Math.abs(Math.sin((seed+n)*0.001))*1
  const detected = Math.floor(25 + r(1)*40)
  const blocked = Math.floor(detected * (0.65 + r(2)*0.2))
  const critical = Math.max(0, Math.floor((detected-blocked)/10))
  const score = Math.min(99, Math.max(55, Math.floor(60 + (blocked/detected)*40)))
  const series = Array.from({length:20}, (_,i)=> ({ x: i, y: Math.floor(20 + Math.abs(Math.sin(i/2+seed*0.0005))*22 + (i%3)*3) }))
  return { detected, blocked, critical, score, series }
}
