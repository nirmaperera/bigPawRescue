import axios from "axios";

async function getPets(setPetData, setLoading) {
    try {
        const response = await axios.get(`https://eulerity-hackathon.appspot.com/pets`);
        setPetData(response.data);
        setLoading(false);
    } catch (error) {
        console.warn(error);
    }
}

export { getPets };
