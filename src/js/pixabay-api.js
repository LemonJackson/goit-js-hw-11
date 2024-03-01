
export function getData(userInput) {
    const URL = "https://pixabay.com/api/";
    const KEY = "42630881-770530465aa98d154d18ed059";
    return fetch(`${URL}?key=${KEY}&q=${userInput}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })

}