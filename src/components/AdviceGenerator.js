import React, {useState, useEffect} from "react";
import AdvicePage from "./AdvicePage";
import Loading from "./Loading";

const AdviceGenerator = () => {
    const [advice, setAdvice] = useState();
    const [loading, setLoading] = useState(true);

    const url = "https://api.adviceslip.com/advice";

     useEffect(() => {
        const fetchAdvice = async () => {
            const response = await fetch(url);
            if (loading) setAdvice(await response.json());
            setLoading(false)
        }

        fetchAdvice();
    }, [advice]);

    const changeAdvice = () => {
        setAdvice();
        setLoading(true);
    }


    return(
        <div>
           {loading ? <Loading /> : <AdvicePage  changeAdvice={changeAdvice} slip={advice.slip} />}

           
        </div>
    )
}

export default AdviceGenerator;