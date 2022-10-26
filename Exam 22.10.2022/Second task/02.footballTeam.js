class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName,
            this.country = country,
            this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let playersName = [];
        footballPlayers.forEach(player => {
            let [name, age, playerValue] = player.split("/");
            let currentPlayer = this.invitedPlayers.find(pl => pl.name === name);
            age = Number(age);
            playerValue = Number(playerValue)
            if (!currentPlayer) {
                this.invitedPlayers.push({
                    name,
                    age,
                    playerValue
                })
                playersName.push(name);
            } else {
                if (playerValue > currentPlayer.playerValue) {
                    currentPlayer.playerValue = playerValue
                }
            }

        });
        return `You successfully invite ${playersName.join(", ")}.`
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split("/");
        playerOffer = Number(playerOffer);
        let currentPlayer = this.invitedPlayers.find(pl => pl.name === name);

        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`)
        }

        if (currentPlayer.playerValue > playerOffer) {
            throw new Error(`"The manager's offer is not enough to sign a contract with ${name}, ${currentPlayer.playerValue - playerOffer} million more are needed to sign the contract!"`)
        }
        currentPlayer.playerValue = "Bought";
        return `Congratulations! You sign a contract with ${currentPlayer.name} for ${playerOffer} million dollars.`



    }

    ageLimit(name, age) {
        let currentPlayer = this.invitedPlayers.find(pl => pl.name === name);

        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`)
        }

        if ((currentPlayer.age >= age)) {
            return `${name} is above age limit!`
        }
        let ageDifference = age - currentPlayer.age;

        if(ageDifference < 5){
            return`${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
        }
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`

    }

    transferWindowResult(){
        //Players list:
        //Player Kylian Mbappé-Bought
        //Player Lionel Messi-50
        let playersInfo = [];
        this.invitedPlayers.forEach(pl => playersInfo.push(`Player ${pl.name}-${pl.playerValue}`));

        return `Players list:\n${playersInfo.join("\n")}`;
    }


}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

