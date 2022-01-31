/*
Given an array of pairs represengting the teams that have competed against each other and 
an array containing the results of each competition, write a function that returns the winner of
the tournament.  The input arrays are named competitions and results, [homeTeam, awayTeam],
where each team is a string of at most 30 characters representing the name of the team. The results array 
contains information about the winner of each corresponding competition in the competitions array. Specifically,
results[i] denotes the winner of competitions[i], where a 1 in the results array means that the home in the corresponding won
and a 0 means that the away team won.

----
sample input
competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]

results = [0, 0, 1]

sample output
"Python"
// C# beats HTML, Python beats C#, and Python beats HTML


----------------------------------------
//

--INITIAL LOGIC---
iterate over competitions array
check competitions[i]
	if results[i] === 0
		competitions[i][1]
		store and add 3 points
	else if results[i] === 1
		store and add competitions[i][0] 
		add 3 points

*/


//FIRST ATTEMPT
function tournamentWinner(competitions, results) {
    const score = {}
      let greatest = [0, '']
      for(let i = 0; i < competitions.length; i++) {
          if(results[i]){
              if(!score[competitions[i][0]]) {
                  score[competitions[i][0]] = 3
              } else {
                  score[competitions[i][0]] += 3
              }
          } else {
              if(!score[competitions[i][1]]) {
                  score[competitions[i][1]] = 3
              } else {
                  score[competitions[i][1]] += 3
              }
          }
      }
    
      for(teams in score) {
          if(score[teams] > greatest[0]) {
              greatest[1] = teams
              greatest[0] = score[teams]
          }
      }
      return greatest[1]
  }



//ALGO SOLUTION
//O(n) time O(k) space
const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
    //keep track of best team that we've found or one w/ highest score
    let currentBestTeam = ''
    //hashtable
    const scores = {[currentBestTeam]: 0}
    //loop through competitions array
    for(let i = 0; i < competitions.length; i++) {
    
        const result = results[i]
        const [homeTeam, awayTeam] = competitions[i]
    
        //check winning team
        const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam

        updateScores(winningTeam, 3, scores);
    
        //check if we need to update currentBestTeam, based on score we just updated
        if(scores[winningTeam] > scores[currentBestTeam]) {
        currentBestTeam = winningTeam
    }

    return currentBestTeam

    }

    function updateScores(team, points, scores) {
        if(!(team in scores)) scores[team] = 0
        scores[team] += points;
    }

}

