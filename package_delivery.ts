export function was_package_received_yesterday(tz_from:number, tz_to:number, start:number, duration:number):boolean{
  let arrival_hour_in_sender_tz = start + duration
  let arrival_hour_in_destination_tz = arrival_hour_in_sender_tz + (tz_to - tz_from)
  if (arrival_hour_in_destination_tz >= 0)
  return false
  else
    return true
}
