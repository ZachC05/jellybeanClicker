var JellybeansOwned = 0;
var jellybeanPower = 1;
var costToUpgradePower = 50;
var autoClickseconds = 2000;
var autoEnabled = false;
var costtoupgradeAuto = 100;
var autoClickPower = 0;

function Click(){
    JellybeansOwned = JellybeansOwned + jellybeanPower;
    document.getElementById("AmountOfJellybeans").innerHTML = JellybeansOwned
}

function Upgradeclick(){
if(JellybeansOwned >= costToUpgradePower){
    JellybeansOwned = JellybeansOwned - costToUpgradePower;
    jellybeanPower++;
    costToUpgradePower = costToUpgradePower + (Math.round(costToUpgradePower * 0.5))
    document.getElementById("AmountOfJellybeans").innerHTML = JellybeansOwned;
    document.getElementById("upgradeCost").innerHTML = "Cost to Upgrade Jellybean Power:" + costToUpgradePower;
    document.getElementById("JellyPWR").innerHTML = "Current Jellybean Power :" + jellybeanPower;
}
}

function UpgradeAuto(){
    if(JellybeansOwned >= costtoupgradeAuto && autoClickPower != 5){
        JellybeansOwned = JellybeansOwned - costtoupgradeAuto;
        costtoupgradeAuto = costtoupgradeAuto + (Math.round(costtoupgradeAuto * 0.5))
        autoClickPower++;

        if(autoEnabled = true){
           autoClickseconds = autoClickseconds - 250;
        }
        
        document.getElementById("AmountOfJellybeans").innerHTML = JellybeansOwned
        document.getElementById("AutoClick").innerHTML = "Current AutoClick Power:" + autoClickPower +  "Cost to Upgrade:" + costtoupgradeAuto;

        if(autoEnabled == false) return
        alert("Started")
        autoEnabled = true
        autoClick()

    }
}

function autoClick(){
    JellybeansOwned = JellybeansOwned + jellybeanPower;
    
    document.getElementById("AmountOfJellybeans").innerHTML = JellybeansOwned
    setTimeout(autoClick, autoClickseconds);
}

function Win(){
    if(JellybeansOwned >= 9999){
        document.getElementById("WinButton").innerHTML = "You WIN! Now you can continue playing to get even more jellybeans!"
    }
}