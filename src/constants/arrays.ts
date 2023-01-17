export interface Date {
  handler: string,
  select: string,
  arrInt: []
}

export const ARR = [
  { handler: "status" , select: "Select Status" , arrInt: ["Alive","Dead","Unknown"] } , 
  { handler: "gender" , select: "Select Gender" , arrInt: ["Male","Female","Genderless","Unknown"]}
]