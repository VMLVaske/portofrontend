import { useState, useEffect } from "react";
import axios from "axios";

const getEtherscan = (address, callback) => {
    console.log("inside getEtherscan")
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const uri = "https://api.etherscan.io/api"

    const params = {
        module: address,
        action: "txlist",
        address: address,
        startblock: 0,
        endblock: 99999999,
        sort: "asc",
        apikey: process.env.ETHERSCAN_API_KEY
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(uri, { params });
                setData(response.data);
                setIsLoading(false);
                if (callback) {
                    callback(response.data);
                }
            } catch (error) {
                setIsLoading(false);
                setError(error);
            }
        };

        fetchData();
    }, []);

    return { data, isLoading, error };
};

export default getEtherscan;
