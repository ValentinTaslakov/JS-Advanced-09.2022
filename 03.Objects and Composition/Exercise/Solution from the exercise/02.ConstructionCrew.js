function constructionCrew(obj){
    if(obj.dizziness === true){
        let neededWather = 0.1 * obj.weight * obj.experience;
//изчислявам необходимата вода спрямо теглото и опита
        obj['levelOfHydrated'] = obj.levelOfHydrated + neededWather;
        //презаписвам стойноста на полетата
        obj['dizziness'] = false;
        return obj;
    }
    return obj;
}

console.log(constructionCrew(
    { weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true })
  );
  console.log("------------------");

  console.log(constructionCrew(
    { weight: 95,
        experience: 3,
        levelOfHydrated: 0,
        dizziness: false }
      )
  );