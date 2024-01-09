export type RockPaperScissors = 'rock' | 'scissors' | 'paper';
export function playGame(choose:RockPaperScissors):string[] {
    const game = ['rock','scissors', 'paper']
    const rnd = Math.floor(Math.random() * 3);
  if(choose === 'rock'){
    if(game[rnd] === 'rock'){
      return ['draw','rock',choose]
    }else if(game[rnd] === 'scissors'){
      return ['win','scissors',choose]
    }else if(game[rnd] === 'paper'){
      return ['lose','paper',choose]
    }
  }
  if(choose === 'scissors'){
    if(game[rnd] === 'rock'){
      return ['lose', 'rock',choose]
    }else if(game[rnd] === 'scissors'){
      return ['draw','scissors',choose]
    }else if(game[rnd] === 'paper'){
      return ['win', 'paper',choose]
    }
  }
  if(choose === 'paper'){
    if(game[rnd] === 'rock'){
      return ['win','rock',choose]
    }else if(game[rnd] === 'scissors'){
      return ['lose', 'scissors',choose]
    }else if(game[rnd] === 'paper'){
      return ['draw', 'paper',choose]
    }
  }
  return []
}

