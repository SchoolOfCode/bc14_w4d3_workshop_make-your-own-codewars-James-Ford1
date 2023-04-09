
// 👉 Write your kata here!
// write a function that tells you your heart rate training zone, so you know what your gains are when you're squatting every morning
// your maximum heart rate is your age in years minused from 220
// your 'heart rate reserve' is max heart rate minus your average resting heart rate 
// if HR during squats is between 0 -50 % of 'heart rate reserve' this zone is not exercise
// if HR during squats is between 50 -75 % of 'heart rate reserve'this is the fat burn zone
// if HR during squats is between 75 -85 % of 'heart rate reserve' this is the aerobic endurance zone
// if HR during squats is above 85 % of 'heart rate reserve' this is the anaerobic threshold zone

// 

//👉 Write the function your CodeWarriors will start with below here:
  

   export function squatGains(age, restingHeartRate, squattingHeartRate) {
    const maxHeartRate = 220 - age;
    const heartRateReserve = maxHeartRate - restingHeartRate;
    const intensityPercentage = (squattingHeartRate - restingHeartRate) / heartRateReserve * 100;
  
    if (intensityPercentage <= 50) {
      return "Not exercise";
    } else if (intensityPercentage <= 75) {
      return "Fat burn";
    } else if (intensityPercentage <= 85) {
      return "Aerobic endurance";
    } else {
      return "Anaerobic threshold";
    }
}

const heartRateZone = squatGains(40, 70, 150);
console.log(heartRateZone); 
console.log("hi")