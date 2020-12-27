const request = new Request("https://api.github.com/repos/CerBor/MineAutoServerScript/releases/latest")

fetch (request)
    .then((responce) => {
        return responce.json();
    })
    .then((data) => {
        var version = data["tag_name"].substring(1);
        var name = data["name"];
        var date_of_publish = data["published_at"].substring(0, 10);
        document.write(`{\"schemaVersion\":\"1\",\"label\":\"Latest update\",\"message\":\"${version}\",\"color\":\"brightgreen\",\"style\":\"flat\",\"logoSvg\":\"./download.svg\"}`);
    });
