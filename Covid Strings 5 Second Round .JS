doc.type.html
html lang en
script
header=document create.element(header)
header.style.backgroundcolor=#4caf50
header.style.color=’white’
header.style.padding=’10px’
header.style.textalign=’center’
header.style.text.fontsize=’24Px’
header.textcontent=’welcome to covid strings5 second round’
document appendchild(header)
<header.html>
heading variables 
the heading numbers that determine where each heading and subheading go 
heading1=second round overview
heading2=matchups
heading3=second round questions
heading4=advancing rounds
subheading1=team stealing
subheading2=result for matchup1
subheading3=result for matchup2
<header.html>
second round overview
is an overview of the second round of the covid strings contest
html
head
utf8
viewport content=width=device-width, initial-scale=one>
title covidstrings5secondround bracket
div id bracket class bracket div
script src bracket.js
link rel= stylesheet href=css
head
body
bracket-container{}
matchup
solid zero;
padding 
text align center
filename=covidstrings5secondround.js
highestremainingseed =(greatest remaining num value in covid strings list)
lowest remaining seed =(lowest remaining num value in covid strings list)
intermediateseed1=(first middle remaining value in covid strings list)
intermediateseed2=(second middle remaining value in covid strings list)
createround(teams)
round = document.createelement(div);
round.classlist.add(round);
for (let i =zero ; i < teams.length; i += two) {
round.appendchild(creatematchup(teams[i],teams[i + one]));
return round;
<header.html>
matchups
contains 4 teams which equals 2 matchups 
matchup1=(intermediate seed2 versus intermediateseed1)
matchup2= (lowest remaining seed versus highest remaining seed)    
matchup.covid strings seed list.add(matchup)
bracket.append child(matchup)
<header.html>
second round questions
the questions asked in the second round of the covid strings contest
java util.scanner
java.util
second round questions=questions[20-27]
collections.shuffle(arrays.aslist(questions)
question20
question21
question22
question23
question24
question25
question26
question27
private string getblanks(int numberofblanks)
char[] chars = new char[numberofblanks]
arrays.fill chars 
return new string chars
bracket add event listener(event))
myclass=(non-concatenated)
if category==math problem:
prompt
log
else:
select from multiple choice
if category==multiplechoice:
select answer
else:
prompt
log
myclass=new myclass(concatenated) 
return category
if category==math problem:
prompt
log
else:
select from multiple choice
if category ==multiplechoice:
select answer
else:
prompt
log
import syntax 
team1=lower ranked seed
team2=the higher seeded opponent
points: 10 points or 20 points
<subheading.html>
team stealing
steal points(stealingteam,victimteam,pointstosteal)
if(victimteam.points>=pointtosteal)
victimteam.points-=pointtosteal;
stealingteampoints+=pointstosteal
console.log([stealingteam.name} stole points from {victim team name}!)
else:
console.log({victimteam.name} doesnt have enough points to steal)
if teams final answer==incorrect:
opposing team steals
else:
change covid strings matchup score
<header.html>
advancing rounds 
contains the criteria for teams in the second round to advance to the championship 
advancingteams=slice(current teams)
<subheading.html>
result for matchup1
the code for how to determine the end result of matchup1 of covid strings 
result= declarewinner(matchup1)
if intermediate seed1 score>=forty:
console.log(intermediate seed1 wins)
else:
remain
if intermediateseed2score>=forty:
console.log(intermediate seed2 wins)
<subheading.html>
result for matchup2
the code for how to determine the end result of matchup2 of covid strings 
result= declarewinner(matchup2)
if  highest remaining seed score >=forty:
console.log(highest remaining seed wins)
else:
remain
if lowest remaining seed score>=forty:
console.log(lowest remaining seed wins)
else:
remain
return filename
