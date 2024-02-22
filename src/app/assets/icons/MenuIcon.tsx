export default function MenuIcon({
  width=20,
  height=20,
  color="gray"
}){

  return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
  <path d="M4 6H20M4 12H20M4 18H20" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
}

