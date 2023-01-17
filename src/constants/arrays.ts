export interface Date {
  handler: string,
  select: string,
  arrInt: []
}

export const ARR = [
  { name: "status" , select: "Select Status" , arrInt: ["Alive","Dead","Unknown"] } , 
  { name: "gender" , select: "Select Gender" , arrInt: ["Male","Female","Genderless","Unknown"]}
]