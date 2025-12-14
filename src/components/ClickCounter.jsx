import { useState, useEffect } from "react";
import { Coins, Landmark, Pickaxe, CircleGauge, MousePointerClick, CircleDollarSign  } from "lucide-react"
import { animate, motion } from "motion/react"
import AnimatedValue from "./AnimatedValue";
import style from './ClickCounter.module.css';


function ClickCounter({incrementBy = 1, initialValue = 100, buttonText = "Kliknij mnie"}) 
{
    const [goldamount, setGoldAmount] = useState(initialValue)
    const [gold, setClickpoint] = useState(1)
    const [clickUpgradeCost, setClickUpgradeCost] = useState(10)
    const [autoClicker, setAutoClickerCost] = useState(40)
    const [autoClickerpower, setAutoClickerpower] = useState(0)
    const [autoClickerlevel, setAutoClickerlevel] = useState(0)
    const [autoClickerSpeedLevelCost, setAutoClickerSpeedLevelCost] = useState(100)


    const upgradeClickPower = () => {
        if(goldamount >= clickUpgradeCost){
            setClickpoint(gold => gold + 1)
            setGoldAmount(goldamount => goldamount - clickUpgradeCost)
            setClickUpgradeCost(clickUpgradeCost => clickUpgradeCost * 2)
        }
    } 
    const autoClick = () => {
        if(goldamount >= autoClicker){
            setAutoClickerCost(autoClickerCost => autoClickerCost * 2)
            setGoldAmount(goldamount => goldamount - autoClicker)
            setAutoClickerpower(autoClickerpower => autoClickerpower + 1)
        }
    }
        useEffect(() => {
            let interval1, interval2, interval3;
            if (autoClickerpower === 1) {
                interval1 = setInterval(() => {
                    setGoldAmount(goldamount => goldamount + 1)
                }, 1000);  
            }
            if (autoClickerlevel === 2) {
                interval2 = setInterval(() => {
                    setGoldAmount(goldamount => goldamount + 1)
                }, 750);   
            }
            if (autoClickerlevel === 3) {
                interval3 = setInterval(() => {
                    setGoldAmount(goldamount => goldamount + 1)
                }, 500);   
            } 
            return () => {
                clearInterval(interval1);
                clearInterval(interval2);
                clearInterval(interval3);
            }
        }, [autoClickerpower, autoClickerlevel]);
    const autoClickerSpeedLevel = () => {
        if(goldamount >= autoClickerSpeedLevelCost){
            setAutoClickerSpeedLevelCost(autoClickerSpeedLevelCost => autoClickerSpeedLevelCost * 2)
            setGoldAmount(goldamount => goldamount - autoClickerSpeedLevelCost)
            setAutoClickerlevel(autoClickerlevel => autoClickerlevel + 1)
        }
    }
        return(
        <>
            <div className={style.main}>
                <CircleDollarSign size={100} color="#d2d388"/>
                <h1>Dig Gold!</h1>
                <p><Coins size={18}/>Gold: 
                    <AnimatedValue value={goldamount}/>
                </p>
                <p><Pickaxe size={18}/>Dig power: {gold}</p>

                <p><MousePointerClick />Auto clicker power: 
                    <AnimatedValue value={autoClickerpower}/>
                </p>

                <p><CircleGauge size={18}/>Auto clicker speed level: 
                    <AnimatedValue value={autoClickerlevel}/>
                </p>
                <div className={style.buttons}>
                    <button onClick={() => setGoldAmount(goldamount + gold)}>Dig Gold</button>
                    <button onClick={upgradeClickPower} style={{marginLeft: "10px"}} disabled={goldamount < clickUpgradeCost}>Upgrade dig power(Cost: {clickUpgradeCost})</button>
                    <button onClick={autoClick} style={{marginLeft: "10px"}} disabled={goldamount < autoClicker}>Auto Clicker Buy(Cost: {autoClicker})</button>
                    <button onClick={autoClickerSpeedLevel} style={{marginLeft: "10px"}} disabled={goldamount < autoClickerSpeedLevelCost}>Auto Clicker Speed level(Cost: {autoClickerSpeedLevelCost})</button>
                </div>
            </div>
        </>
    ); 
};
 



export default ClickCounter
