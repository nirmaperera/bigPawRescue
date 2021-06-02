import axios from 'axios';

const handleImageDownload = (imageUrl) => {
    axios.get(imageUrl,
        {
            responseType: 'arraybuffer',
        })
        .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'petImage.png');
            document.body.appendChild(link);
            link.click();
        })
        .catch((error) => console.log(error));
}

export {handleImageDownload};
