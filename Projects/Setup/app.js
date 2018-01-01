new Vue({
  el: '#app',
  data: {
    gameIsRunning: false,
    playerHP: 100,
    monsterHP: 100,
    playerDmg: 0,
    monsterDmg: 0,
    playerHeal: 0,
    didPlayerHeal: false,
    Healed: false,
    log: []
  },
  methods: {
    startGame: function(){
      this.gameIsRunning = true;
      this.playerHP = 100;
      this.monsterHP = 100;
    },
    attack: function(){
      this.didPlayerHeal = false;
      playerDMG = Math.floor((Math.random() * 10) + 1);
      monsterDMG = Math.floor((Math.random() * 10) + 1);
      this.playerHP -= playerDMG;
      this.monsterHP -= monsterDMG;
      this.log.push({DamageToPlayer: playerDMG, DamageToMonster: monsterDMG, Heal: 0, SpecialDmg: 0});

      if( this.monsterHP <= 0 ){
        alert("You won!");
        this.gameIsRunning = false;
      }else if (this.playerHP <= 0 ){
        alert("You lost");
        this.gameIsRunning = false;
      }
    },
    specialAttack: function(){
     this.monsterHP -= 15;
     this.log.push({DamageToPlayer: 0, DamageToMonster: 0, Heal: 0, SpecialDmg: 15});
   },
   heal: function(){
     this.didPlayerHeal = true;
     playerHeal = Math.floor((Math.random() * 10) + 1);
     this.playerHP += playerHeal;
     this.log.push({DamageToPlayer: 0, DamageToMonster: 0, Heal: playerHeal, SpecialDmg: 0});
   },
   giveUp: function(){
     var willGiveUp = confirm("Do you want to give up?");
     if(willGiveUp ==  true){
       location.reload();
     }else{
       return false;
     }
   }
  }
});
