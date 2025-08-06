const loadComic = document.getElementById("comic-loading");
const imgComic = document.getElementById("img-id");
       
loadComic.addEventListener("click", getComicData);

        function getComicData() {
           fetch("https://xkcd.now.sh/?comic=latest")
           .then(response => {
                if (!response.ok) {
                    throw new Error(`Comic not available (status: ${response.status})`);
            }
                
                return response.json();
         })    
                .then(data => {
                    console.log(data);
                    imgComic.src = data.img;
                    imgComic.alt = data.alt;
                })
                
               .catch (error => {
                console.error("Error fetching comic:", error);
                alert("Could not load the comic. Please try again later.");
            });
        }

  