function nextSecond(h, m, s) {
    s++
    if (s === 60) {
      s = 0;
      m++
    }
    if (m === 60) {
      m = 0;
      h++
    }
    if (h === 24) {
      h = 0
    }
    return { h, m, s }
  }
  const time = { h: 23, m: 59, s: 59 }
  const nextTime = nextSecond(time.h, time.m, time.s)
  
  console.log(`Следующее время: ${nextTime.h}:${nextTime.m}:${nextTime.s}`)









  function timeToCoincidence(h, m) {
    if (h < 1 || h > 12 || m < 0 || m > 59) {
      console.log("Числа должны быть в 12-часовом формате")
      return
    }
  
    let ha = (h % 12) * 30 + m * 0.5
    let ma = m * 6
  
    let t = 0
  
    while (ha !== ma) {
      t++
      m++
      if (m === 60) {
        m = 0
        h++
        if (h === 13) h = 1
      }
      ha = (h % 12) * 30 + m * 0.5
      ma = m * 6
    }
  
    console.log(`${t} минут до совпадения стрелок`)
  }
  
  const h = 10 // чисто пример
  const m = 30 // пример
  
  console.log(timeToCoincidence(h, m))